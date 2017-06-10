import React from 'react';
import { Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Timer from 'Timer';
import Countdown from 'Countdown';



const App = () => ( 
  <div>  
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">React Timer</li> 
          <li>
            <NavLink exact to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Timer</NavLink>  
          </li>
          <li>
            <NavLink to="/countdown" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Countdown</NavLink>             
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li className="menu-text">
            Created by <a href="https://www.crowgrammer.com" target="_blank">Matthew Ticciati</a>
          </li> 
        </ul>
      </div>
    </div>
    <div className="row">
      <div className="columns medium-6 large-4 small-centered">
        <Route exact path="/" component={Timer}/>
        <Route path="countdown/" component={Countdown}/>
      </div>
    </div> 
  </div>  
);

export default App;