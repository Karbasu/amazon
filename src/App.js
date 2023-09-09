import React, { useEffect } from 'react';
import "./App.css";
import Header from "./Header";
import Home from "./Home.js";
import Checkout from "./Checkout";
import Login from "./Login.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  useEffect(
    () => {
    //will only run once app component loads.....
  },[])
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
