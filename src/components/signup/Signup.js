import React from 'react'
import "./signup.css";
import InputControl from '../inputs/InputControl'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className="signup_container">
    <div className="innerBox">
      <h1 className="signup_heading">Sign Up</h1>

      <InputControl
        label="Name"
        // onChange={(event) =>
        //   setValues((prev) => ({ ...prev, email: event.target.value }))
        // }
        placeholder="Enter You Name"
      />

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
          signup
        </button>
        <p>
          Already have an account?{" "}
          <span>
            <Link to="/login">Login</Link>
          </span>
        </p>
      </div>
    </div>
  </div>
  )
}

export default Signup
