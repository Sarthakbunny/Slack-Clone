import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Header} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
