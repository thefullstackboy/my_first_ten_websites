import React, { Component, createRef } from 'react'
import Input from './input'

class Focusinput extends Component {
    constructor(props) {
      super(props)
      this.componentRef = React.createRef()   
    }

    clickHandler = () => {
        this.componentRef.current.focusInput()
    }
  render() {
    return (
        <div>
        <Input ref={this.componentRef}/>
                <button onClick={this.clickHandler}>Focusinput</button>
        </div>
    )
  }
}

export default Focusinput
