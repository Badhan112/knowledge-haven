import { Container } from 'react-bootstrap';
import './App.css';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Orders from './components/Orders/Orders';
import Admin from './components/Admin/Admin';
import Deals from './components/Deals/Deals';
import Login from './components/Login/Login';
import NotMatch from './components/NotMatch/NotMatch';

function App() {
  return (
    <Container>
      <Router>
        <div>
          <Header />

          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/orders">
              <Orders />
            </Route>
            <Route path="/admin">
              <Admin />
            </Route>
            <Route path="/deals">
              <Deals />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <NotMatch />
            </Route>
          </Switch>
        </div>
      </Router>
    </Container>
  );
}

export default App;
