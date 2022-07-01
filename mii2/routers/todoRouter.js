const express = require('express');
const router = express.Router();
const todoController = require('../controller/todoController');
const userController = require('../controller/userController');


//create todo
router.post('/usertodo',userController.verifyAuthentication,todoController.todoList)

//update method
router.post('/usertodoupdate',userController.verifyAuthentication,todoController.todUpdatelist)

//find method
router.post('/usertodofind',userController.verifyAuthentication,todoController.todoFind)

//find by id
router.post('/usertodofindbyid',userController.verifyAuthentication,todoController.findTodobyId)

//multiple find by id
router.post('/usertodomultiplefind',userController.verifyAuthentication,todoController.findTodomulipleId)

//single delete todo method
router.post('/usertododelete',userController.verifyAuthentication,todoController.todoDelete)

//all delete todo method
router.post('/useralltododelete',userController.verifyAuthentication,todoController.alltodoDelete)

//select id and delete to do
router.post('/selecttodobyid',userController.verifyAuthentication,todoController.selectTodoDelete)





module.exports = router;