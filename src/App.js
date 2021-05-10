  
import React from 'react';
import Navbar from './components/navbar/navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/services';
import Trips from './components/pages/trip';
import SignUp from './components/pages/signUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Services' component={Services} />
          <Route path='/trips' component={Trips} /> 
          <Route path='/SignUp' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;