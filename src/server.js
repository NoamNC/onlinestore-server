const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const cors = require('cors');
const apiRouter = require('./config/routes');
const port = 4000;

app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());
app.use(morgan('combined'));


app.use('/api', apiRouter)
app.listen(port, () => {
    console.log(`1. listening on port ${port}!
2. connected to server`);
    require('./db');

});

module.exports = app;