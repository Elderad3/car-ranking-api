const express = require('express');

const app = express();

require('./app/database');

const port = process.env.PORT || 3000;

// cors -------------------------------------------------------------------------------------------------------
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
  
    if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
      return res.status(200).send({});
    }
    next();
  });

const routes = require('./routes');

app.use(express.json());

app.use(routes);

app.listen(port);
