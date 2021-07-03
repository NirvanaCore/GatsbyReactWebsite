import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSection from "../components/Reusable/HeroSection"
import InfoBlock from "../components/Reusable/InfoBlock"
import DualInfoBlock from "../components/Reusable/DualInfoBlock"
import TeamPhotoSection from "../components/About/TeamPhotoSection"

const AboutPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <HeroSection
      img={data.img.childImageSharp.fluid}
      title="About Us"
      subtitle=""
      heroClass="about-background"
    />
    <DualInfoBlock heading="A message from CEO" />
    <InfoBlock heading="About Our Vision" />
    <TeamPhotoSection />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "about.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default AboutPage
