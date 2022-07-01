const Sequelize = require('sequelize');
const console = require("console");
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
        const todoId = req.body.todoId;
        const userId = req.body.userId;
        

        console.log("taskTitle", titleUpdate);
        console.log("taskDescription", taskDescription);
        console.log("taskTime", titleTimeupdate);
        console.log("todoId", todoId)
      

        const todotUpdateData = {
            taskTitle: titleUpdate,
            taskDescription: taskDescription,
            taskTime: titleTimeupdate,
        };

        const result = await usertodoModel.update(
            todotUpdateData, {
                where: {
                    id: todoId,
                    userId:userId
                }
            }
        )

        console.log("Result", result[0]);

        if(result[0] === 0){
            res.send({
                success: false,
                message: "Invalid To-Do ID",
            });
        } else {
            res.send({
                success: true,
                message: "To-Do updated Succesfully." 
            })
        }
       
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
    const userId = req.body.userId;

    console.log(userId)  
    const result = await usertodoModel.findAll({
        where: {
            userId: userId,           
            active: 1
        }
    })

    console.log("find result",result)

    if(result.length != 0){       
        res.send({
            success: true,
            message: "to do data found",
            data: result 
        })
    } else {
        res.send({
            success: false,
            message: "data not found",
        });

    }
    console.log("find result",result)

  
  
}

//find by id
const findTodobyId = async (req, res, next) => {
    const userId = req.body.userId;
    const todoId = req.body.todoId;

    console.log(userId)
    console.log(todoId)

const result = await usertodoModel.findOne({
    where: {
        id: todoId,
        userId: userId,  
        active: 1
    }
})

if(result){       
    res.send({
        success: true,
        message: "to do data found",
        data: result 
    })
} else{
    res.send({
        success: false,
        message: "data not found",
    });

}
} 

//multiple id find todo
const findTodomulipleId = async (req, res, next) => {
    const userId = req.body.userId;
    const todoIds = req.body.todoId.split(',');

    console.log(userId)
    console.log(todoIds)

const result = await usertodoModel.findAll({
    where: {
        id: {[Sequelize.Op.in]:todoIds},
        userId: userId,  
        active: 1
    }
})

if(result.length != 0){       
    res.send({
        success: true,
        message: "to do data found",
        data: result 
    })
} else{
    res.send({
        success: false,
        message: "data not found",
    });

}
} 



//single delete todo
const todoDelete = async (req, res, next) => {
    //take todo id from front-end
    const todoId = req.body.todoId;
    const dropDetails = {
        active: 0
    }

    const result = await usertodoModel.update(
        dropDetails, {
            where: {
                id: todoId,
                active:'1',
            }
        }
    )    

    res.send({
        success: true,
        data: result
    })
}


//all delete todo 's
const alltodoDelete = async (req, res, next) => {
    const userId = req.body.userId 
    const dropDetails = {
        active: 0
    }

    const result = await usertodoModel.update(
        dropDetails, {
            where: {
                userId: userId,
                active:'1',
            }
        }
    )
   
    
    console.log("all delete todo", result)

    res.send({
        message:"all to do delete",
        success: true,
        data: result
    })

    console.log("all delete todo", result)
}

//select todo delete
const selectTodoDelete = async(req, res, next) => {
    const todoIds = req.body.todoIds.split(',');


    
    const dropDetails = {
        active: 0
    }

    const result = await usertodoModel.update(
        dropDetails, {
            where: {
                id: {[Sequelize.Op.in]:todoIds},
               // active:'1',             
            },
            logging: console.log         
        }
    )   

    
 
    console.log(result)

    res.send({
        message: "selected to do delete",
        success: true,
        data: result,        
    })
}





module.exports = {
    todoList,
    todUpdatelist,
    findTodobyId,
    todoFind,
    findTodomulipleId,
    todoDelete,
    alltodoDelete,
    selectTodoDelete,
   
}