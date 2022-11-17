import React, { useEffect, useState } from 'react';
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'
import './App.css';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

axios.defaults.baseURL='http://ec2-52-14-129-198.us-east-2.compute.amazonaws.com'
let thePath = window.location.pathname;
let lastItem = thePath.substring(thePath.lastIndexOf('/') + 1);


export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Home />
        </Route>
        <Route path="/register">
          <Home />
        </Route>
        <Route path="/profile/:id">
          <Profile id={lastItem}/>
        </Route>
      </Switch>
    </Router>
  )
}

  