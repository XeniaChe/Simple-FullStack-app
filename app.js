const express = require('express');

const app = express();
const cors = require('cors');
const middleware = require('./utils/middelware');
const usersRouts = require('./controllers/users');

app.use(cors());
app.use(express.json());
app.use('/api/users', usersRouts);

app.use(middleware.requestLogger);
app.use(middleware.unknownEndpoint);

module.exports = app;
