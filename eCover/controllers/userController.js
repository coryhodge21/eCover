/**
* controllers/userController.js
*/
// Tool Imports
const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');
const async = require('async');

const mongoose = require('mongoose');

// Require the User Model be imported
var UserModel = require('../models/user_model.js');


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
// GET: /user/create
exports.user_create_get = function(req, res) {

  res.render('user/user_create');
};

// POST: /user/create
exports.user_create_post = function(req, res) {
    
    // Create Model
    var Cory = new UserModel({_name: 'Cory'});

    // check if model with this name exists in database
    //      before creating a new one

    // Save to Collection
    Cory.save()
        .then( doc => {
            console.log(doc)
            }
        ).catch(
            err => {
            console.error(err)
            }
        );

        res.render('user/user', {userFirstName: Cory.get('_name')});
};

exports.user_find_get = function(req, res) {
    
    UserModel.find( 
        // search query
        { _name: 'Cory' }
    ).then( 
        doc => {
            console.log(doc)
        }
    ).catch(
        err => {
            console.error(err)
        }
    );
};

exports.user_delete_get = function(req, res) {
    //res.render('dev/route_test');
    res.send('NOT IMPLEMENTED: List All User Accounts');
};

exports.user_delete_post = function(req, res) {
    //res.render('dev/route_test');
    res.send('NOT IMPLEMENTED: List All User Accounts');
};

exports.user_update_get = function(req, res) {
    //res.render('dev/route_test');
    res.send('NOT IMPLEMENTED: List All User Accounts');
};

exports.user_update_post = function(req, res) {
    //res.render('dev/route_test');
    res.send('NOT IMPLEMENTED: List All User Accounts');
};

exports.user_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: List All User Accounts');
};

exports.user_list = function(req, res) {
    res.send('NOT IMPLEMENTED: List All User Accounts');
};
