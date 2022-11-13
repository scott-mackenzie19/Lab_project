import "./loginStyle.css";

import React, { useState } from "react";

import  Form  from "react-bootstrap/Form";

import Button from "react-bootstrap/Button";

import axios from "axios";
axios.defaults.baseURL='http://ec2-52-14-129-198.us-east-2.compute.amazonaws.com:3000'


export default function Login() {
    const [username, setUsername] = useState("");
  
    const [password, setPassword] = useState("");
    /*useState hook is used to fetch values for username and password, setUsername
    and setPassword functions retrieve what the user fills in: e.target.value */
  
    function validateForm() {
      return username.length > 0 && password.length > 0;
      /*right now only checks if field has length above 0, can be extended to 
      do more */
    }
  
    function handleSubmit(event) {
      event.preventDefault();
    }
    

    let body = {usernname:username, password:password};
    const postUser = () => new Promise((resolve, reject) => {
      let body = {username:username, password:password};
      console.log(body)
      console.log(axios.defaults.baseURL);
      axios.post(`${axios.defaults.baseURL}`, body)
      .then(x =>resolve(x.data))
      .catch(x => {
          alert(x);
          reject(x);
      })
  });

    
  
    return (
      <div className="Login">
        <h2 className="a"> Website Title </h2>
        <form id='form' onSubmit={handleSubmit}>
          <Form.Group size="lg" controlId="username" className="c">
            <Form.Label className="c">Username</Form.Label>
  
            <Form.Control
              autoFocus
              className="b"
              type="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              //username set to current value in box
            />
          </Form.Group>
  
          <Form.Group size="lg" controlId="password" className="c">
            <Form.Label className="c">Password</Form.Label>
  
            <Form.Control
              type="password"
              className="b"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              //password set to current value in box
            />
          </Form.Group>
  
          <Button onClick= {postUser} block size="lg" type="submit" disabled={!validateForm()}>
            Login
          </Button>
  
          <hr />
  
          <h2 className="d">or</h2>
  
          <h2 className="e">Don’t have an account? Sign up now.</h2>
        </form>

      </div>
    );
  }