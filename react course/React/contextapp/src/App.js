import React from 'react'
import './App.css';
import ParentComponent from './Components/ParentComponent'

export default function App() {
  return (
    <div className="App">
      <ParentComponent/>
    </div>
  )
}




// import React from 'react'
// import './App.css';
// //import DataFetchingOne from './Components/DataFetchingOne'
// import DataFetchingTwo from './Components/DataFetchingTwo'

// function App() {
//   return (
//     <div  className="App">
//       {/* <DataFetchingOne/> */}
//       <DataFetchingTwo/>
//     </div>
//   )
// }

// export default App








// import './App.css';
// import React, {useReducer
// } from 'react';
// import ComponentA from './Components/ComponentA';
// import ComponentB from './Components/ComponentB';
// import ComponentC from './Components/ComponentC';
// import DataFetchingOne from './Components/DataFetchingOne'

// export const CountContext = React.createContext()


// const initialState = 0
// const reducer = (state, action) => {
//     switch(action) {
//         case 'increment':
//             return state + 1
//         case 'decrement':
//             return state - 1
//         case 'reset':
//             return initialState
//           default:
//             return state
//     }
// }

// function App() {
//   const [count, dispatch] = useReducer(reducer, initialState)
//   return (
//     <CountContext.Provider
//       value={{ countState: count, countDispatch: dispatch}}
//     >
//       <div className="App">
//       Count = {count}
//       <ComponentA/>
//       <ComponentB/>
//       <ComponentC/>  
//     </div>
//     </CountContext.Provider>    
//   );
// }

// export default App;
