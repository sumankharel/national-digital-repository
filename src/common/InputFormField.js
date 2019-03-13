import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const Container = styled.div`
  display: grid;
  grid-gap: 10px;
  width: 100% !important;

  label {
    text-transform: uppercase;
  }

  input {
    border: 0;
    border-bottom: 1px solid #d3d3d3;
    transition: border-bottom 0.3s ease-in;

    &:focus {
      outline: 0;
      border-bottom: 1px solid #333;
    }
  }
`;

const InputFormField = ({ label, type, name, value, onChange }) => {
  return (
    <Container>
      <label>{label}</label>
      <input onChange={onChange} type={type} name={name} value={value} />
    </Container>
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
