import React, { Component } from 'react';

import './css/App.css';
import PagInicio from './containers/PagInicio';
import Home from './containers/Home';
import PaginaDetalle from './containers/PaginaDetalle';
import PaginaReto from './containers/PaginaReto';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
      <div>
        <Route exact path ='/' component={PagInicio}/>
        <Route  path ='/home' component={Home}/>
        <Route  path ='/pantallaDetalle' component={PaginaDetalle}/>
        <Route  path ='/paginaReto' component={PaginaReto}/>
      </div>
    </Router>

      </div>
    )
  }
}

export default App;
