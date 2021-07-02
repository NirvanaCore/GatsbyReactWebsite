import React from 'react'
import BackgroundImage from "gatsby-background-image"

const HeroSection = ({img,title,subtitle,heroClass}) => {
  return (
    <BackgroundImage className={heroClass} fluid={img}>
      <h1 className="text-theme display-4 text--uppercase text-center">
        {title}
      </h1>
      <div>
        <h4 className="text-warning">{subtitle}</h4>
      </div>
    </BackgroundImage>
  )
}

export default HeroSection
