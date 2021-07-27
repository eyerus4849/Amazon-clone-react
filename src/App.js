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
      <Route path="/login">
      <Login/>
      </Route>
      <Route path="/checkout">
      <Header />
      <Checkout />
      </Route>
      <Route path="/">
      <Header/>
      <Home/>
      </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
