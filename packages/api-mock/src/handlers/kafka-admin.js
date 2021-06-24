var topics = require('../../_data_/topics.json');
var consumerGroups = require('../../_data_/consumer-groups.json');

module.exports = {
  getConsumerGroups: async (c, req, res) => {
    let consumerGroupList = consumerGroups;
    let count = consumerGroups !== undefined ? consumerGroups.length : 0;

    const filterConsumerGroups = (topicName) => {
      return consumerGroupList.filter((consumerGroup) => {
        return consumerGroup.consumers.some(
          (consumer) => consumer.topic === topicName
        );
      });
    };

    if (
      consumerGroups &&
      req.query &&
      req.query.topic &&
      req.query.topic.trim() !== ''
    ) {
      consumerGroupList = filterConsumerGroups(req.query.topic);
      count = consumerGroupList.length;
    }

    return res.status(200).json({
      limit: parseInt(req.query.limit, 10) || 100,
      offset: 0,
      count,
      items: consumerGroupList,
    });
  },

  getConsumerGroupById: async (c, req, res) => {
    const group = getConsumerGroup(c.request.params.consumerGroupId);
    if (!group) {
      return res.status(404).json({ error_message: 'not found' });
    }
    return res.status(200).json(group);
  },
  deleteConsumerGroupById: async (c, req, res) => {
    const id = c.request.params.consumerGroupId;

    const group = getConsumerGroup(id);
    if (!group) {
      return res.status(404).json({ error_message: 'not found' });
    }
    consumerGroups = consumerGroups.filter((t) => t.groupId !== id);

    return res.status(204).json({ message: 'deleted' });
  },
  resetConsumerGroupOffset: async (c, req, res) => {
    const id = c.request.params.consumerGroupId;

    const group = getConsumerGroup(id);
    if (!group) {
      return res.status(404).json({ error_message: 'not found' });
    }
    if (group.consumers && group.consumers.length) {
      for (let i = 0; i < group.consumers.length; i++) {
        group.consumers[i] = {
          ...group.consumers[i],
          offset: 0,
          lag: 0,
          logEndOffset: 0,
        };
      }
    }
    consumerGroups = consumerGroups.filter((t) => t.groupId !== id);
    consumerGroups.push(group);

    return res.status(200).json(group);
  },

  createTopic: async (c, req, res) => {
    const topicBody = c.request.body;

    if (!topicBody) {
      return res.status(400).json({ error_message: 'Bad request' });
    }

    let topic = getTopic(topicBody.name);

    if (topic) {
      return res.status(409).json({ error_message: 'topic exists' });
    }

    topic = {
      name: topicBody.name,
      config: topicBody.settings.config,
      partitions: createPartitions(
        topicBody.settings.numPartitions,
        topicBody.settings.replicationFactor
      ),
    };
    topics.push(topic);
    return res.status(200).json(topic);
  },

  getTopics: async (c, req, res) => {
    let count = topics ? topics.length : 0,
      topicList = topics;

    const filterTopics = () => {
      let regexp = new RegExp(`${req.query.filter.trim()}`);
      return topics.filter((topic) => regexp.test(topic.name));
    };

    if (topics && req.query.filter && req.query.filter.trim() !== '') {
      topicList = filterTopics();
      count = topicList.length;
    }

    let order = req.query.order || 'asc';

    let orderKey = req.query.orderKey;

    switch (orderKey) {
      case 'name':
        order === 'asc' ? topics.sort(compareName) : topics.sort((a, b) => compareName(b, a));
        break;
      case 'partitions':
        order === 'asc' ? topics.sort(comparePartitions) : topics.sort((a, b) => comparePartitions(b, a));
        break;
      case 'retention.ms':
        order === 'asc' ? topics.sort(compareRetentionMS) : topics.sort((a, b) => compareRetentionMS(b, a));
        break;
      case 'retention.bytes':
        order === 'asc' ? topics.sort(compareRetentionSize) : topics.sort((a, b) => compareRetentionSize(b, a));
        break;
      default:
        break;
    }

    return res.status(200).json({
      limit: parseInt(req.query.limit, 10) || 100,
      offset: 0,
      count,
      items: topicList,
    });
  },

  getTopic: async (c, req, res) => {
    const topic = getTopic(c.request.params.topicName);
    if (!topic) {
      return res.status(404).json({ error_message: 'not found' });
    }
    return res.status(200).json(topic);
  },

  deleteTopic: async (c, _, res) => {
    const topicName = c.request.params.topicName;

    const topic = getTopic(topicName);
    if (!topic) {
      return res.status(404).json({ error_message: 'not found' });
    }
    topics = topics.filter((t) => t.name !== topicName);

    return res.status(200).json({ message: 'deleted' });
  },

  updateTopic: async (c, _, res) => {
    const topicName = c.request.params.topicName;
    const topicBody = c.request.body;

    if (!topicBody) {
      return res.status(400).json({ error_message: 'Bad request' });
    }

    const topic = getTopic(topicName);
    if (topicBody.numPartitions) {
      topic.partitions = createPartitions(topicBody.numPartitions, 2);
    }

    if (topicBody.config) {
      topic.config = topicBody.config;
    }

    if (!topic) {
      return res.status(404).json({ error_message: 'not found' });
    }

    if (
      topicBody &&
      topic.settings &&
      topic.settings ** topic.settings.config
    ) {
      topic.config = topicBody.settings.config;
    }

    return res.status(200).json(topic);
  },

  // Handling auth
  notFound: async (c, req, res) => {
    debug(res);
    return res.status(404).json({ error_message: 'not found' });
  },
  unauthorizedHandler: async (c, req, res) => {
    return res.status(401).json({ error_message: 'unauthorized' });
  },
};

function getConsumerGroup(id) {
  return consumerGroups.find((c) => c.groupId === id);
}

function getTopic(name) {
  const topic = topics.find((t) => t.name === name);

  return topic;
}
function getConsumerGroup(id) {
  return consumerGroups.find((c) => c.groupId === id);
}

function getTopicRetentionTime(topic) {
  const [retentionMs] = topic.config.filter((entry) => entry.key === 'retention.ms')

  return Number(retentionMs.value);
}

function getTopicRetentionSize(topic) {
  const [retentionSize] = topic.config.filter((entry) => entry.key === 'retention.bytes')

  return Number(retentionSize.value);
}

function compareName(a, b) {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
}

function comparePartitions(a, b) {
  if (a.partitions.length < b.partitions.length) return -1;
  if (a.partitions.length > b.partitions.length) return 1;
  return 0;
}

function compareRetentionMS(a, b) {
  if (getTopicRetentionTime(a) < getTopicRetentionTime(b)) return -1;
  if (getTopicRetentionTime(a) > getTopicRetentionTime(b)) return 1;
  return 0;
}

function compareRetentionSize(a, b) {
  if (getTopicRetentionSize(a) < getTopicRetentionSize(b)) return -1;
  if (getTopicRetentionSize(a) > getTopicRetentionSize(b)) return 1;
  return 0;
}

const createPartitions = (numberOfPartitions, numberOfReplicas) => {
  const partitions = [];
  for (let i = 0; i < numberOfPartitions; i++) {
    const id = i + 1;
    partitions.push(createPartition(id, numberOfReplicas));
  }

  return partitions;
};

const createPartition = (id, numberOfReplicas) => {
  const replicas = [];
  for (let i = 0; i < numberOfReplicas; i++) {
    replicas.push({ id: i + 1 });
  }
  return {
    id,
    leader: {
      id: 1,
    },
    replicas,
  };
};
