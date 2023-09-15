import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home.js";
import Checkout from "./Checkout";
import Login from "./Login.js";
import Payment from "./Payment.js";
import Orders from "./Orders.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase.js";
import { useStateValue } from "./StateProvider.js";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51NoVsHSC9SccTq1nSFzDZDM1vYZKLRkGSwQUp1SJsR3PaWawy00IzRbio2qLwRhVldADtIXHAx4b5EPdpoZ73tgb00wa5Q7F9V"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    //will only run once app component loads.....
    auth.onAuthStateChanged((authUser) => {
      console.log("the user is ", authUser);
      if (authUser) {
        //user logged in /was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //user logged out
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/login">
            <Login />
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
