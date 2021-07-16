import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './component/Header/Checkout';
function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
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
