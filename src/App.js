import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import LoginPage from './Components/LoginPage';
import RegistrationPage from './Components/RegistrationPage';

function App() {
  return (
    <div className="App">
      <header className="App-header"> Welcome to Ninja program
      </header>
      <Router>
        <div>
        <Switch>
          <Route path="/registration">
            <RegistrationPage />
          </Route>
          <Route path="/">
            <LoginPage />
          </Route>
        </Switch>
        </div>
      </Router>       
    </div>
  );
}

export default App;
