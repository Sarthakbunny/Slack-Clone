import styled from 'styled-components';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Header from './component/Header';
import Sidebar from './component/Sidebar';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <AppBody>
          <Sidebar />
          <Switch>
            <Route path="/">
              {/*CHat*/}
            </Route>
          </Switch>
        </AppBody>
      </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;