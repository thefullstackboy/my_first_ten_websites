import React, { Component } from 'react'
import LifecycleB from './LifecycleB'
//7:46 countinew

 class LifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "Vishwas"
      }      
      console.log("LifecycleA constructor")
    }

    static getDerivedStateFromProps(props, state) {
        console.log("LifecycleA getDerivedStateFromProp")
        return null
    }

    componentDidMount(){
        console.log("LifecycleA componentDidMount")
    }
shouldComponentUpdate() {
  console.log('LifecycleA shouldComponentUpdate')
  return true
}

getSnapshotBeforeUpdate(prevProps, prevState) {
  console.log('LifecycleA getSnapshotBefore')
  return null
}

componentDidUpdate(){
  console.log('LifecycleA componentDidUpdate')
}

changeState = ()=> {
  this.setState({
    name: 'Codevolution'
  })
}


  render() {
    console.log("LifecycleA render")
    return (
      <>
    <div>Lifecycle A</div>
    <button onClick={this.changeState}>Change state</button>
    <LifecycleB/>
      </>
    )
    
  
  }
}

export default LifecycleA
