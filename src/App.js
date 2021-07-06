import React,{ useEffect } from 'react';
import {BrowserRouter as Router, Switch , Route} from 'react-router-dom'
import './App.css';
import Login from './login';
import Header from './Header'
import Home from './home'
import Checkout from './Checkout'
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import Payment from './Payments'
import {loadStripe} from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"

const promise = loadStripe("pk_test_51I9EcWGIrFaYxRFbQD0FpjIleCxgUM6ToJzmA2CZqNZadHZgt7AHtzLSw0IdpfpmnltFRuJDkTpytsa0QIb1UHEw00ZrpzFrna");

function App() {
  const [{user},dispatch] = useStateValue();
  useEffect(()=>{
    
    const unsubscribe = auth.onAuthStateChanged((authuser)=>{
      if(authuser){
        dispatch({
          type:"SET_USER",
          user:authuser
        })
      }else{
        dispatch({
          type:"SET_USER",
          user:null,
        });
      }
    });
    return()=>{
      unsubscribe();
    }
  },[]);
  console.log("useris >>>>>>",user)
  return (
  <Router> 
    <div className="app">
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/payments">
          <Header />
          <Elements stripe={promise}>
            <Payment />
          </Elements>
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
