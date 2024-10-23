function myUseState(initialState) {
  let _val = initialState;
  function state() {
    return _val;
  }
  function setState(newValue) {
    _val = newValue;
    render();
  }
  return [state, setState];
}
function render() {
  console.log("Component re-render");
  console.log("current state value : ", counterState);
}
const [counterState, setCounterState] = myUseState(0);
console.log(counterState());
setCounterState(1);
console.log(counterState());