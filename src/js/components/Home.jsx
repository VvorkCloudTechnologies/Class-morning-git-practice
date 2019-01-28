import React, { Component } from "react";

export default class Home extends Component {
  render() {
    console.log("home props are", this.props);
    let data = this.props;
    return (
      <div>
        <div>This is home component</div>
      </div>
    );
  }
}
