import React, { createRef } from "react";
export default class RefComponent extends React.Component {
  userNameEl = null;
  setUsernameElement = el => {
    this.userNameEl = el;
  };
  componentDidMount() {
    this.userNameEl.focus();
  }
  render() {
    return <div> ref prop component
                <input type="text" name="userName" ref={this.setUsernameElement} />
            </div>;
  }
}
class ComponentWithChildRef extends React.Component {
  userNameEl = null;
  setUsernameElement = el => {
    this.userNameEl = el;
  };
  componentDidMount() {
    this.userNameEl.focus();
  }
  render() {
    return <div>
            Username :
            <ChildComponetWithRef inputRef={this.setUsernameElement} />
            </div>;
  }
}
export class ChildComponetWithRef extends React.Component {
  render() {
    return <input type="text" ref={this.props.inputRef} />;
  }
}
export class CreateRefComponent extends React.Component {
  userNameEl = createRef();
  componentDidMount() {
    this.userNameEl.current.focus();
  }
  render() {
    return <div>
                CreateRef :
                <input type="text" ref={this.userNameEl} name="username" />
            </div>;
  }
}