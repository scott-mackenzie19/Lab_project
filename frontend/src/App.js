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
  // state for storage of the information on the webpage of forms and list, uses hooks
  const [number, setNumber] = useState("")
  const [values, setValues] = useState([])

  // ENTER YOUR EC2 PUBLIC IP/URL HERE
  const ec2_url = 'ec2-52-14-129-198.us-east-2.compute.amazonaws.com'
  // CHANGE THIS TO TRUE IF HOSTING ON EC2, MAKE SURE TO ADD IP/URL ABOVE
  const ec2 = true;
  // USE localhost OR ec2_url ACCORDING TO ENVIRONMENT
  const url = ec2 ? ec2_url : 'localhost'

  // handle input field state change
  const handleChange = (e) => {
    setNumber(e.target.value);
  }

  const fetchBase = () => {
    axios.get(`http://${url}:8000/`).then((res) => {
      alert(res.data);
    })
  }

  // fetches vals of db via GET request
  const fetchVals = () => {
    axios.get(`http://${url}:8000/values`).then(
      res => {
        const values = res.data.data;
        console.log(values);
        setValues(values)
      }).catch(err => {
        console.log(err)
      });
  }

  // handle input form submission to backend via POST request
  const handleSubmit = (e) => {
    e.preventDefault();
    let prod = number * number;
    axios.post(`http://${url}:8000/multplynumber`, { product: prod }).then(res => {
      console.log(res);
      fetchVals();
    }).catch(err => {
      console.log(err)
    });;
    setNumber("");
  }

  // handle intialization and setup of database table, can reinitialize to wipe db
  const reset = () => {
    axios.post(`http://${url}:8000/reset`).then(res => {
      console.log(res);
      fetchVals();
    }).catch(err => {
      console.log(err)
    });;
  }

  // tell app to fetch values from db on first load (if initialized)
  // the comment below silences an error that doesn't matter.=
  useEffect(() => {
    fetchVals();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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

  