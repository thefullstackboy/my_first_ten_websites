import React from 'react'
import './App.css';
//import ParentComponent from './Components/ParentComponent'
//import FocusInput from './Components/FocusInput';
//import HookTimer from './Components/HookTimer';
import DocTitleOne from './Components/DocTitleOne'
export default function App() {
  return (
    <div className="App">
      {/* <ParentComponent/> */}
      {/* <FocusInput/> */}
      {/* <HookTimer/> */}
      <DocTitleOne/>
    </div>
  )
}

// import React, {useState, useMemo} from 'react';

// function App() {
// const [number, setNumber] = useState(0)
// // Using useMemo
// const squaredNum = useMemo(()=> {
// 	return squareNum(number);
// }, [number])
// const [counter, setCounter] = useState(0);

// // Change the state to the input
// const onChangeHandler = (e) => {
// 	setNumber(e.target.value);
// }
	
// // Increases the counter by 1
// const counterHander = () => {
// 	setCounter(counter + 1);
// }
// return (
// 	<div className="App">
// 	<h1>Welcome to Geeksforgeeks</h1>
// 	<input type="number" placeholder="Enter a number"
// 		value={number} onChange={onChangeHandler}>
// 	</input>
		
// 	<div>OUTPUT: {squaredNum}</div>
// 	<button onClick= {counterHander}>Counter ++</button>
// 	<div>Counter : {counter}</div>
// 	</div>
// );
// }

// // function to square the value
// function squareNum(number){
// console.log("Squaring will be done!");
// return Math.pow(number, 2);
// }

// export default App;



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
