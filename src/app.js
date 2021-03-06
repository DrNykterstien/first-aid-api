const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const apirouter = require('./routers/index');

const app = express();

app.disable('x-powered-by');
app.use(express.static('public'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// routers
app.use('/api/', apirouter);

module.exports = app;
