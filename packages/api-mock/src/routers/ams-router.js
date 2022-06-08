const router = require('express').Router();

const amsHandlers = require("../handlers/ams");

router.get("/organizations/:orgId/quota_cost", amsHandlers.quotaCostGet);

router.get("/current_account", amsHandlers.currentAccount);

module.exports = router;