import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'
import App from 'App';

//import routes from './routes.js';

//Load Foundation
$(document).foundation();


//browser history
const history = createBrowserHistory();
//app css
require('style-loader!css-loader!sass-loader!applicationStyles');

ReactDOM.render(
  <Router history={history}>
    <App/>
  </Router>,
  document.getElementById("app")
); 