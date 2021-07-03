import React, { Component } from "react"
import Heading from "../Reusable/Heading"
import Img from "gatsby-image"

export default class CourseCart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      courses: props.courses.edges,
    }
  }
  render() {
    console.log(this.state.courses)
    return (
      <div>
        <h1>Hey i m from Course Cart</h1>
      </div>
    )
  }
}
