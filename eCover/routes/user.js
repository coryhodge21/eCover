/**
* routes/users.js
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
var userController = require('../controllers/userController');

/*   USER routes   */

// GET request for creating User
router.get('/user/create', userController.user_create_get);

// POST Request for creating User
router.post('/user/create',userController.user_create_post);

// GET Request to delete USER
router.get('/user/:id/delete', userController.user_delete_get);

// POST Request to delete USER
router.post('/user/:id/delete', userController.user_delete_post);

// GET request to update USER.
router.get('/user/:id/update', userController.user_update_get);

// POST request to update USER.
router.post('/user/:id/update', userController.user_update_post);

// GET request for one USER.
router.get('/user/:id', userController.user_detail);

// GET request for list of all Book items.
router.get('/', function (req, res, next) {
  res.send('User: not yet implimented');
});

// VERY IMPORTANT to include at end of file
module.exports = router;
