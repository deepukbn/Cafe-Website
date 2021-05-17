import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"
import Info from "../components/Home/info"
import Menu from "../components/Home/Menu"
import Gallery from "../components/Globals/Gallery"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={["gatsby", "application", "react"]} />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="Scoopy's Cafe"
    />

    <Info />
    <Gallery />
    <Menu items={data.menu} />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "backgroundimage.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    menu: allContentfulCoffeeItem {
      edges {
        node {
          id
          title
          description {
            description
          }
          price
          category
          image {
            fixed(width: 50, height: 50) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`
export default IndexPage
