const express = require('express');
const router = express.Router();
const todoController = require('../controller/todoController');


//create todo
router.post('/usertodo',todoController.todoList)

//update method
router.post('/usertodoupdate',todoController.todUpdatelist)

//find method
router.post('/usertodofind',todoController.todoFind)

//delete mehod
router.post('/usertododelete',todoController.todoDelete)


module.exports = router;