import "./login.css"
import { useState } from "react";
import axios from "axios";



export default function Login() {
  const [userName, setUsername] = useState("");
  const [passWord, setPassword] = useState("");
  let username 
  let password 
  console.log(username)
  console.log(password)
  axios.post('/', {
    username: userName,
    password: passWord,
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

  return (
    <div className='login'>
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Event Social</h3>
          <span className="loginDesc">
            Connect with the world around you.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Username" 
            className="loginInput" onChange={(e) =>setUsername(e.target.value)} />
            <input placeholder="Password" className="loginInput" 
            onChange={(e) =>setUsername(e.target.value)}/>
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">Create a New Account</button>
          </div>
        </div>
      </div>
      
      </div>
  )
}
