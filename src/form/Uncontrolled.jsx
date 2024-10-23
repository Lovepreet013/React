import React from "react"

export class Uncontrolled extends React.Component {
    state = {
        username: '',
        isValid: false
    }

    changeUserName = (e) => {
        const { value } = e.target
        this.setState(() => ({
            username: value,
            isValid: value.length > 3
        }))
    }

    submitForm = (e) => {
        e.preventDefault()
        alert(`Hello ${this.state.username}`);
    }

    render() {
        return (
            <form method="post" onSubmit={this.submitForm}>
                <p>Uncontrolled Form</p>
                <input type="text" name="username" onChange={this.changeUserName} placeholder="username" />
                <input type="submit" disabled={!this.state.isValid} />
            </form>
        )
    }
}

