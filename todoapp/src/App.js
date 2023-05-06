import './App.css';
import PostForm from '../src/component/TodoApp'
import FindAlltodo from '../src/component/FindAlltodo'
import UpdateTodo from '../src/component/UpdateTodo';


import { BrowserRouter, Routes, Route } from "react-router-dom";
  

function App(user) {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>                
          <Route path="alltodo" element={<FindAlltodo/>} />           
          <Route exact path="/" element={<PostForm/>} />
          <Route path="alltodo/updatetodo" element={< UpdateTodo user={user}/>}/>         
      </Routes>
    </BrowserRouter>      
    </div>
  );
}

export default App;
