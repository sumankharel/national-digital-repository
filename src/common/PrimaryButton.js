import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const StyledButton = styled.button`
  border: 1px solid ${props => props.theme.primary};
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.white};
  cursor: pointer;
  transition: all 0.3s ease-in;
  padding: 5px 10px;
  border-radius: 5px;
  display: grid;
  grid-template-columns: 1fr auto !important;
  text-transform: uppercase;

  &:hover {
    background-color: ${props => props.theme.darkPrimary};
  }

  div {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    justify-items: center;

    svg {
      transform: scale(2);
    }
  }
`;

// using div inside button use grid
const PrimaryButton = ({ onClick, children }) => {
  return (
    <StyledButton onClick={onClick}>
      <div>{children}</div>
    </StyledButton>
  );
};

PrimaryButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export default PrimaryButton;
