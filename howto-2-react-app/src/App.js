import React from 'react';
import Login from './components/Login';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "./styles.css";
import OnboardOption from './components/OnboardOption';
import Register from './components/Register';
import NavBar from './components/NavBar';

import TutorialDirectionsForm from './components/TutorialDirectionsForm';
import TutorialForm from './components/TutorialForm'

import UserDashboard from './components/UserDashboard'
import tutorialList from './components/TutorialList';
// import UserDashboard
// make a route "/user/dashboard"



function App() {
  return (
    
    <Router>
      <NavBar/>
      <Route exact path='/login' component={OnboardOption} />
      <Route exact path='/register' component={OnboardOption}/>
      {/* <Route exact path='/' component={Login} /> */}
      <Route exact path='/user/register' component={Register} />
      <Route exact path='/instructor/register' component={Register} />
      <Route exact path='/user/login' component={Login} />
      <Route exact path='/instructor/login' component={Login} />
      <Route exact path='/tutorialForm' component={TutorialForm} />
      <Route exact path='/tutorialList' component={tutorialList} />
      <Route exact path='/user/dashboard' component={UserDashboard} />
      {/* <Route exact path='/intructor' />
      <Route exact path='/user' />     */}
    </Router>
  );
}

export default App;