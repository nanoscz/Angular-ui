'use strict'

const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8081;
// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/lazy-loading'));

app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname + '/dist/lazy-loading/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(port, () => {
  console.log(`Listening to the server on port ${port}`)
});
