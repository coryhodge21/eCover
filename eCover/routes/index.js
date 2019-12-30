// imports
var express = require('express');
var router = express.Router();




/* GET home page. */
// abolute_path: '/'
router.get('/', function(req, res, next) {
  res.render('public/index');
});




/*
*   Redirect to home page for maintenance
*/
/// absolute_path: '/redirect'
router.get('/redirect', function(req, res, next) {
  res.render('public/redirect');
})

module.exports = router;
