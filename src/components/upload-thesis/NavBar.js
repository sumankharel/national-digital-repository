import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classNames from "classnames";
import "../../styles/nav-bar.css";
import {
  IoIosHome,
  IoIosPerson,
  IoIosInformationCircleOutline,
  IoIosCloudUpload,
  IoIosCheckmarkCircleOutline
} from "react-icons/io";
import { showSelectedUploadForm } from "../../store/actions/uploadThesisActions";

const navItems = [
  {
    title: "Institution",
    icon: <IoIosHome />
  },
  {
    title: "Authors",
    icon: <IoIosPerson />
  },
  {
    title: "Thesis Info",
    icon: <IoIosInformationCircleOutline />
  },
  {
    title: "Upload",
    icon: <IoIosCloudUpload />
  },
  {
    title: "Review",
    icon: <IoIosCheckmarkCircleOutline />
  }
];

class NavBar extends Component {
  handleShowForm = index => {
    const id = index + 1;
    this.props.showSelectedUploadForm(id);
  };

  render() {
    const { showForm } = this.props.uploadThesis;

    return (
      <div className="nav-bar">
        {navItems.map((item, i) => (
          <div
            key={`nav-item-${i}`}
            className={classNames("nav-item", {
              "active-item": showForm === i + 1
            })}
            onClick={() => this.handleShowForm(i)}
          >
            {item.icon}
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  uploadThesis: state.uploadThesis
});

const mapDispatchToProps = {
  showSelectedUploadForm
};

NavBar.propTypes = {
  uploadThesis: PropTypes.object.isRequired,
  showSelectedUploadForm: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
