var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const methodOverride = require('method-override');
const session = require('express-session');

/*middlewares app*/
const cookieCheck = require('./middlewares/cookieCheck');
const localsUserCheck = require('./middlewares/localsUserCheck');

//requiere las Rutas 
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productImg = require('./routes/api/productos');
var productsRouter = require('./routes/products');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '..', 'public')));



app.use(methodOverride('_method'));
app.use(session({
  secret: "Our secret",
  resave: false,
  saveUninitialized: true
}));

app.use(cookieCheck)// cookieCheck va antes de localUserCheck
app.use(localsUserCheck);

// RUTAS
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/products', productImg);
app.use('/products', productsRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
