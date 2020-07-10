require('dotenv').config();
const express = require('express');
const path = require('path');
const compression = require('compression');
const pino = require('pino-http');
const helmet = require('helmet');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const passport = require('passport');
const logger = require('morgan');
const router = require('./routes');
/*
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const loginRouter = require('./routes/login');
const protectedArea = require('./routes/protected');
*/

require ('./secure/auth');

const app = express();

app.use(compression());
app.use(pino());
app.use(helmet());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended : false }) );
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

/*
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/', loginRouter);
app.use('/protected', passport.authenticate('jwt', { session : false }) , protectedArea);
*/
router(app);

//Handle errors
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({ error : err });
});

module.exports = app;
