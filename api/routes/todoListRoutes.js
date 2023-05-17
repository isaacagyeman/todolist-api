'use strict'
module.exports = function(app){
    var todoList = require('../controllers/todoListController');

    //todoList Routes
    app.route('/api/tasks/')
    app.get('/api/tasks/list_all_task',todoList.list_all_tasks)
    app.post('/api/tasks/create_a_task',todoList.create_a_task);

    app.route('/api/tasks/:taskId')
    app.get('/api/tasks/read_a_task:taskId',todoList.read_a_task)
    app.put('/api/tasks/update_a_task',todoList.update_a_task)
    app.delete('/api/tasks/delete_a_task',todoList.delete_a_task);
};