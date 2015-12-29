var express = require('express'),
    cons = require('consolidate'),
    app = express(),
    port = Number(process.env.PORT || 1337),
    host = '0.0.0.0';



//SWIG stuff
app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('prod', __dirname + '/prod');



//Express stuff
app.all('/', function(req, res) {
    res.render('index', {'title': 'eat it swig'});
});

var server = app.listen(port, host, function() {
    console.log('Listening on: http://' + host + ':' + port);
});