import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';


export default function Navigation(){
    return(
        <ul>
          <li>
            <Link to="/home"><button>home</button></Link>
          </li>
          <li>
            <Link to="/preferences"><button>Preferences</button></Link>
          </li>
          <li>
            <Link to="/dashboard"><button>Dashboard</button></Link>
          </li>
        </ul>
    );

}

