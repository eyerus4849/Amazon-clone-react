import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './component/Header/Checkout';
import Login from './component/Header/Login';
import { useStateValue } from './component/StateProvider';
import { auth } from './component/Home/firebase';
import Footer from './component/Footer/Footer';
import Payment from './component/Header/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './component/Header/Orders';
const promise = loadStripe(
  'pk_test_51JI5HuIlW2gqRm5NzOSLkcQVRiM3Cwbz0s9U9bT1VLCVvLAUxOxbl0Y3YotXBFnKuoLLMpAYctkcUiRr4G49SUDk00IqSdXe2j'
);
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log("THE USER IS >>> ", authUser);
      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
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
      <Route path="/login">
      <Login/>
      </Route>
      <Route path="/payment">
      <Elements stripe={promise}>
              <Payment />
            </Elements>
      </Route>
      <Route path="/checkout">
      <Header />
      <Checkout />
      <Footer/>
      </Route>
      <Route path="/">
      <Header/>
      <Home/>
      <Footer/>
      </Route>
      </Switch>
      </div>
     
    </Router>
  );
}

export default App;
