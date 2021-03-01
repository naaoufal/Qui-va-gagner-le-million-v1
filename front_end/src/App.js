import './App.css';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Login from './components/Login';



function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/Login" exact component={Login} />
          <Route path="/Dashboard" exact component={Dashboard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
