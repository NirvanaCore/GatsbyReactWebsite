import React from "react"
import Heading from "./Heading"
import cardTitle from "../../images/cardTitle.jpg"
import { Link } from "gatsby"

const DualInfoBlock = ({ heading }) => {
  return (
    <section className="my-4 py-4 bg-theme">
      <div className="container">
        <Heading title={heading} />
      </div>
      <div className="row d-flex justify-content-around">
        <div className="col-6 my-3">
          <p className="lead text-theme mb-2 text-justify">
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
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum culpa
            eos vel earum reiciendis magni animi? Assumenda, nesciunt! Deleniti
            possimus nesciunt nisi nemo culpa odit fugiat placeat dolores quia
            hic.
          </p>
        </div>
        <div className="col-4">
          <div className="card m-3 shadow p-3 bg-white rounded">
            <img
              src={cardTitle}
              className="card-img-top"
              width="20px"
              height="250px"
              alt="image"
            />
            <div className="card-body ">
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
