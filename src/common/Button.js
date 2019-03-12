import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const StyledButton = styled.button`
  padding: 10px;
  border: 1px solid #c6c6c6;
  background-color: #ddd;
  color: #474747;
  cursor: pointer;
  border-radius: 2px;
  transition: all 0.3s ease-in;
  text-transform: uppercase;

  &:hover {
    border: 1px solid #9a9a9a;
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
const Button = ({ onClick, children }) => {
  return (
    <StyledButton onClick={onClick}>
      <div>{children}</div>
    </StyledButton>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export default Button;
