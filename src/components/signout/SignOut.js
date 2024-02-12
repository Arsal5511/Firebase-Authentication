import React, { useState } from 'react'
import { auth } from '../../firebase'
import './signout.css'

function SignOut() {
    const [loading, setLoading] = useState(false)
    const [disableSubmitBtn, setDisableSubmitBtn] = useState(false)



    const handleSignOut = () =>{
        setDisableSubmitBtn(true)
        setLoading(true)
        auth.signOut().then(() =>{
        })
      }
  return (
    <div className='signout_container'>
        <button onClick={handleSignOut} disabled={disableSubmitBtn} >
         {loading ? '...' : 'Sign Out'}
        </button>
      
    </div>
  )
}

export default SignOut
