var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'images')));


var server = app.listen(8090, function() {
    console.log('Listening on port %d', server.address().port);
});