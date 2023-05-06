const express = require('express');
const router = express.Router();
const todoController = require('../controller/todoController');
const controller = require('../controller/singnupController');

//create todo
router.post('/usertodo',todoController.todoList)

//update method
router.patch('/usertodoupdate',todoController.todUpdatelist)

//find method
router.get('/usertodofind',todoController.todoFind)

//delete mehod
router.delete('/usertododelete',todoController.todoDelete)


module.exports = router;