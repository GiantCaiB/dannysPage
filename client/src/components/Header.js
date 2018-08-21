import "../css/Header.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google"><i className="material-icons left">account_circle</i>Login With Google To View More</a>
          </li>
        );
      default:
        // Link to={this.props.auth ? "/image" : "/"}
        return (
          <div>
            <li><Link to={"/Gallery"}><i className="large material-icons">photo_library</i></Link></li>
            <li><Link to={"/Chat"}><i className="large material-icons">chat</i></Link></li>
            <li><Link to={"/Pet"}><i className="large material-icons">pets</i></Link></li>
            <li><Link to={"/Download"}><i className="large material-icons">get_app</i></Link></li>
            <li>Welcome, {this.props.auth.name || " my friend"}</li>
            <li>
              <a href="/api/logout"><i className="large material-icons">directions_run</i></a>
            </li>
          </div>
        );
    }
  }

  render() {
    return (
      <div className="Logo">
        <nav >
          <div className="nav-wrapper grey">
              <Link
                to="/"
                className="brand-logo"
              >
                DANNY'S PAGE
                <i className="large material-icons">home</i>
              </Link>
              <ul className="right hide-on-med-and-down">{this.renderContent()}</ul>
          </div>
        </nav>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(Header);
