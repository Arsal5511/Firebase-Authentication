import React from 'react'
import './inputControl.css'

function InputControl(props) {
  return (
    <div className="input_container">
      {props.label && <label>{props.label}</label>}
      <input type={props.type} {...props} />
    </div>
  )
}

export default InputControl
