import React, { Component } from 'react';
import './css/App.css';
import PublicacionFormulario from "./components/PublicacionFormulario"

class App extends Component {
  render() {
    return (
      <div className="App">
        <PublicacionFormulario />
      </div>
    );
  }
}

export default App;
