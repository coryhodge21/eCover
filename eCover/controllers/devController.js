/**
* controllers/userController.js
*/
// Tool Imports
const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

// Require the User Model be imported
var User = require('../models/devModel.js');


/*
* Export Definitions of functions
*   that will be used to handle each URL,
*   and perform the required database exchange.
*   i.e. : Create , Update , Delete
*
*   Optional env variable use with: req.params.xyz (.id)
*/
exports.dev_home = function(req, res) {

    // perform any database operations

    // render the home page with template and argument array
    res.render('devView');
};
