/**
* controllers/userController.js
*/
// Tool Imports
const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

// Require the User Model be imported
var User = require('../models/user_model.js');


/*
* Export Definitions of functions
*   that will be used to handle each URL,
*   and perform the required database exchange.
*   i.e. : Create , Update , Delete
*
*   Optional env variable use with: req.params.xyz (.id)
*/
exports.index = function(req, res) {

    // perform any database operations

    // render the home page with template and argument array
    res.render('index', {title: 'Its a Start'});
};

// custom methods for returning data about this Schema/Model/Class
exports.user_create_get = function(req, res) {
  // Get all authors and genres, which we can use for adding to our book.
async.parallel({
  _name: function(callback) {
      User.find(callback);
  },
  _checkings: function(callback) {
      User.find(callback);
  },
}, function(err, results) {
  if (err) { return next(err); }
  res.render('book_form', { title: 'Create Book', authors: results.authors, genres: results.genres });
});
};

exports.user_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: List All User Accounts');
};

exports.user_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: List All User Accounts');
};

exports.user_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: List All User Accounts');
};

exports.user_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: List All User Accounts');
};

exports.user_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: List All User Accounts');
};

exports.user_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: List All User Accounts');
};

exports.user_list = function(req, res) {
    res.send('NOT IMPLEMENTED: List All User Accounts');
};
