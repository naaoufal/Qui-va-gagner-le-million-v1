import './App.css';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import User from './components/User'
import LoginUser from './components/LoginUser'
import Validate from './components/Validation'
import Group from './components/Group'
import FirstMember from './components/FirstMember'
import SecondMember from './components/SecondMember'
import Round from './components/Round'



function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/Login" exact component={Login} />
          <Route path="/Dashboard" exact component={Dashboard} />
          <Route path="/Register" exact component={Register} />
          <Route path="/User" exact component={User} />
          <Route path="/LoginUser" exact component={LoginUser} />
          <Route path="/Validation" exact component={Validate} />
          <Route path="/Group" exact component={Group} />
          <Route path="/FirstMember" exact component={FirstMember} />
          <Route path="/Round" exact component={Round} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
