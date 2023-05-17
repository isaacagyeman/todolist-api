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

// app.use(function(req,res){
// res.status(404).send({url:req.originalUrl + 'not found'})
// });

var routes = require('./api/routes/todoListRoutes');
routes(app);


app.listen(port);
console.log('todo list RESTFUL ApI server started on: ' + port);

/*

const express = require('express')
const app = express()

// This is a demonstration of middleware in nodejs

app.get('/api/agengo',(req,res)=>{
res.send("Welcome to this shitty homepage")
})

app.post('/api/agengo',(req,res)=>{
    const name = req.body
    if(!name){
        return res.status(400)
                  .json({success:false, msg:'please enter a valid input'})
    }else{
        res.status(201).send({success:true, person:name})
    }
    
})

app.listen(5000);

*/