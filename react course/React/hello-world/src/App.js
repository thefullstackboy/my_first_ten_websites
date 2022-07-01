import React, { Component }   from 'react';
import './App.css'
// import Counter from './Componets/Counter';
//import Greet from './Componets/Greet';
// import Greet from './Componets/Greet';
// import Welcome from './Componets/Welcome';
// import ClassClick from './Componets/ClassClick'
// import FunctionClick from './Componets/FunctionClick'
// import EventBind from './Componets/EventBind'
// import ParentComponent from './Componets/ParentComponent'
import UserGreeting from './Componets/UserGreeting'
class App extends Component {
  render() {
    return (
      <div className='App App-header'>
        <UserGreeting/>
        {/* <ParentComponent/> */}
        {/* <FunctionClick/> */}
        {/* <ClassClick/> */}
        {/* <EventBind/> */}
        {/* <Counter/> */}
        {/* <Greet name="Diana" heroName="Wonder Woman">      
        </Greet>
        <Welcome name="Bruce" heroName="Batman"/> */}
        {/* <Message/> */}
        {/* <Greet name="Bruce" heroName="Batman">
          <p>This is children props</p>
        </Greet>
        <Greet name="Clark" heroName="Superman">
          <button>Action</button>
        </Greet>
        <Greet name="Diana" heroName="Wonder Woman"/>
        <Welcome name="Bruce" heroName="Batman"/>
        <Welcome name="Clark" heroName="Superman"/>
        <Welcome name="Diana" heroName="Wonder Woman" />
      */}
      </div>
    )
  }
}

export default App;