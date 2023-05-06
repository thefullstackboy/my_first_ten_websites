import React,{useEffect} from "react";
import {Link } from "react-router-dom";
import axios from 'axios';
let qs = require('qs');

function TabaleCall(props) {
        const user = props.user;   




        
async function handleDelete(e){ 
  try {
   
    let data = qs.stringify({
      todoId: user.id 
    });
    let config = {
      method: 'delete',
      url: `http://localhost:3000/api/v1/usertododelete`,
      headers: { 
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data : data
    };
    
    const result = await axios(config);
    console.log("result",result)  

  }  catch(error) {
    console.log(error);
  };  
}

const fetchData = async() => {  
await axios.get('http://localhost:3000/api/v1/usertodofind');   
}   

useEffect(()=>{
  fetchData ()
})        

        return (
            <>                          
            <tr>
                <td>{user.id}</td>
                <td>{user.taskTitle}</td>
                <td>{user.taskDescription}</td>
                <td>{user.taskTime}</td>  
                
                <td>                 
                    <button onClick={(e) =>handleDelete(user.id)}>Delete</button>                
                </td> 

                <td>
                <button onClick={(e)=> {console.log(user.id)}}></button>  
                <Link to="updatetodo" style={{color:"green"}}>Update Todo</Link>
                </td>                        
            </tr> 
         
            </>
        )        
   }   
export default TabaleCall

