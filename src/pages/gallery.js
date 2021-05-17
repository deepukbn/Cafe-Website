import React from "react"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"
import Gallery from "../components/Globals/Gallery"
import Layout from "../components/layout"
import BackgroundSection from "../components/Globals/BackgroundSection"

const GalleryPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" keywords={["gatsby", "application", "react"]} />

      <BackgroundSection
        img={data.img.childImageSharp.fluid}
        title="SCOOPY'S CAFE"
        styleClass="about-background"
      />
      <Gallery />
    </Layout>
  )
}

export const query = graphql`
  {
    img: file(relativePath: { eq: "about3.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default GalleryPage
