import React, { useState } from 'react'
import "./signup.css";
import InputControl from '../inputs/InputControl'
import { Link } from 'react-router-dom'
import {createUserWithEmailAndPassword} from "firebase/auth"

import { auth } from '../../firebase'


function Signup() {

    const [values, setValues] = useState({
        name:"",
        email: "",
        pass: ""
    });

    const [error, seterror] = useState("");

    const handleSubmit = () => {
        if (!values.email || !values.pass || !values.name) {
            seterror("All fields are required")
            return;
        }
        seterror("")

        createUserWithEmailAndPassword(auth, values.email, values.pass).then(
          (res)=>{
            console.log(res)
          }
        ).catch((err)=>console.log('error', err))
        }
  return (
    <div className="signup_container">
    <div className="innerBox">
      <h1 className="signup_heading">Sign Up</h1>

      <InputControl
        label="Name"
        type="text"
        placeholder="Enter You Name"
        onChange={(e) =>
            setValues((prev) => ({ ...prev, name: e.target.value }))
        }
      />

      <InputControl
        label="Email"
        type="email"
        onChange={(e) =>
          setValues((prev) => ({ ...prev, email: e.target.value }))
        }
        placeholder="Enter email address"
      />
      <InputControl
        label="Password"
        type="password"
        onChange={(e) =>
          setValues((prev) => ({ ...prev, pass: e.target.value }))
        }
        placeholder="Enter Password"
      />

      <div className="footer">
        <b className="error">{error}</b>
        <button onClick={handleSubmit} >
          Sign Up
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

export default Signup;
