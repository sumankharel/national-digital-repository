import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "../../styles/landing.css";

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <p> National Digital Repository</p>
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
