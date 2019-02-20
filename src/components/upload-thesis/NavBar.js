import React, { Component } from "react";
import "../../styles/nav-bar.css";

export default class NavBar extends Component {
  render() {
    return (
      <div className="nav-bar">
        <div className="nav-item">
          <i className="fas fa-home" />
          <p>Institution</p>
        </div>

        <div className="nav-item">
          <i className="fas fa-user" />
          <p>Authors</p>
        </div>

        <div className="nav-item">
          <i className="fas fa-info-circle" />
          <p>Thesis Info</p>
        </div>

        <div className="nav-item">
          <i className="fas fa-file-upload" />
          <p>Upload</p>
        </div>

        <div className="nav-item">
          <i className="fas fa-check-circle" />
          <p>Review</p>
        </div>
      </div>
    );
  }
}