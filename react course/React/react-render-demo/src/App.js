import './App.css';
import { ChildA } from './components/Context/ContextChildren';
// import ParentFour from './components/Incorrect Optimizations/ParentFour';
import { ContextParent } from './components/Context/ContextParent'

function App() {
  return (
    <div className="App">    
      {/* <ParentFour/> */}
      <ContextParent>
          <ChildA/>
      </ContextParent>
    </div>
  );
}

export default App;
