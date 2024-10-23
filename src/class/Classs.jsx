import React from 'react';

export default class Classs extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            counter : 0
        }
    }

    addNewState = () =>{
        this.setState({date : new Date().toString()})
    }

    increamentCounter = () => {
        this.setState({counter : this.state.counter + 1})
    }

    render(){
        return(
            <div>
                <span>{this.state.counter}</span>
                <button onClick={this.increamentCounter}>Increment Counter</button>
                <button onClick={this.addNewState}>Click to get the Date and Time</button>
                <span>{this.state.date}</span>
                <span>{this.props.word}</span>
            </div>
        )
    }
}


export class LifeCycleMethod extends React.Component{
    state = {
        date : new Date()
    }

    componentDidMount(){
        this.intervalId =  setInterval(() => {
            this.setState(() => ({
                date : new Date()
            }))
        }, 1000)
    }

    componentWillUnmount(){
        clearInterval(this.intervalId)
    }

    render(){
        return(
            <div>
                {this.state.date.toLocaleTimeString()}
            </div>
        )
    }
}

//Dumb Components, only for display the date or only for layout purposes
    const ShowDate = ({date}) => <div>Today's Date is {date}</div>
const ShowTime = ({time}) => <div>Current Time is {time}</div>

//Smart Component, holds the business logic

export class DateTime extends React.Component{
    state = {
        date : new Date()
    }

    componentDidMount(){
        this.intervalId =  setInterval(() => {
            this.setState(() => ({
                date : new Date()
            }))
        }, 1000)
    }

    componentWillUnmount(){
        clearInterval(this.intervalId)
    }

    render(){
        return(
            <div>
                <ShowDate date={this.state.date.toLocaleDateString()} />
                <ShowTime time={this.state.date.toLocaleTimeString()} />
            </div>
        )
    }
}



const log = (method, component) => {
  console.log(`[${component}]`, method);
};

export class AnotherParentComponent extends React.Component {

  state = {};

  constructor(props) {
    super(props);
    log('constructor', 'parent');
  }

  static getDerivedStateFromProps() {
    log('getDerivedStateFromProps', 'parent');
    return null;
  }

  componentDidMount() {
    log('componentDidMount', 'parent');
    this.intervalId = setTimeout(() => {
      log('state update', 'parent');
      this.setState(() => ({
        time: new Date().toLocaleTimeString(),
      }));
    }, 2000);
  }

  shouldComponentUpdate() {
    log('shouldComponentUpdate', 'parent');
    return true;
  }

  getSnapshotBeforeUpdate() {
    log('getSnapshotBeforeUpdate', 'parent');
    return null;
  }

  componentDidUpdate() {
    log('componentDidUpdate', 'parent');
  }

  componentWillUnmount() {
    log('componentWillUnmount', 'parent');
    clearInterval(this.intervalId);
  }

  render() {
    log('render', 'parent');
    return <ChildComponent time={this.state.time} />;
  }
}

class ChildComponent extends React.Component {
  state = {};

  constructor(props) {
    super(props);
    log('constructor', 'child');
  }

  static getDerivedStateFromProps() {
    log('getDerivedStateFromProps', 'child');
    return null;
  }

  componentDidMount() {
    log('componentDidMount', 'child');
  }

  shouldComponentUpdate() {
    log('shouldComponentUpdate', 'child');
    return true;
  }

  getSnapshotBeforeUpdate() {
    log('getSnapshotBeforeUpdate', 'child');
    return null;
  }

  componentDidUpdate() {
    log('componentDidUpdate', 'child');
  }

  componentWillUnmount() {
    log('componentWillUnmount', 'child');
  }

  render() {
    log('render', 'child');
    return <div>{this.props.time}</div>;
  }
}

//Not so good approach
export class Counter extends React.Component {

    state = {
      counter: 0,
    };

    increase() {
      this.setState((state) => ({
        counter: state.counter + 1,
      }));
    }

    render() {
      return (
        <div>
          <p>{this.state.counter}</p>
          <button onClick={this.increase.bind(this)}>+1</button>
        </div>
      );
    }
}

//good Approach
export class NewCounter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.increase = this.increase.bind(this);
  }

  increase() {
    this.setState((state) => ({
      counter: state.counter + 1,
    }));
  }

  render() {
    return (
      <div>
        <p>{this.state.counter}</p>
        <button onClick={this.increase}>+1</button>
      </div>
    );
  }
}



export class WindowEventListenerComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
      scrollPosition: window.scrollY,
    };
  }

  // Method to handle window resize
  handleResize = () => {
    this.setState({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    });
  };

  // Method to handle window scroll
  handleScroll = () => {
    this.setState({
      scrollPosition: window.scrollY,
    });
  };

  componentDidMount() {//this is good place to listen for window events like resize and scroll
    // Add event listeners for resize and scroll when the component mounts
    window.addEventListener('resize', this.handleResize);
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    // Remove event listeners for resize and scroll when the component unmounts
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    return (
      <div>
        <h1>Window Event Listener Component</h1>
        <p>Window width: {this.state.windowWidth}px</p>
        <p>Window height: {this.state.windowHeight}px</p>
        <p>Scroll position: {this.state.scrollPosition}px</p>
      </div>
    );
  }
}

