const express = require('express');
const router = express.Router();
const activityControllers = require('../controllers/activity');

router.get('/', activityControllers.getActivity);

module.exports = router;