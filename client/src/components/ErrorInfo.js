import "../css/Error.css";
import React, { Component } from "react";

class ErrorInfo extends Component {
    render() {
      return (
        <div className="z-depth-5 hoverable grey lighten-4">
          <div className="Info">
            <h3>{this.props.error_title||"Oops..."}</h3>
            {this.props.error_msg}
          </div>
        </div>
      );
    }
  }
  
  export default ErrorInfo;