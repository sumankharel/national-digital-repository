import React from 'react'
import PropTypes from "prop-types";
import "../styles/input-form-field.css";

const InputFormField = (props)  => {
  return (
    <div className="input-form-field">
      <label>{props.label}</label>
      <input type={props.type} name={props.name} value={props.value} />
    </div>
  )
}

InputFormField.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.string,
}

InputFormField.defaultProps = {
    type: "string"
}


export default InputFormField;