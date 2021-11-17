import React, { Component } from "react";

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      title: "component",
    };
  }

  handleClick() {
    console.log("click!");
  }

  componentDidMount() {
    console.log("component did mount");
  }

  render() {
    return (
      <>
        <div onClick={this.handleClick}>{this.state.title}</div>
      </>
    );
  }
}

export default MyComponent;
