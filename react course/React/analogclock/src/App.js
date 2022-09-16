import Clock from './Clock';
import './App.css';
import Showhide from './Showandhidepassword';
import GenratePar from './GenrateParg'

function App() {
  return (
    <div>
      <div>
      <GenratePar/>
      </div>

      <div>
      <Clock/>  
      </div>

      <div>
      <Showhide/>
      </div>
    </div>
  );
}

export default App;
