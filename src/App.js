import React from 'react';
import Header from './header/Header'
import Home from './home/Home'
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Checkout from "./checkout/Checkout"
import Login from './login/Login'

function App() {
  return (
    <Router>
    <div className="App">
    
      <Switch>
       <Route path="/checkout">
       <Header/>
       <Checkout/>
       </Route>
       <Route path="/">
       <Header/>
       <Home/>
       </Route>
       <Route path="/login">
       <Login/>
       </Route>
      </Switch>
     
    </div>
    </Router>
  );
}

export default App;
