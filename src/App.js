import './App.css';
import React from 'react';
import Navbar from './Navigation';
import Home from './Home';
import {Kursy} from './Kursy';
import {Studenci} from './Studenci';
import SignUp from './Signup';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';



function App() {
  return (
    <Router>  
      <Navbar />
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/Kursy' component={Kursy} exact/>
        <Route path='/Studenci' component={Studenci} exact/>
        <Route path='/Signup' component={SignUp} exact/>
      </Switch>

    
    </Router>
  );
}

export default App;
