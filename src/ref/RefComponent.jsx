import React, { createRef } from "react";

//Component with Callback Ref
export default class RefComponent extends React.Component{
    userNameEl = null

    setUsernameElement = (el) => { //passing this function to ref prop to set the userNameEl
        this.userNameEl = el
    }

    componentDidMount(){
        this.userNameEl.focus()
    }

    render(){
        return(
            <div> ref prop component
                <input type="text" name="userName" ref={this.setUsernameElement}/>
            </div>
        )
    }
}

//with Child Component
class ComponentWithChildRef extends React.Component{
    userNameEl = null

    setUsernameElement = (el) => {
        this.userNameEl = el
    }

    componentDidMount(){
        this.userNameEl.focus()
    }

    render(){
        return(
            <div>
            Username :
            <ChildComponetWithRef inputRef={this.setUsernameElement}/>
            </div>
        )
    }
}

export class ChildComponetWithRef extends React.Component{
    render(){
        return(
            <input type="text" ref={this.props.inputRef}/>
        )
    }
}

//CreateRef() used in class components, useRef() used in functional components
export class CreateRefComponent extends React.Component{
    userNameEl = createRef()

    componentDidMount(){
        // console.dir(this.userNameEl.current)
        this.userNameEl.current.focus()
    }

    render(){
        return(
            <div>
                CreateRef :
                <input type="text" ref={this.userNameEl} name="username"/>
            </div>
        )
    }
}