import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "../../styles/thesis.css";
import InputFormField from "../../common/InputFormField";
import Button from "../../common/Button";
import PrimaryButton from "../../common/PrimaryButton";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import {
  showPrevForm,
  showNextForm,
  setThesisInfoInput
} from "../../store/actions/uploadThesisActions";

class ThesisInfo extends Component {
  // save changes to store
  handleInputChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.props.setThesisInfoInput({
      [name]: value
    });
  };

  render() {
    const {
      title,
      abstract,
      reference,
      keyword1,
      keyword2,
      keyword3,
      keyword4,
      keyword5,
      keyword6,
      fund
    } = this.props.uploadThesis.thesisInfo;

    return (
      <div className="thesis">
        <InputFormField
          label="Thesis Title"
          name="title"
          value={title}
          onChange={this.handleInputChange}
        />
        <InputFormField
          label="Thesis Abstract"
          name="abstract"
          value={abstract}
          onChange={this.handleInputChange}
        />
        <InputFormField
          label="Thesis Refrence"
          name="reference"
          value={reference}
          onChange={this.handleInputChange}
        />

        <div className="side-by-side">
          <InputFormField
            label="Keywords"
            name="keyword1"
            value={keyword1}
            onChange={this.handleInputChange}
          />
          <InputFormField
            name="keyword2"
            value={keyword2}
            onChange={this.handleInputChange}
          />
          <InputFormField
            name="keyword3"
            value={keyword3}
            onChange={this.handleInputChange}
          />
        </div>

        <div className="side-by-side">
          <InputFormField
            name="keyword4"
            value={keyword4}
            onChange={this.handleInputChange}
          />
          <InputFormField
            name="keyword5"
            value={keyword5}
            onChange={this.handleInputChange}
          />
          <InputFormField
            name="keyword6"
            value={keyword6}
            onChange={this.handleInputChange}
          />
        </div>

        <InputFormField
          label="Any source of funding you received while writing this thesis ?"
          name="fund"
          value={fund}
          type="textfield"
          onChange={this.handleInputChange}
        />

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
  setThesisInfoInput
};

ThesisInfo.propTypes = {
  uploadThesis: PropTypes.object.isRequired,
  showPrevForm: PropTypes.func.isRequired,
  showNextForm: PropTypes.func.isRequired,
  setThesisInfoInput: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ThesisInfo);
