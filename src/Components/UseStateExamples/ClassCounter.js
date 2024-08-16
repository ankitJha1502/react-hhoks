import React, { Component } from 'react'

export class ClassCounter extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            counter:0
        }
        
    }
  render() {
    return (
      <div>
        <button onClick={()=>this.setState({
            counter:this.state.counter+1
        })}>Count- {this.state.counter}</button>
      </div>
    )
  }
}

export default ClassCounter
