import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// SAMPLE UPLOAD THESIS COMPONENT, YOU CAN UPDATE OR CREATE YOUR OWN
class UploadThesis extends Component {
  render() {
    return (
      <div>
        <p>Upload thesis component </p>
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
