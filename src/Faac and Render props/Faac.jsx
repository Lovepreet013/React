import React from "react"

const Faac = () => {
  return (
    //Just for calling the functions
    <div>
      <Foo>
        {(name) => <div>hello from {name}</div>}
      </Foo>

      <PageWidth>
        {(width) => <div>Page width is : {width}</div>}
      </PageWidth>

    </div>
  )
}

export default Faac


//example is here
export const Foo = ({children}) => {
    return children("foo")
}

//another example is here
export class PageWidth extends React.Component{
    state = {width : 0}

    componentDidMount(){
        this.setState({width : window.innerWidth})

        window.addEventListener('resize', ({target}) => {
            this.setState({width : target.innerWidth})
        })
    }

    render(){
        const {width} = this.state

        return this.props.children(width)
    }
}