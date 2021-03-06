import React, { useState } from 'react';
import './App.css';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Login from './components/Login/Login';
import Preferences from './components/Preferences/Preferences';
import Dashboard from './components/Dashboard/Dashboard';
import useToken from './components/App/useToken';
import Navigation from './components/Navigation/Navigation';
import FileList from './components/File/FileList';



function App() {
  
  const {token, setToken} = useToken();


  //ipcRenderer.send('ping');
  


  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
    <div className="wrapper">
      <h1>ChangeFlow Dev Tool</h1>
      <FileList/>
      <BrowserRouter>
        <Navigation token={token}/>
        <Switch>          
          <Route path="/dashboard" exact={true} component={Dashboard}></Route>
          <Route path="/preferences" exact={true} component={Preferences}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;



