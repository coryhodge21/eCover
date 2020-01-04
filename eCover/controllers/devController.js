/**
* controllers/userController.js
*/
// Tool Imports
const validator = require('express-validator');

// Require the User Model be imported
var Dev = require('../models/devModel.js');
var CheckingModel = require('../models/checking_model.js');

/*
* Export Definitions of functions
*   that will be used to handle each URL,
*   and perform the required database exchange.
*   i.e. : Create , Update , Delete
*
*   Optional env variable use with: req.params.xyz (.id)
*/
exports.dev_home = function(req, res, next) {

    // render the home page with template and argument array
    res.render('dev/dev_home');
};

/**
 * Extension Link Method
 */
exports.dev_ext = function(req, res, next) {

    // perform any database operations
    var checkingAccount = new CheckingModel();

    checkingAccount.set('_name' , 'Chase Checking');
    checkingAccount.set('_balance', 713);
    
    res.render('dev/dev_ext', 
        {
            name: checkingAccount.get('_name'),
            balance: checkingAccount.get('_balance')
        }
    );
};

/**
 * Create account
 */
exports.dev_create_user = function(req, res, next) {
    
};