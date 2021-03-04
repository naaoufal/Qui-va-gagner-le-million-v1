import './App.css';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import User from './components/User'
import LoginUser from './components/LoginUser'
import Validate from './components/Validation'
import Group from './components/Group'
import AddFirst from './components/FirstMember'
import AddSecond from './components/SecondMember'



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
          <Route path="/FirstMember" exact component={AddFirst} />
          <Route path="/AddSecond" exact component={AddSecond} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
