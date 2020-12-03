var express = require('express');
var app = express();

// Enable HTML template middleware
app.engine('html', require('ejs').renderFile);

// Enable static CSS styles
app.use(express.static('styles'));

// reply to request with "Hello World!"
app.get('/', function (req, res) {
  res.render('index.html');
});

app.get('/progress', function (req, res) {
  res.render('progress.html');
});

// start a server on port 80 and log its start to our console. Always use port 3000 for dev and port 80 in prod.
var server = app.listen(80, function () {

  var port = server.address().port;
  console.log('App running on ', port);

});
