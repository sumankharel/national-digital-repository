import React, { Component } from "react";
import { connect } from "react-redux";
import NavBar from "./NavBar";
import InstitutionInfo from "./InstitutionInfo";
import AuthorInfo from "./AuthorInfo";
import ThesisInfo from "./ThesisInfo";
import UploadInfo from "./UploadInfo";
import "../../styles/upload-thesis.css";

class UploadThesis extends Component {
  render() {
    const { showForm } = this.props.uploadThesis;
    let form = null;

    switch (showForm) {
      case 1:
        form = <InstitutionInfo />;
        break;
      case 2:
        form = <AuthorInfo />;
        break;
      case 3:
        form = <ThesisInfo />;
        break;
      case 4:
        form = <UploadInfo />;
        break;
      default:
      // no forms
    }
    return (
      <div>
        <h1 className="component-title">UPLOAD YOUR THESIS</h1>
        <NavBar activeItem={showForm} />
        {form}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  uploadThesis: state.uploadThesis
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadThesis);
