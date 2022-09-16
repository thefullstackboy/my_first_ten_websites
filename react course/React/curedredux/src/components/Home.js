import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Action from '../redux/action/action'

export const Home = () => {

  try{
    const dispatch = useDispatch();
    const responseData = useSelector((state)=> state.Reducer.details);

    useEffect(()=> {
      dispatch(Action());
  },[dispatch])


   
    const result = responseData.map((data, index)=>{
        return (
        <tr key={index}>
            <th scope="row">{data.id}</th>
            <td>{data.name}</td>
            <td>{data.email}</td>
            <td>{data.phone}</td>
            <td>{data.country}</td>
        </tr>
        )  
    })
  return (
    <div><h1>React Redux Crud Operation | Read Operation</h1>
    <table className="table table-dark">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Country</th>
    </tr>
  </thead>
  <tbody>   
  </tbody>
  {result}
</table>
    </div>
    
  )

  }  catch (error){
    console.log("error50**************",error)

  }

}
//23.00