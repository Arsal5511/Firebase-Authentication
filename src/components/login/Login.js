import React from 'react'
import "./login.css";
import InputControl from '../inputs/InputControl'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="login_container">
    <div className="innerBox">
      <h1 className="login_heading">Login</h1>

      <InputControl
        label="Email"
        // onChange={(event) =>
        //   setValues((prev) => ({ ...prev, email: event.target.value }))
        // }
        placeholder="Enter email address"
      />
     
      <InputControl
        label="Password"
        // onChange={(event) =>
        //   setValues((prev) => ({ ...prev, pass: event.target.value }))
        // }
        placeholder="Enter Password"
      />

      <div className="footer">
        <b className="error"></b>
        <button >
          Log in
        </button>
        <p>
          Don't have an account?{" "}
          <span>
            <Link to="/signup">Sign up</Link>
          </span>
        </p>
      </div>
    </div>
  </div>
  )
}

export default Login
