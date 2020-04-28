import React from 'react';
import Login from './components/Login';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "./styles.css";
import OnboardOption from './components/OnboardOption';
import Register from './components/Register';


function App() {
  return (
    <Router>
      <Route exact path='/login' component={OnboardOption} />
      <Route exact path='/register' component={OnboardOption}/>
      {/* <Route exact path='/' component={Login} /> */}
      <Route exact path='/user/register' component={Register} />
      <Route exact path='/instructor/register' component={Register} />
      <Route exact path='/user/login' component={Login} />
      <Route exact path='/instructor/login' component={Login} />
      {/* <Route exact path='/intructor' />
      <Route exact path='/user' />     */}
    </Router>
  );
}

export default App;