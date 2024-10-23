//Basic Implementation of useState() hook

function myUseState(initialState){
    let _val = initialState //our internal state value

    function state(){ //function to return our state
        return _val
    }

    function setState(newValue){
        _val = newValue
        render()
    }

    return [state, setState]
}

function render(){
    console.log("Component re-render")
    console.log("current state value : ", counterState)
}

//Usage example
const [counterState, setCounterState] = myUseState(0)
console.log(counterState())

setCounterState(1)
console.log(counterState())
