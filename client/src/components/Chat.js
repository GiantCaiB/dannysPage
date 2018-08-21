import React, { Component } from "react";
import { connect } from "react-redux";
import ErrorInfo from "./ErrorInfo";

class Chat extends Component {
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
          <div>
            <ErrorInfo error_msg="Work in progress here, let's go for something else." />
          </div>
        );
    }
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(Chat);