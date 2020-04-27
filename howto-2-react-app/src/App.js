import React from 'react';
import Login from './components/Login';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route exact path='/' component={Login} />
      {/* <Route exact path='/intructor' />
      <Route exact path='/user' />     */}
    </Router>
  );
}

export default App;