import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props) {
       super(props) 

       this.state = {
        count: 0
       }
    }

    increment() {
        //setState example
    //     this.setState({
    //         count: this.state.count + 1
    //     },
    //     () => {
    //         console.log('Callback value', this.state.count)
    //     }
    //   )
        
    //     console.log(this.state.count)


    //setState example with props
      this.setState((prevState, props) =>({
        count: prevState.count + 1
      }))
      console.log(this.state.count)
    }
  render() {
    return (
      <div>Count - {this.state.count}
      <button onClick={() => this.increment()}>Increment</button>
      </div>
    )
  }
}

export default Counter