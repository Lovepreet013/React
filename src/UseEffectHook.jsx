import React, { useEffect, useState } from 'react';

const defaultTitle = 'React with Hooks';

const Counter = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    // `document.title` is set with each change (didMount/didUpdate).
    // Given the `value` has changed
    document.title = `The button has been clicked ${value} times.`;

    // Here we're returning our "Cleanup function" which resets the
    // title to the default before each update
    return () => {
      document.title = defaultTitle;
    };

    // Lastly, our dependency array. This way the Effect function
    // is only invoked when the `value` has actually changed.
  }, [value]);

  return (
    <div>
      <p>Counter: {value}</p>
      <button onClick={() => setValue(value + 1)}>+1</button>
    </div>
  );
};

export default Counter;

//implementation using class component

const classdefaultTitle = 'React with Hooks';

export class Counter2 extends React.Component {
    state = {
        value: 0,
    };

    componentDidMount() {
        document.title = `The button has been clicked ${this.state.value} times`;
    }

    componentDidUpdate(prevProps, prevState) { //allow us to perform side effects after DOM is rendered
        if (prevState.value !== this.state.value) {
            document.title = `The button has been clicked ${this.state.value} times`;
        }
    }

    componentWillUnmount() {
        document.title = defaultTitle;
    }

    render() {
        return (
            <div>
                <p>Counter: {this.state.value}</p>
                <button
                    onClick={() => {
                        this.setState((state) => ({ value: state.value + 1 }));
                    }}
                >
                    +1
                </button>
            </div>
        );
    }
}
