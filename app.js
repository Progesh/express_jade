const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'public')));

app.get('/', function(req, res){
	res.render('index');
});

app.listen(3000);
console.log("server is running in port 3000");