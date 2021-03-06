/**
* routes/devRoutes.js
*
* Routes made for extending application
*/

// import express tool
var express = require('express');

// create express router tool to use for adding
//  routes to application
var router = express.Router();

// Import Controller definitions for control method calls:
//  relative path to controller
var devController = require('../controllers/devController');

// GET request for list of all Book items.
router.get('/', devController.dev_home);

// Extending Website  : /dev/ext
router.get('/ext', devController.dev_ext);

// VERY IMPORTANT to include at end of file
module.exports = router;
