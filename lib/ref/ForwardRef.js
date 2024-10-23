import React from 'react';
export class ForwardRef extends React.Component {
  usernameEl = React.createRef();
  componentDidMount() {
    console.log(this.usernameEl);
  }
  render() {
    return <div className="app">
                <UserNameEl ref={this.usernameEl} />
            </div>;
  }
}
export const UserNameEl = React.forwardRef((props, ref) => <div>
        <input type="text" ref={ref} {...props} />
    </div>);