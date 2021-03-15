import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import Preferences from './components/Preferences/Preferences';
import useToken from './components/App/useToken';
import Navigation from './components/Navigation/Navigation';


function App() {
  const {token, setToken} = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
    <div className="wrapper">
      <h1>Application</h1>    
      

      <BrowserRouter>
        <Navigation />
        
        <Switch>          
          <Route path="/dashboard" exact={true} component={Dashboard}></Route>
          <Route path="/preferences" component={Preferences}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
