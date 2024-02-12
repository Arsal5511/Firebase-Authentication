import React, { useState } from 'react'
import "./signup.css";
import InputControl from '../inputs/InputControl'
import { Link, useNavigate } from 'react-router-dom'
import {createUserWithEmailAndPassword, updateProfile} from "firebase/auth"

import { auth } from '../../firebase'


function Signup() {

    const navigate = useNavigate();
    const [values, setValues] = useState({
        name:"",
        email: "",
        pass: ""
    });

    const [error, seterror] = useState("");
    const [disableSubmitBtn, setDisableSubmitBtn] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleSubmit = () => {
        if (!values.email || !values.pass || !values.name) {
            seterror("All fields are required")
            return;
        }
        seterror("")

        setDisableSubmitBtn(true)
        setLoading(true)
        createUserWithEmailAndPassword(auth, values.email, values.pass).then(
          async (res)=>{
            setDisableSubmitBtn(false)
            setLoading(false)
             
            const user = res.user;
            updateProfile(user, {
              displayName: values.name
            })
            await navigate('/')
          }


        ).catch((err)=>{
          setDisableSubmitBtn(false)
          setLoading(false)
          seterror(err.message)
        })
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
        <button onClick={handleSubmit} disabled={disableSubmitBtn} >
         {loading ? '...' :  'Sign Up'}
        </button>
        <p>
          Already have an account?{" "}
          <span>
            <Link to="/login">Login</Link>
          </span>
          <span> | </span>
          <span>
            <Link to="/">Home</Link>
          </span>
        </p>
      </div>
    </div>
  </div>
  )
}

export default Signup;
