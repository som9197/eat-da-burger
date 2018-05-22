var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var methodOverride = require("method-override");


var router = require("./controllers/burgersController.js");


var app = express();

var port = 3000;    

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000 );

app.use("/", router);

var server = app.listen(app.get('port'), function() {
  console.log('Listening on port ' + app.get('port'));
});