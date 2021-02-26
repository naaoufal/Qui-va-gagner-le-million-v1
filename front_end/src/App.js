import './App.css';
import Login from './components/Login';
//import Register from './components/Register';
import { BrowserRouter as Router, Route, Link } from 'react-dom';

function App() {
  return (
    <div className="container">
      {/* register form */}
      <Login />
      {/* <Register /> */}
    </div>
  );
}

export default App;
