import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import NavBar from './components/Navbar';
import JobSearch from './components/JobSearch';
import Profile from './components/Profile';

const Routes = (
  <Router>
    <div>
      <NavBar />
      <Route exact path='/jobsearch'            component={JobSearch}/>
      <Route exact path='/profile'         component={Profile}/>
      {
      // <Route exact path='/createprofile'   component={CreateProfile}/>
      // <Route exact path='/editprofile'     component={EditProfile}/>
     }
    </div>
  </Router>
);


export default Routes;
