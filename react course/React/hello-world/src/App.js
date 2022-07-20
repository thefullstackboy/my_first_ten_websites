//step 2
import React, { Component } from 'react'
import ComponentF from './Componets/ComponentF'
import { UserProvider } from './Componets/UserContext'


class App extends Component {
  render() {
    return (
      <div>
        <UserProvider value="Vishwas">
           <ComponentF/>
        </UserProvider>        
      </div>
    )
  }
}

export default App














// import React, { Component } from 'react'
// import ClickCounteTwo from './Componets/ClickCounteTwo'
// import HowerCounteTwo from './Componets/HoverCounterTwo'
// import Counter from './Componets/Counte'


// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <Counter
//            render={(count, incrementCount) => (
//               <ClickCounteTwo count={count} incrementCount={incrementCount} />
//            )}
//         />

//      <Counter
//            render={(count, incrementCount) => (
//               <HowerCounteTwo count={count} incrementCount={incrementCount} />
//            )}
//         />
//       </div>
//     )
//   }
// }


//import User from './Componets/User'
// import React, { Component } from 'react'
// import ClickCounter from './Componets/ClickCounter'
// import HoverCounter from './Componets/HoverCounter'

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <ClickCounter name="Vishwas"/>
//         <HoverCounter/>
//       </div>
//     )
//   }
// }










// import React, { Component } from 'react'
// import ErrorBoundary from './Componets/ErrorBoundary '
// import Hero from './Componets/Hero'

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <ErrorBoundary>
//          <Hero heroName="Batman"/>
//         </ErrorBoundary>


//         <ErrorBoundary>
//         <Hero heroName="Superman"/>
//         </ErrorBoundary>


//         <ErrorBoundary>
//         <Hero heroName="Joker"/>
//         </ErrorBoundary>   
//       </div>
//     )
//   }
// }

// export default  App



















// import React, { Component } from 'react'
// import PortalDemo from './Componets/PortalDemo'
// // import Focusinput from './Componets/Focusinput'
// // import ParentComp from './Componets/ParentComp'
// //import RefsDemo from './Componets/RefsDemo'
// //import FRParentInput from './FRParentInput'

// export default class App extends Component {
//   render() {
//     return (
//       // <ParentComp/>
//       <>

//       <PortalDemo/>
//       {/* <FRParentInput/> */}

//       {/* <Focusinput/> */}
//       {/* <RefsDemo/> */}
//       </>
//     )
//   }
// }




// import React, { Component } from 'react' 
// import './App.css'
// import LIfecycleA from './Componets/LifecycleA'



//  class App extends Component {
//   constructor(props) {
//     super(props)
  
//     this.state = {
//        name: 'Vishwas'
//     }
//     console.log('LifecycleA constructor')
//   }

//   static getDerivedStateFromProps(props, state) {
//     console.log('LifecycleA getDerivedStateFromProps')
//     return null
//   }



//   render() {
//     return (
//       <div className='App'>
//        <LIfecycleA/>
//       </div>
//     )
//   }
// }

// export default App
















// import React from 'react'
// import Form from './Componets/Forms'
// import './App.css'

// function App() {
//   return (
//     <div className='App App-header'><Form/></div>
//   )
// }

// export default App














// import React, { Component }   from 'react';
// import './App.css'
// import Inline from './Inline';
// import './Componets/appStyles.css'
// import styles from './Componets/appStyles.module.css'
// // import Counter from './Componets/Counter';
// //import Greet from './Componets/Greet';
// // import Greet from './Componets/Greet';
// // import Welcome from './Componets/Welcome';
// // import ClassClick from './Componets/ClassClick'
// // import FunctionClick from './Componets/FunctionClick'
// // import EventBind from './Componets/EventBind'
// // import ParentComponent from './Componets/ParentComponent'
// //import UserGreeting from './Componets/UserGreeting'
// // import NameList from './Componets/NameList'
// // import Stylesheet from './Componets/Stylesheet'
// class App extends Component {
//   render() {
//     return (
//       <div className='App App-header'>
//         {/* <h1 className='error'>Error</h1>
//         <h1 className={styles.sucess}>Success</h1>
//         <Inline/> */}
//         {/* <Stylesheet primary={true}/> */}
//         {/* <NameList/> */}
//         {/* <UserGreeting/> */}
//         {/* <ParentComponent/> */}
//         {/* <FunctionClick/> */}
//         {/* <ClassClick/> */}
//         {/* <EventBind/> */}
//         {/* <Counter/> */}
//         {/* <Greet name="Diana" heroName="Wonder Woman">      
//         </Greet>
//         <Welcome name="Bruce" heroName="Batman"/> */}
//         {/* <Message/> */}
//         {/* <Greet name="Bruce" heroName="Batman">
//           <p>This is children props</p>
//         </Greet>
//         <Greet name="Clark" heroName="Superman">
//           <button>Action</button>
//         </Greet>
//         <Greet name="Diana" heroName="Wonder Woman"/>
//         <Welcome name="Bruce" heroName="Batman"/>
//         <Welcome name="Clark" heroName="Superman"/>
//         <Welcome name="Diana" heroName="Wonder Woman" />
//       */}
//       </div>
//     )
//   }
// }

// export default App;