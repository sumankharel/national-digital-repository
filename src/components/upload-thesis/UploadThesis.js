import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "../../styles/upload-thesis.css";
import NavBar from "./NavBar";
import InstitutionInfo from "./InstitutionInfo";
import AuthorInfo from "./AuthorInfo";
import ThesisInfo from "./ThesisInfo";
import UploadInfo from "./UploadInfo";



// SAMPLE UPLOAD THESIS COMPONENT, YOU CAN UPDATE OR CREATE YOUR OWN
class UploadThesis extends Component {
  render() {
    return (
      <div>
        <h1 className="component-title">UPLOAD YOUR THESIS</h1>
        <NavBar/>
        <InstitutionInfo />
        <AuthorInfo />
        <ThesisInfo />
        <UploadInfo />
        
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

UploadThesis.propTypes = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadThesis);