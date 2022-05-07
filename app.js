const promptUser = require('./utils/index');
// const db = require('./db/connection');
// const apiRoutes = require('./routes/apiRoutes');
const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

// express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(promptUser);

