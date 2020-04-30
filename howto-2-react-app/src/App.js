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
import PrivateRoute from './components/ProtectedRoute';
// import UserDashboard
// make a route "/user/dashboard"



function App() {
  return (
  
    <Router>
      <NavBar/>
      <Route exact path='/' component={OnboardOption}/>
      {/* <Route exact path='/' component={Login} /> */}
      <Route exact path='/user/register' component={Register} />
      <Route exact path='/instructor/register' component={Register} />
      <Route exact path='/user/login' component={Login} />
      <Route exact path='/instructor/login' component={Login} />
      <Route exact path='/tutorialForm' component={TutorialForm} />
      <PrivateRoute exact path='/instructor/dashboard' component={tutorialList} />
      <PrivateRoute exact path='/user/dashboard' component={UserDashboard} />
      <Route exact path='/tutorialDirections' component={TutorialDirectionsForm} />
      {/* <Route exact path='/intructor' />
      <Route exact path='/user' />     */}
      
    </Router>
  );
}

export default App;