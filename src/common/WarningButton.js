import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const StyledButton = styled.button`
  border: 1px solid ${props => props.theme.yellow};
  background-color: ${props => props.theme.yellow};
  color: ${props => props.theme.white};
  cursor: pointer;
  transition: all 0.3s ease-in;
  padding: 10px 0px;
  border-radius: 5px;

  &:hover {
    background-color: ${props => props.theme.darkYellow};
  }
`;

const WarningButton = ({ onClick, children }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

WarningButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export default WarningButton;