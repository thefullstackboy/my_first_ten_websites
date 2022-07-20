import React, { Component } from 'react'

 class HowerCounteTwo extends Component {

  render() {
    const { count, incrementCount } = this.props    
    return <h2 onMouseOver={incrementCount}>Hovered {count} times</h2>
    
  }
}

export default HowerCounteTwo
