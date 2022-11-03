import React, { Component } from 'react'
import ChildComp from './ChildComp'

class ParentComp extends Component {
    constructor(props){
        super(props)

        this.state = {
            parentName: "Parent"
        }
        this.greetHandler=this.greetHandler.bind(this)
    }
    greetHandler(childName){
        // this.setState({
        //     parentName: "Parent"
        // })
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }
  render() {
    return (
      <div>
        <ChildComp clickHandler={this.greetHandler} />
      </div>
    )
  }
}

export default ParentComp