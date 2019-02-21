import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "../../styles/landing.css";
import classNames from "classnames";
import SearchDocumentForm from "./SearchDocumentForm";
import UploadDocumentForm from "./UploadDocumentForm";

class Landing extends Component {
  state = {
    showSearchDocument: true,
    showUploadDocument: false
  };

  handleShowSearchDocument = () => {
    this.setState({
      showSearchDocument: true,
      showUploadDocument: false
    });
  };

  handleShowUploadDocument = () => {
    this.setState({
      showSearchDocument: false,
      showUploadDocument: true
    });
  };

  render() {
    const { showSearchDocument, showUploadDocument } = this.state;

    return (
      <div className="landingbg">
      <div className="landing">
        <h1>National Digital Repository</h1>
        <div className="landing-buttons">
          <button
            className={classNames({ "active-button": showSearchDocument })}
            onClick={() => this.handleShowSearchDocument()}
          >
            <i className="fas fa-search" /> Search Document
          </button>
          <button
            className={classNames({ "active-button": showUploadDocument })}
            onClick={() => this.handleShowUploadDocument()}
          >
            <i className="fas fa-file-upload" /> Upload Document
          </button>
        </div>
        {showSearchDocument ? <SearchDocumentForm /> : null}
        {showUploadDocument ? <UploadDocumentForm /> : null}
      </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  landing: state.landing
});

const mapDispatchToProps = {};

Landing.propTypes = {
  landing: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing);
