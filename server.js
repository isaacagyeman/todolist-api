var express = require('express');
//const { default: mongoose } = require('mongoose');
app = express()
port = process.env.PORT || 3000;

mongoose = require('mongoose'),
Task = require('./api/models/todoListModel'),
bodyParser = require('body-parser');

// Mongoose url connection
try{
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost/Tododb');

}catch(err){
    console.log(err.message)
}

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


var routes = require('./api/routes/todoListRoutes');
routes(app);


app.listen(port);
console.log('todo list RESTFUL ApI server started on: ' + port);

