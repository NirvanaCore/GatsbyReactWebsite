import React from "react"
import Heading from "./Heading"
import { Link } from "gatsby"

const InfoBlock = ({ heading }) => {
  return (
    <section className="bg-theme my-5 py-4">
      <div className="container">
        <Heading title={heading} />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-theme mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
              natus voluptate porro nobis et impedit totam minima eius magnam
              eos maiores unde omnis beatae laborum illum neque nemo praesentium
              minus commodi quae aliquam amet. Sapiente, pariatur ad? Minima
              corporis ipsam mollitia, ratione suscipit sunt nam fugiat
              provident at. Non quam harum laudantium ab atque porro maxime odit
              consequuntur, ducimus magni.
            </p>
            <Link to="/about/">
              <button className="btn btn-warning btn-lg">{heading}</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InfoBlock