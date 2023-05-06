import React from 'react';
import axios from 'axios';
import {Link } from "react-router-dom";


function PostForm() {
 
    const submitHandler = (event) => {
      const taskTitle = event.target.taskTitle.value;
      const taskDescription = event.target.taskDescription.value;
      const taskTime = event.target.taskTime.value;
      axios.post("http://localhost:3000/api/v1/usertodo",{
        taskTitle,
        taskDescription,
        taskTime
      })
      .then((response) => {
          console.log("response",response);
          event.target.reset();
      })      
      .catch((error)=>{
         console.log(error)
      })
    }
	
return (
	<div className="App">
	<header className="App-header">
	<form onSubmit={submitHandler}>	
	<h2>Todo Application</h2>
		<label>
		Please enter your todo title
		</label><br/>
		<input type="text" id="taskTitle" name='taskTitle'/><br/>

        <label >
		taskDescription:
		</label><br/>
		<input type="text" id="taskDescription" name='taskDescription' /><br/>

        <label >
		taskTime:
		</label><br/>
		<input type="text" id="taskTime" name='taskTime' /><br/>
        <button type='submit'>submit</button>
        <nav>
        
          <button>
          <li>
            <Link to="alltodo" style={{color:"red"}}>All todo</Link>
          </li>

          </button>
      
      
        
      </nav>     		
       
	</form>
	</header>
	</div>
);
}

export default PostForm;
