import React from "react";

export default class ConditionalRendering extends React.Component {
    state = {
        value : null
    }

    static getDerivedStateFromProps(props, state) {
        if(state.value == null){
            return{
                value : props.initialValue || "",
            }
        }
        return null;
    }

    handleChange = (e) => {
        const {value} = e.target;
        this.setState(() => ({
            value
        }))
    }

    setMode = (mode) => () => {
        this.setState(() => ({
            mode
        }))
    }

    render(){
        if(this.state.mode == "edit"){
            return(
                <div>
                    <input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                    />
                    <br />
                    <button onClick={this.setMode('view')}>Done</button>
                </div>
            )
        }

        return(
            <div>
                {this.state.value}
                <br />
                <button onClick={this.setMode('edit')}>Edit</button>
            </div>
        )
    }
}
