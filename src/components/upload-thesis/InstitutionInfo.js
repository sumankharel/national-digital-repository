import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import InputFormField from "../../common/InputFormField";
import PrimaryButton from "../../common/PrimaryButton";
import Button from "../../common/Button";
import "../../styles/institution.css";

import {
  IoIosArrowRoundForward,
  IoIosCloseCircleOutline
} from "react-icons/io";
import {
  showNextForm,
  setInstitutionInfoInput
} from "../../store/actions/uploadThesisActions";
import DateInput from "../../common/DateInput";

class InstitutionInfo extends Component {
  // go to home screen on cancel
  handleCancelUpload = () => {
    this.props.history.push("/");
  };

  // save changes to store
  handleInputChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.props.setInstitutionInfoInput({
      [name]: value
    });
  };

  // handle study year start change
  handleStartYearChange = day => {
    this.props.setInstitutionInfoInput({
      startYear: day
    });
  };

  // handle study year end change
  handleEndYearChange = day => {
    this.props.setInstitutionInfoInput({
      endYear: day
    });
  };

  // handle defense date
  handleDefenseDate = day => {
    this.props.setInstitutionInfoInput({
      defenseDate: day
    });
  };

  // handle approval change
  handleApprovalChange = day => {
    this.props.setInstitutionInfoInput({
      approvalDate: day
    });
  };

  render() {
    const {
      universityName,
      campusName,
      location,
      startYear,
      endYear,
      authorName,
      coAuthorName,
      defenseDate,
      approvalDate,
      supervisorName,
      coSupervisorName
    } = this.props.uploadThesis.institutionInfo;

    return (
      <div className="institution">
        <InputFormField
          label="Name of the university"
          name="universityName"
          value={universityName}
          onChange={this.handleInputChange}
        />
        <InputFormField
          label="Name of the campus"
          name="campusName"
          value={campusName}
          onChange={this.handleInputChange}
        />
        <InputFormField
          label="Location"
          name="location"
          value={location}
          onChange={this.handleInputChange}
        />

        <div className="side-by-side">
          <DateInput
            label="Start Year"
            name="startYear"
            onChange={this.handleStartYearChange}
          />

          <DateInput
            label="End Year"
            name="endYear"
            onChange={this.handleEndYearChange}
          />
        </div>

        <div className="side-by-side">
          <InputFormField
            label="Thesis Author"
            name="authorName"
            value={authorName}
            onChange={this.handleInputChange}
          />
          <InputFormField
            label="Theis Co-Author"
            name="coAuthorName"
            value={coAuthorName}
            onChange={this.handleInputChange}
          />
        </div>

        <div className="side-by-side">
          <DateInput label="Defense Date" onChange={this.handleDefenseDate} />

          <DateInput
            label="Approval Date"
            onChange={this.handleApprovalChange}
          />
        </div>

        <div className="side-by-side">
          <InputFormField
            label="Thesis Supervisor "
            name="supervisorName"
            value={supervisorName}
            onChange={this.handleInputChange}
          />
          <InputFormField
            label="Thesis Co-SuperVisor"
            name="coSupervisorName"
            value={coSupervisorName}
            onChange={this.handleInputChange}
          />
        </div>

        <div className="form-info red-info">
          <p>
            The pre-filled data in the above fields are according to the
            information we recieved from your academic institutiion. Please
            contact your campus administration if you find any errors.
          </p>
        </div>

        <div className="form-actions side-by-side">
          <Button onClick={this.handleCancelUpload}>
            <IoIosCloseCircleOutline />
            Cancel
          </Button>
          <PrimaryButton onClick={this.props.showNextForm}>
            Agree / Next <IoIosArrowRoundForward />
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
  showNextForm,
  setInstitutionInfoInput
};

InstitutionInfo.propTypes = {
  uploadThesis: PropTypes.object.isRequired,
  showNextForm: PropTypes.func.isRequired,
  setInstitutionInfoInput: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(InstitutionInfo));
