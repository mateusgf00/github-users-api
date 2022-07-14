const express = require('express');

const routes = require('./routes');

require('dotenv').config();

const app = express();

app.use((request, response, next) => {
  response.setHeader('Access-Control-Allow-Origin', '*');
  next();
});
app.use(routes);

app.listen( process.env.PORT || 3001, () => console.log('Server started at http://localhost:3001'));