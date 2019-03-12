import React from "react";
import PropTypes from "prop-types";
import "../styles/input-form-field.css";

const InputFormField = ({ label, type, name, value, onChange }) => {
  return (
    <div className="input-form-field">
      <label>{label}</label>
      <input onChange={onChange} type={type} name={name} value={value} />
    </div>
  );
};

InputFormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string
};

InputFormField.defaultProps = {
  type: "string"
};

export default InputFormField;
