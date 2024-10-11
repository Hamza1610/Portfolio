var createError = require('http-errors');
var express = require('express');
var path = require('path');

var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var profilesRouter = require('./routes/profiles');
var apiRouter = require('./routes/api/profile');
var authRouter = require('./routes/auth');
var express3EjsLayouts = require('express3-ejs-layout');
var app = express();

// view engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set(express3EjsLayouts);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules/bootstrap/dist')));

app.use(express.static(path.join(__dirname, 'node_modules/axios/dist/axios.js')));

app.use('/', indexRouter);
app.use('/profiles', profilesRouter);
app.use('/api', apiRouter);
app.use('/auth', authRouter);
app.use('/users', usersRouter);

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
  res.render('error');
});




// Changing server config to nodemon 
/**
 * Create HTTP server.
 */
var http = require('http');
var server = http.createServer(app);

/* 
require and initialize mogoose ORM
*/
var urlDB = "mongodb://localhost:27017/"
var db = require('mongoose');

/**
 * Listen on provided port, on all network interfaces.
 */

db.connect(urlDB)
.then((result) => {
  console.log(process.env.PORT || 3002);
  
  server.listen(process.env.PORT || 3002);
})
.catch((error) => console.log(error));


// module.exports = app;

