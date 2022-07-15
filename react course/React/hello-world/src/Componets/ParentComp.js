import React, { Component } from 'react'
import MemoComp from './MemoComp'
// import RegCom from './RegComp'
// import PureComp from './PureComp'

class ParentComp extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        name:'Vishwas'
     }
   }

   componentDidMount() {
    setInterval(()=>{
       this.setState({
        name: 'Vishwas'
       })
    },2000)
   }

  render() {
    console.log('*********************Parent Comp render*******************')
    return (        
      <div>Parent Component
        <MemoComp name={this.state.name}/>
      {/* <RegCom name={this.state.name}></RegCom>
      <PureComp name={this.state.name}></PureComp> */}
      </div>
    )
  }
}

export default ParentComp