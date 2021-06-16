import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomeScreen from './Screens/HomeScreen';
import Navbar from './Components/Navbar/Navbar';
import BackDrop from './Components/BackDrop/BackDrop';
import SideDrawer from './Components/SideDrawer/SideDrawer';
import { useState } from 'react';

function App() {
  const [sideToggle, setSideToggle] = useState(false)
  return (
    <Router>
      <Navbar click={()=> setSideToggle(true)}/>
      <SideDrawer show={sideToggle} click={()=> setSideToggle(false)} />
      <BackDrop show={sideToggle} click={()=> setSideToggle(false)}/>
      <div>
        <Switch>
          <Route exact path='/' component={HomeScreen}/>
            
        </Switch>
      </div>
    </Router>
  );
}

export default App;
