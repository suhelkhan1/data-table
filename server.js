var compression = require('compression')
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(compression());
app.use(compression(express.static(__dirname + '/dist/data-table')));

app.get('/*', function(req, res) {

res.sendFile(path.join(__dirname + '/dist/data-table/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);