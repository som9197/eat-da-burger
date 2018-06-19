var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var methodOverride = require("method-override");


var routes = require("./controllers/burgers_controller.js");


var app = express();
app.use(express.static(__dirname + "/public"));

var port = 3306;    

app.use(methodOverride('_method'));

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
 
app.set('port', process.env.PORT || 3306 );

app.use("/", routes);

var server = app.listen(app.get('port'), function() {
  console.log('Listening on port ' + app.get('port'));
});