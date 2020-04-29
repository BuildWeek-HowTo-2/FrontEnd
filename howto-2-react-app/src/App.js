import React from 'react';
import Login from './components/Login';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "./styles.css";
import OnboardOption from './components/OnboardOption';
import Register from './components/Register';
import NavBar from './components/NavBar';
<<<<<<< HEAD

import TutorialForm from './components/TutorialForm';

=======
import UserDashboard from './components/UserDashboard'
>>>>>>> 9f1c87c0104e09fb525fb42f221748e81051250f
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
<<<<<<< HEAD
      <Route exact path='/tutorialForm' component={TutorialForm} />
=======
      <Route exact path='/user/dashboard' component={UserDashboard} />
>>>>>>> 9f1c87c0104e09fb525fb42f221748e81051250f
      {/* <Route exact path='/intructor' />
      <Route exact path='/user' />     */}
    </Router>
  );
}

export default App;