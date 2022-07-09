import React, { Component } from 'react'
//7:46 countinew

 class LifecycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "Vishwas"
      }      
      console.log("LifecycleB constructor")
    }

    static getDerivedStateFromProps(props, state) {
        console.log("LifecycleB getDerivedStateFromProp")
        return null
    }

    componentDidMount(){
        console.log("LifecycleB componentDidMount")
    }
    shouldComponentUpdate() {
      console.log('LifecycleB shouldComponentUpdate')
      return true
    }
    
    getSnapshotBeforeUpdate(prevProps, prevState) {
      console.log('LifecycleB getSnapshotBefore')
      return null
    }
    
    componentDidUpdate(){
      console.log('LifecycleB componentDidUpdate')
    }


  render() {
    console.log("LifecycleB render")
    return (
    <>
      <div>Lifecycle B</div>
    </>
  )
  
  }
}

export default LifecycleB
