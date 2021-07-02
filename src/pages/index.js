import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSection from "../components/Reusable/HeroSection";

const IndexPage = ({data}) => (
  <Layout>
    <Seo title="Home" />
    <HeroSection
      img={data.img.childImageSharp.fluid}
      title="I Write Code"
      subtitle="Nirvana Core"
      heroClass="hero-background"
    />
    
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "background.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage
