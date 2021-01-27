const express = require('express');
const router = express.Router();
const adminControllers = require('../controllers/admin');

router.get('/add-activity', adminControllers.getAddActivity);

module.exports = router;