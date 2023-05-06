const usertodoModel = require("../models/todoModel");

//create todo  list
const todoList = async (req, res, next) => { 
    const taskTitle = req.body.taskTitle;
    const taskDescription = req.body.taskDescription;
    const taskTime = req.body.taskTime;

    console.log("taskTitle", taskTitle);
    console.log("taskDescription", taskDescription);
    console.log("taskTime", taskTime); 

    const createList = {             
        taskTitle: taskTitle,
        taskDescription: taskDescription,
        taskTime: taskTime,        
    }
    //create todo list
    const user = await usertodoModel.create(createList);
    res.send({
        message: "success",
        data: user
    });
}

//update list iteme
const todUpdatelist = async (req, res, next) => {
    try {       
        const taskTitle = req.body.taskTitle;
        const taskDescription = req.body.taskDescription;
        const taskTime = req.body.taskTime;
        const userId = req.body.userId;

        const todotUpdateData = {
            taskTitle: taskTitle,
            taskDescription: taskDescription,
            taskTime: taskTime,
        };

        const result = await usertodoModel.update(
            todotUpdateData, {
                where: {
                    id: userId
                }
            }
        )

        res.send({
            success: true,
            data: result
        })
    } catch (err) {
        console.log(err)
        res.send({
            success: false,
            data: []
        });
    }
}


//find item 
const todoFind = async (req, res, next) => {
    // const taskTitle = req.body.taskTitle;
    // console.log(taskTitle)
    // const findDetails = {
    //     taskTitle: taskTitle
    // }
    const receiveInformaion = await usertodoModel.findAll({
       
    })

    // console.log(taskTitle)
    res.send({
        success: true,
        data: receiveInformaion
    })
}


//delete to item
const todoDelete = async (req, res, next) => {
    const todoId = req.body.todoId;
    console.log("todoId",todoId)   

    const deleteInformaion = await usertodoModel.destroy({
        where: {
            id: todoId,
            active: 1
        }
    })

    res.send({
        success: true,
        data: deleteInformaion
    })
}






module.exports = {
    todoList,
    todUpdatelist,
    todoFind,
    todoDelete
}