import React from 'react'

export class ForwardRef extends React.Component{
    usernameEl = React.createRef()

    componentDidMount(){
        console.log(this.usernameEl)
    }

    render(){
        return(
            <div className="app">
                <UserNameEl ref={this.usernameEl}/>
            </div>
        )
    }
}

// export class UserNameEl extends React.Component{ // using this, current will be = to instance of UserNameEl
//     render(){
//         return(
//             <div>
//                 <input type="text" ref={this.props.ref} {...this.props} />
//             </div>
//         )
//     }
// }

// export const UserNameEl = (props) => { //using this the current was null
//     return(
//         <div>
//             <input type="text" ref={props.ref} {...props} />
//         </div>
//     )
// }

//Now to reference the input inside the UserNameEL we use ForwardRef :
export const UserNameEl = React.forwardRef((props, ref) => (
    <div>
        <input type="text" ref={ref} {...props}/>
    </div>
))

