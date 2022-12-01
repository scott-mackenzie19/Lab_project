import "./login.css"
import { useState } from "react";
import axios from "axios";



export default function Login() {
  const [userName, setUsername] = useState("");
  const [passWord, setPassword] = useState("");


  function submitEvent() {
    if (userName && passWord) {
      axios.post('http://localhost:8000/', {
        "username": userName,
        "password": passWord,
      })
        .then(function (response) {
          console.log(response.data);
          return response.data
        })
        .catch(function (error) {
          console.log("incorrect, try again.");
        })
    }

  }

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
              className="loginInput" onChange={(e) => setUsername(e.target.value)} />
            <input placeholder="Password" className="loginInput"
              onChange={(e) => setPassword(e.target.value)} />
            <button onClick={submitEvent} className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">Create a New Account</button>
          </div>
        </div>
      </div>

    </div>
  )
}
