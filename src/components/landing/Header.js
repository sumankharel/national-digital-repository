import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header`
  color: #eee;
  padding: 20px;
  height: 80px;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr auto;
  border-bottom: 1px solid ${props => props.theme.darkPrimary};
  background-color: ${props => props.theme.primary};
  letter-spacing: 1px;
  font-size: 1.2rem;

  a {
    text-decoration: none;
    color: #eee;
    text-transform: uppercase;
  }

  a.selected {
    border-bottom: 2px solid #fff;
  }
`;

class Header extends Component {
  render() {
    return (
      <StyledHeader>
        <div>
          <NavLink to="/">National Digital Repository</NavLink>
        </div>
        <div>
          <NavLink activeClassName="selected" to="/upload-thesis">
            Upload Thesis
          </NavLink>
        </div>
      </StyledHeader>
    );
  }
}

export default Header;
