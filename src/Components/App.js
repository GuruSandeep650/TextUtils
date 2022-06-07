import Navbar from './Navbar';
import Textform from './Textform';
import About from './About';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";



export default function App() {
     
      return (
            
   <>
   <Router>
    <Navbar title = "Textutils" about= "About"/>
   
    <div className='container my-3'>
      <Switch>
          <Route path="/about">
          <About/>
          </Route>
          <Route path="/">
          <Textform heading = "Enter Text Below:"/>
          </Route>
        
      </Switch>
      </div>
      </Router>
    </>
);
}

