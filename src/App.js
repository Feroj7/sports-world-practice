import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sports from './components/Sports/Sports';
import Home from './components/Home/Home';
import TeamDetails from './components/TeamDetails/TeamDetails';
import NotFound from './components/NotFound/NotFound';
import MenuBar from './components/MenuBar/MenuBar';

function App() {

  return (
    <Router>
      <MenuBar></MenuBar>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/sports">
          <Sports></Sports>
        </Route>
        <Route exact path="/details/:teamId">
          <TeamDetails></TeamDetails>
        </Route>
        <Route exact path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
