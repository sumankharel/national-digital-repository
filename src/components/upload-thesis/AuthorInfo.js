import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import InputFormField from "../../common/InputFormField";
import Button from "../../common/Button";
import PrimaryButton from "../../common/PrimaryButton";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import "../../styles/author.css";
import {
  showPrevForm,
  showNextForm,
  setAuthorInfoInput
} from "../../store/actions/uploadThesisActions";

class AuthorInfo extends Component {
  // save changes to store
  handleInputChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.props.setAuthorInfoInput({
      [name]: value
    });
  };

  render() {
    const {
      firstName,
      middleName,
      lastName,
      address,
      district,
      municipality,
      ward,
      tole,
      house,
      email,
      mobile
    } = this.props.uploadThesis.authorInfo;

    return (
      <div className="author">
        <div className="side-by-side">
          <InputFormField
            label="First Name"
            name="firstName"
            value={firstName}
            onChange={this.handleInputChange}
          />
          <InputFormField
            label="Middle Name"
            name="middleName"
            value={middleName}
            onChange={this.handleInputChange}
          />
          <InputFormField
            label="Last name"
            name="lastName"
            value={lastName}
            onChange={this.handleInputChange}
          />
        </div>

        <div className="side-by-side">
          <InputFormField
            label="Permanent Address"
            name="address"
            value={address}
            onChange={this.handleInputChange}
          />
          <InputFormField
            name="district"
            value={district}
            onChange={this.handleInputChange}
          />
          <InputFormField
            name="municipality"
            value={municipality}
            onChange={this.handleInputChange}
          />
        </div>

        <div className="side-by-side">
          <InputFormField
            name="ward"
            value={ward}
            onChange={this.handleInputChange}
          />
          <InputFormField
            name="tole"
            value={tole}
            onChange={this.handleInputChange}
          />
          <InputFormField
            name="house"
            value={house}
            onChange={this.handleInputChange}
          />
        </div>

        <div className="side-by-side">
          <InputFormField
            label="Email"
            type="email"
            name="email"
            value={email}
            onChange={this.handleInputChange}
          />
          <InputFormField
            label="Mobile"
            type="tel"
            name="mobile"
            value={mobile}
            onChange={this.handleInputChange}
          />
        </div>

        <div>
          <input type="checkbox" name="agreement" />
          <label>
            I wish to receive the updates and information about the
            oppertunities in future in this email.
          </label>
        </div>

        <div className="form-actions side-by-side">
          <Button onClick={this.props.showPrevForm}>
            <IoIosArrowRoundBack />
            Go Back
          </Button>

          <PrimaryButton onClick={this.props.showNextForm}>
            Next <IoIosArrowRoundForward />
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
  showNextForm,
  setAuthorInfoInput
};

AuthorInfo.propTypes = {
  uploadThesis: PropTypes.object.isRequired,
  showPrevForm: PropTypes.func.isRequired,
  showNextForm: PropTypes.func.isRequired,
  setAuthorInfoInput: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthorInfo);
