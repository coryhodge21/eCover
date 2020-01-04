/*
*       Imports
*/
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


/*      Routes require        */
var indexRouter = require('./routes/index');
var userRouter = require('./routes/user');
var devRouter = require('./routes/devRoutes');

/*  Create app  */
var app = express();


/*    Set up mongoose connection        */
var mongoose = require('mongoose');
var mongoDB = 'mongodb://127.0.0.1/eCover_db';
mongoose.connect(mongoDB, { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

/*        view engine setup        */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

/*  Middle ware chain     */
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/*    Add Routes      */
app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/dev', devRouter);


/*        Error Handling            */
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('public/error');
});

module.exports = app;
