import React, { Component } from "react";
import { connect } from "react-redux";

export const requiresAuthentication = (ComposedComponent) => {
  // If user not authenticated render out to login
  class Authentication extends Component {
    componentDidMount() {
      if (!!this.props.loggedIn === false) {
        return this.props.history.push("/");
      }
    }

    componentDidUpdate(nextProps) {
      if (!!this.props.loggedIn === false) {
        return this.props.history.push("/");
      }
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  function mapStateToProps({ UserAuth }) {
    const { loggedIn, userInfo } = UserAuth;
    return { loggedIn, userInfo };
  }

  return connect(mapStateToProps)(Authentication);
};

export const requiresNoAuthentication = (ComposedComponent) => {
  // If user authenticated render out to dashboard
  class Authentication extends Component {
    componentDidMount() {
      if (!!this.props.loggedIn === true) {
        return this.props.history.push("/dashboard");
      }
    }

    componentDidUpdate(nextProps) {
      if (!!this.props.loggedIn === true) {
        return this.props.history.push("/dashboard");
      }
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  function mapStateToProps({ UserAuth }) {
    const { loggedIn, userInfo, justRegistered } = UserAuth;
    return { loggedIn, userInfo, justRegistered };
  }

  return connect(mapStateToProps)(Authentication);
};
