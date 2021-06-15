import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomeScreen from './Screens/HomeScreen';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <Navbar/>
      <div>
        <Switch>
          <Route exact path='/' component={HomeScreen}/>
            
        </Switch>
      </div>
    </Router>
  );
}

export default App;
