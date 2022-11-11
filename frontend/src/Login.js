import "./loginStyle.css";

import React, { useState } from "react";

import  Form  from "react-bootstrap/Form";

import Button from "react-bootstrap/Button";

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
  
    return (
      <div className="Login">
        <h2 class="a"> Website Title </h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group size="lg" controlId="username" class="c">
            <Form.Label class="c">Username</Form.Label>
  
            <Form.Control
              autoFocus
              class="b"
              type="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              //username set to current value in box
            />
          </Form.Group>
  
          <Form.Group size="lg" controlId="password" class="c">
            <Form.Label class="c">Password</Form.Label>
  
            <Form.Control
              type="password"
              class="b"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              //password set to current value in box
            />
          </Form.Group>
  
          <Button block size="lg" type="submit" disabled={!validateForm()}>
            Login
          </Button>
  
          <hr />
  
          <h2 class="d">or</h2>
  
          <h2 class="e">Don’t have an account? Sign up now.</h2>
        </Form>
      </div>
    );
  }