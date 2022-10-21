var topics = require('../../_data_/topics.json');
var consumerGroups = require('../../_data_/consumer-groups.json');
var ACLs = require('../../_data_/ACLs.json');

module.exports = {
  getConsumerGroups: async (c, req, res) => {
    let consumerGroupList = consumerGroups;
    let total = consumerGroups !== undefined ? consumerGroups.length : 0;

    let order = req.query.order || 'asc';
    let orderKey = req.query.orderKey;
    
    if(orderKey=='name') {
      order === 'asc' ? consumerGroups.sort(compareGroupId) : consumerGroups.sort((a, b) => compareGroupId(b, a));
    }
    
    const filteredConsumerGroups = () => {
      let regexp = new RegExp(`${req.query['group-id-filter'].trim()}`,`i`);
      return consumerGroups.filter((consumerGroup) => regexp.test(consumerGroup.groupId));
    };
    if (consumerGroups && req.query['group-id-filter'] && req.query['group-id-filter'].trim() !== '') {
      consumerGroupList = filteredConsumerGroups();
      total = consumerGroupList.length;
    }
    
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
      total = consumerGroupList.length;
    }

    return res.status(200).json({
      total,
      page: Number(req.query.page) || 1,
      size: Number(req.query.size) || 10,
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
    const payload = c.request.body;

    if (!payload || !payload.length && !payload.offset) {
      return res.status(400).json({ error_message: 'missing request body' })
    }


    if(!payload.value && payload.offset !== "latest" && payload.offset !== "earliest") {
      return res.status(400).json({ error_message: `Value has to be set when ${payload.offset} offset is used.`})
    }

    if((payload.offset === "latest" || payload.offset === "earliest") && payload.value) {
      return res.status(400).json({ error_message: `Value can't be used when ${payload.offset} offset is used.`})
    }

    const group = getConsumerGroup(id);
    if (!group) {
      return res.status(404).json({ error_message: 'not found' });
    }

    let offset = 0, lag = 0;
    switch (payload.offset) {
      case 'earliest':
        lag = 10;
        break;
      case 'latest':
        offset = 10;
        break;
      case 'absolute':
        offset = parseInt(payload.value)
        lag = 10 - offset;
        break;
      case 'timestamp':
        offset = 5;
        lag = 5;
        break;
      default:
        return res.status(400).json({ error_message: 'invalid offset value' })
    }

    if (group.consumers && group.consumers.length) {
      for (let i = 0; i < group.consumers.length; i++) {
        group.consumers[i] = {
          ...group.consumers[i],
          offset,
          lag,
          logEndOffset: 0,
        };
      }
    }
    consumerGroups = consumerGroups.filter((t) => t.groupId !== id);
    consumerGroups.push(group);

    const updatedConsumers = group.consumers.map(({ topic, partition, offset }) => ({
      topic,
      partition,
      offset
    }))

    return res.status(200).json({
      items: updatedConsumers,
      total: updatedConsumers.length
    });
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
    let total = topics ? topics.length : 0,
      topicList = topics;

    const filterTopics = () => {
      let regexp = new RegExp(`${req.query.filter.trim()}`,`i`);
      return topics.filter((topic) => regexp.test(topic.name));
    };

    if (topics && req.query.filter && req.query.filter.trim() !== '') {
      topicList = filterTopics();
      total = topicList.length;
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
      total,
      page: Number(req.query.page) || 1,
      size: Number(req.query.size) || 10,
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

  consumeRecords: async (c, _, res) => {
    return res.status(200).json(require("../../_data_/topicProduce.json"));
  },

  produceRecord: async (c, _, res) => {
    return res.status(200).json(require("../../_data_/topicConsume.json"));
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

  createAcl: async (c, _, res) => {

    let ACLBody = c.request.body;
    ACLBody.kind = "AclBinding"
    ACLs.items.push(ACLBody);

    return res.status(201).end();
  },

  getAcls: async (c, _, res) => {
    return res.status(200).json(ACLs);
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

function compareGroupId(a, b) {
  if (a.groupId < b.groupId) return -1;
  if (a.groupId > b.groupId) return 1;
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
