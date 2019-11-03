const createError = require('http-errors');
const express = require('express');
const session = require('express-session');
const flash = require('connect-flash');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const serveStatic = require('serve-static');
const indexRouter = require('./routes/index');
const apiRouter = require('./routes/api');
const database = require('./utils/database');
const config = require('./config').config;
database.init();
const app = express();

app.locals.config = config;
app.locals.message = '';
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser('better'));
app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: 'better'
  })
);

app.use(flash());
app.use(
  serveStatic(path.join(__dirname, 'public'), {
    maxAge: '600000'
  })
);

app.use('/', indexRouter);
app.use('/api', apiRouter);

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
