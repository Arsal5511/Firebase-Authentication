import React from 'react'
import './inputControl.css'

function InputControl(props) {
  return (
    <div className="input_container">
      {props.label && <label>{props.label}</label>}
      <input type="text" {...props} />
    </div>
  )
}

export default InputControl
