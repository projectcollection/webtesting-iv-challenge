require('dotenv').config()
const express = require('express');

const snackRouters = require('./snackRouters');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use('/snacks', snackRouters);


if (require.main == module) {
    app.listen(port);
} else {
    module.exports = app
}