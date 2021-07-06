import React, { Component } from "react"
import Heading from "../../Reusable/Heading"
import Img from "gatsby-image"

export default class CourseCart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      courses: props.courses.edges,
      myCourses: props.courses.edges,
    }
  }
  render() {
    console.log(this.state.courses)
    return (
      <section className="py-5">
        <div className="container">
          <Heading title="Courses" />
          <div className="row p-4">
            {this.state.myCourses.map(({ node }, index) => {
              return (
                <div key={node.id} className="col-11 col-md-6 d-flex mx-auto">
                  <Img fixed={node.image.fixed} />
                  <div className="flex-grow-1 px-3 my-5 mx-3">
                    <div className="d-flex justify-content-between">
                      <h5 className="mb-0">{node.title}</h5>
                      <h6 className="mb-0 text-success">
                        {node.price}
                        {""} Rs
                      </h6>
                    </div>
                    <p className="text-muted">
                      {/* <small>{node.description.id}</small> */}
                    </p>
                    <button
                      className="btn btn-warning snipcart-add-item"
                      data-item-id={node.id}
                      data-item-name={node.title}
                      data-item-price={node.price}
                      data-item-url="https://gatsby-reactwebsite.netlify.app"
                      data-item-image={node.image.fixed.src}
                    >
                      Join Now
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    )
  }
}
