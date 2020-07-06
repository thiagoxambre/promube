require('dotenv').config();
const express = require('express');
const path = require('path');
const compression = require('compression');
const pino = require('pino-http');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const protectedArea = require('./routes/protected');


const app = express();

app.use(compression());
app.use(pino());
app.use(helmet());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/protected', protectedArea);

module.exports = app;
