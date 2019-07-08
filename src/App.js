import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Intro from './views/Intro';
import Usuario from './views/Usuario';

function App() {
  
  return (
    <Router>
      <Route path="/" exact component={Intro} />
      <Route path="/usuario/" exact component={Usuario} />
    </Router>
  );
}

export default App;
