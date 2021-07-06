import React from "react"
import Heading from "../Reusable/Heading"

const Contact = () => {
  return (
    <section className="py-3">
      <Heading title="Contact Us" />
      <div className="col-10 col-sm-8 mx-auto">
        <form action="https://formspree.io/f/mnqlzybl" method="POST">
          <div className="form-group">
            <input
              type="text"
              name="name"
              id="name"
              className="form-control"
              placeholder="Your name"
            />
          </div>
        </form>
        <div className="form-group">
          <input
            type="email"
            name="email"
            id="email"
            className="form-control"
            placeholder="Your email"
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            name="mobile"
            id="mobile"
            className="form-control"
            placeholder="Your mobile number"
          />
        </div>
        <div className="form-group">
          <textarea
            type="text"
            name="description"
            id="description"
            className="form-control"
            placeholder="Your Message"
          />
        </div>
        <button className="btn btn-outline-info btn-block">Submit</button>
      </div>
    </section>
  )
}

export default Contact
