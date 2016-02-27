var express = require('express');
var app = express();

app.use('/static', express.static(__dirname + '/public'));
app.use('/service-worker.js', express.static(__dirname + '/public/js/service-worker.js'));

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', function (req, res) {
  res.render('index');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
