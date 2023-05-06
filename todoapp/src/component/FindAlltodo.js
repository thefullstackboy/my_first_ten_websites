import React,{useState,useEffect} from 'react';
import axios from 'axios';
import TabaleCall from '../component/toDocall'
export const FindAlltodo = () => { 
  const [users, setUsers] = useState([]);
 const fetchData = async() => {
      let result = await axios.get('http://localhost:3000/api/v1/usertodofind');
       setUsers(result.data.data);      
       console.log(result.data.data);
   }   
   
     useEffect(() => {
       fetchData()   
     }, [])
  return (
    <div>
            <table>
            <thead>
              <tr>
                <th>To do id</th>
                <th>Task title</th>
                <th>Task description</th>
                <th>Task time</th>
                <th>Delete Task</th>
              </tr>   
              </thead>
              <tbody>
                {
                  <>  
                  {
                   users.map((user)=>{
                    return (
                      <TabaleCall user={user} key={user.id}/>
                    )
                   })          
                  }     
                  </>
                } 
          
          </tbody>
            </table>  
     
    </div>
  )
}

export default FindAlltodo
 


/* <p key={'uniqueValue'}>{user.id}</p> 
            <p>task title &#8594;{user.taskTitle}</p>
            <p>task taskDescription &#8594;{user.taskDescription}</p>       
            <p>task task time &#8594;{user.taskTime}</p> */