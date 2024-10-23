import React from "react";
export class SyntheticEventObject extends React.Component {
  state = {};
  handler(e) {
    this.setState(state => ({
      value: e.target.value
    }));
  }
  handleChange = e => {
    this.setState(state => ({
      value: e.target.value
    }));
  };
  render() {
    return <div>
          <input type="text" onChange={this.handleChange} />
          <p>{`this is value : ${this.state.value}`}</p>
        </div>;
  }
}
export class SyntheticEventObject2 extends React.Component {
  state = {};
  handler = e => {
    const {
      value
    } = e.target;
    this.setState(() => ({
      value
    }));
  };
  handleChange = e => {
    e.persist();
    this.setState(() => ({
      value: e.target.value
    }));
  };
  render() {
    return <div>
          <input type="text" onChange={this.handleChange} />
          <p>{`this is value : ${this.state.value}`}</p>
        </div>;
  }
}