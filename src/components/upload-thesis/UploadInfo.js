import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Button from "../../common/Button";
import PrimaryButton from "../../common/PrimaryButton";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import "../../styles/upload.css";

import {
  showPrevForm,
  confirmThesisUpload,
  setUploadInfoInput
} from "../../store/actions/uploadThesisActions";

class UploadInfo extends Component {
  // save changes to store
  handleInputChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.props.setUploadInfoInput({
      [name]: value
    });
  };

  render() {
    return (
      <div className="upload">
        <h2>Documents Upload</h2>

        <div className="form-actions side-by-side">
          <input type="file" multiple />
          <button className="btn btn-warning"> Remove</button>
        </div>
        <div className="form-actions side-by-side">
          <input type="file" multiple />
          <button className="btn btn-warning"> Remove</button>
        </div>
        <div className="form-actions side-by-side">
          <input type="file" multiple />
          <button className="btn btn-warning"> Remove</button>
        </div>

        <div>
          <input type="checkbox" name="agreement" />
          <label>I hearby confirm all the given information is correct.</label>
        </div>

        <div>
          <input type="checkbox" name="agreement" />
          <label>I agree thesis portal's terms and condition.</label>
        </div>

        <div className="form-actions side-by-side">
          <Button onClick={this.props.showPrevForm}>
            <IoIosArrowRoundBack />
            Go Back
          </Button>

          <PrimaryButton onClick={this.props.confirmThesisUpload}>
            Confirm Upload <IoIosArrowRoundForward />
          </PrimaryButton>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  uploadThesis: state.uploadThesis
});

const mapDispatchToProps = {
  showPrevForm,
  setUploadInfoInput,
  confirmThesisUpload
};

UploadInfo.propTypes = {
  uploadThesis: PropTypes.object.isRequired,
  showPrevForm: PropTypes.func.isRequired,
  confirmThesisUpload: PropTypes.func.isRequired,
  setUploadInfoInput: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadInfo);
