const express = require('express');

const app = express();

const port = app.listen(3005);

app.get('/', function(req, res) {
    res.send("<h1>Express server Start</h1>")
});

app.listen(port, function() {
    console.log('start! express server');
});