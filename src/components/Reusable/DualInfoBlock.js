import React from "react"
import Heading from "./Heading"
import { Link } from "gatsby"

const DualInfoBlock = ({ heading }) => {
  return (
    <section className="my-4 py-4 bg-theme">
      <div className="container">
        <Heading title={heading} />
      </div>
      <div className="row">
        <div className="col-8 mx-auto">
          <p className="lead text-theme mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
            natus voluptate porro nobis et impedit totam minima eius magnam eos
            maiores unde omnis beatae laborum illum neque nemo praesentium minus
            commodi quae aliquam amet. Sapiente, pariatur ad? Minima corporis
            ipsam mollitia, ratione suscipit sunt nam fugiat provident at. Non
            quam harum laudantium ab atque porro maxime odit consequuntur,
            ducimus magni. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Deleniti, natus voluptate porro nobis et impedit totam minima
            eius magnam eos maiores unde omnis beatae laborum illum neque nemo
            praesentium minus commodi quae aliquam amet. Sapiente, pariatur ad?
            Minima corporis ipsam mollitia, ratione suscipit sunt nam fugiat
            provident at. Non quam harum laudantium ab atque porro maxime odit
            consequuntur, ducimus magni.
          </p>
        </div>
        <div className="col-4">
          <div className="card">
            <img
              src="https://pixabay.com/photos/coffee-drink-caffeine-beverage-cup-6371149/"
              className="card-img-top"
              alt="image"
            />
            <div className="card-body">
              <h5 className="card-title text-success">Just Write Code</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Deleniti,natus voluptate porro
                nobis et impedit totam minima eius magnam eos maiores unde omnis
                beatae laborum illum neque nemo praesentium minus commodi quae
                aliquam amet.
              </p>
              <Link t0="/" className="btn btn-warning btn-block">
                {heading}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DualInfoBlock
