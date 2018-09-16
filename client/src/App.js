import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
  
//import Nav from './components/NavBar';
import Home from './pages/Home';
import Saved from './pages/Saved';

class App extends Component {
  render() {
   return (
     <div>
       <Nav/>
       <div className = "container">
          <Router>
           <switch>
             <Route path="/Home" component={Home}/>
             <Route path="/Saved" component={Saved}/>
             <Route path="/" />
           </switch>
         </Router>
        </div>
    </div>
    );
  }
}
 export default App