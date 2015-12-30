var express = require('express'),
    cons = require('consolidate'),
    app = express(),
    router = express.Router(),
    port = Number(process.env.PORT || 1337),
    host = '0.0.0.0';



//SWIG stuff
app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');



//Express stuff
app.use(router);
app.use(express.static('views'));

//allow all possible methods
router.all('/', function(req, res, next) {
    next();
});


router.get('/:name?', function(req, res) {
	var view = (req.params.name === undefined) ? 'index' : req.params.name;

	res.render(view);
});


var server = app.listen(port, host, function() {
    console.log('Listening on: http://' + host + ':' + port);
});