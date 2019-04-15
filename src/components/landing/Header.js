import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header`
  color: #eee;
  padding: 20px;
  height: 80px;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr auto auto;
  border-bottom: 1px solid ${props => props.theme.darkPrimary};
  background-color: ${props => props.theme.primary};

  span {
    text-transform: uppercase;
    font-weight: bolder;

    a {
      text-decoration: none;
      color: #eee;
    }
  }

  .routes {
    float: right;

    a {
      color: #eee;
      text-decoration: none;
      text-transform: uppercase;
      padding-right: 20px;
    }
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <span>
        <Link to="/">National Digital Repository</Link>
      </span>
      <div className="routes">
        <Link to="/">Home</Link>
        <Link to="/upload-thesis">Upload Thesis</Link>
      </div>
    </StyledHeader>
  );
};

export default Header;
