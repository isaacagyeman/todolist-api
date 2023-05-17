'use strict'
var mongoose = require('mongoose');
var Task = mongoose.model('Tasks');

//This line of code is suppose to list all the tasks saved in the database
exports.list_all_tasks = function(req, res){
Task.find({}, function(err,task){
    if(err)
        res.send(err);
        res.json(task);
});
};


// This line of code is suppose to create a new task and save it in the database 
exports.create_a_task = function(req,res){
    var new_task = new Task(req.body);
    new_task.save(function(err, task){
        if(err)
            res.send(err);
            res.json(task);
    });
};

// This line is suppose to read a task from the database
exports.read_a_task = function(req, res){
    var taskId = req.params._id
    Task.findById(taskId, function(err, task){
        if(err){
            res.send(err);
        }
        res.json(task);
        
    });
};

// This line is suppose to update a task in the database
exports.update_a_task = function(req, res){
    Task.findOneAndUpdate({
        _id: req.params.taskId}, req.body, {new:true}, function(err, task){
            if(err)
                res.send(err);
                res.json(task);
            
        });
};

//This line is suppose to delete a task from the database
exports.delete_a_task = function(req, res){
    Task.remove({
        _id: req.params.taskId},
        function(err, task){
            if(err)
                res.send(err)
                res.json({message : 'Task successfully deleted'});
            
        });
};