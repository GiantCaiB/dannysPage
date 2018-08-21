import "../css/InfoBoard.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import ErrorInfo from "./ErrorInfo";

class Download extends Component {

  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <div>
            <ErrorInfo
              error_title="LOGIN REQUIRED"
              error_msg="Please login to view this page..."
            />
          </div>
        );
      default:
        return (
          <div className="z-depth-5 hoverable grey lighten-4">
            <div className="Intro">
              <h5>Download Danny's Resume</h5>
              <a href="/api/download/resume">Resume_Wenfei Yu.pdf</a>
              <h5>Download Danny's Transcripts</h5>
              <a href="/api/download/transcripts">Transcripts_Wenfei Yu.pdf</a>
            </div>
          </div>
        );
    }
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(Download);