const usertodoModel = require("../models/todoModel");

//create todo  list
const todoList = async (req, res, next) => {
    const userId = req.body.userId;
    const taskTitle = req.body.taskTitle;
    const taskDescription = req.body.taskDescription;
    const taskTime = req.body.taskTime;

    console.log("userId",userId)
    console.log("taskTitle", taskTitle);
    console.log("taskDescription", taskDescription);
    console.log("taskTime", taskTime);
 

    const createList = {
        userId:userId,      
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
       
        const titleUpdate = req.body.titleUpdate;
        const taskDescription = req.body.taskDescription;
        const titleTimeupdate = req.body.titleTimeupdate;
        const userId = req.body.userId;
        

        console.log("taskTitle", titleUpdate);
        console.log("taskDescription", taskDescription);
        console.log("taskTime", titleTimeupdate);
        console.log("titleId", userId)
      

        const todotUpdateData = {
            taskTitle: titleUpdate,
            taskDescription: taskDescription,
            taskTime: titleTimeupdate,
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
    const findtaskTitle = req.body.findtaskTitle;

    console.log(findtaskTitle)

    const findDetails = {
        taskTitle: findtaskTitle
    }

    const receiveInformaion = await usertodoModel.findAll({
        where: {
            taskTitle: findtaskTitle,
            active: 1
        }
    })


    console.log(findtaskTitle)

    res.send({
        success: true,
        data: receiveInformaion
    })
}


//delete to item
const todoDelete = async (req, res, next) => {
    const titleDelete = req.body.titleDelete;

    const dropDetails = {
        taskTitle: titleDelete
    }

    const deleteInformaion = await usertodoModel.destroy({
        where: {
            taskTitle: titleDelete,
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