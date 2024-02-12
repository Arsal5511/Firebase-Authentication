import React, { useState } from 'react'
import InputControl from '../inputs/InputControl'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

import "./login.css";

const Login = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
      email: "",
      pass: ""
  });

  const [error, seterror] = useState("");
  const [disableSubmitBtn, setDisableSubmitBtn] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = () => {
      if (!values.email || !values.pass) {
          seterror("All fields are required")
          return;
      }
      seterror("")

      setDisableSubmitBtn(true)
      setLoading(true)
      signInWithEmailAndPassword(auth, values.email, values.pass).then(
        async (res)=>{
          setDisableSubmitBtn(false)
          setLoading(false)
          await navigate('/')
        }


      ).catch((err)=>{
        setDisableSubmitBtn(false)
        setLoading(false)
        seterror(err.message)
      })
      }
  return (
    <div className="login_container">
    <div className="innerBox">
      <h1 className="login_heading">Login</h1>

      <InputControl
        label="Email"
        type="email"
        onChange={(event) =>
          setValues((prev) => ({ ...prev, email: event.target.value }))
        }
        placeholder="Enter email address"
      />
     
      <InputControl
        label="Password"
        type="password"
        onChange={(event) =>
          setValues((prev) => ({ ...prev, pass: event.target.value }))
        }
        placeholder="Enter Password"
      />

      <div className="footer">
        <b className="error">{error}</b>
        <button onClick={handleSubmit} disabled={disableSubmitBtn} >
         {loading ? '...' : 'Login'}
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
