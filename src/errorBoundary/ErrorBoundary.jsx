import React from 'react'

class ErrorBoundary extends React.Component {

  state = {
    hasError: false,
  };

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>An error has occurred.</h1>;
    }

    return this.props.children ;
  }
}

function MSG({errExists}) {
    if(errExists == "Yes"){
      throw new Error("Error: Button Pressed");
    }
    return (
      <div>{"No errors here!!!"}</div>
    );
  }

export default class ErrorBoundaryApp extends React.Component {
  errState = "No";

  callError = () => {
    this.errState= "Yes";
    this.forceUpdate();
  }

  render() {
    return (
      <div className="App">
        <h1> Welcome to Educative! </h1>
        <button onClick={this.callError}>Press me to generate error</button>
        <br/><br/>
        <ErrorBoundary>
          <MSG errExists={this.errState} />
        </ErrorBoundary>
      </div>
    );
  }
}