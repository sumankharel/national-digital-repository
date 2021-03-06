import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 10px;
  border: 1px solid #ddd;
  background-color: #ddd;
  color: #474747;
  cursor: pointer;
  border-radius: 0.125rem;
  transition: all 0.2s ease-in;
  text-transform: uppercase;

  &:hover {
    border: 1px solid #c6c6c6;
    background-color: #c6c6c6;
    color: #333;
  }

  div {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    justify-items: center;

    svg {
      transform: scale(2);
    }
  }
`;

// using div inside button to use grid
const Button = ({ onClick, children }) => (
  <StyledButton onClick={onClick}>
    <div>{children}</div>
  </StyledButton>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export default Button;
