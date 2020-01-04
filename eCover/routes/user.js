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
//    absolute path: /user/
router.get('/', function (req, res, next) {
  res.render('user/user');
});
///TODO: i think the below need to be get('/create')
//            because in the user routes file all urls already have /user/... extension 
//            added to the begining

// GET request for creating User
router.get('/create', userController.user_create_get);

// POST Request for creating User
router.post('/create',userController.user_create_post);

// GET Request to delete USER
router.get('/:id/delete', userController.user_delete_get);

// POST Request to delete USER
router.post('/:id/delete', userController.user_delete_post);

// GET request to update USER.
router.get('/:id/update', userController.user_update_get);

// POST request to update USER.
router.post('/:id/update', userController.user_update_post);

// GET request for one USER.
router.get('/:id', userController.user_detail);

// VERY IMPORTANT to include at end of file
module.exports = router;
