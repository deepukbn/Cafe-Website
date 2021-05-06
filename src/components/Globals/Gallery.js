import { usseStaticQuery, graphql } from "gatsby"
import React from "react"
import Carousel from "react-bootstrap/Carousel"
import Img from "gatsby-image"
import Slide1 from "../../images/Slide1.jpeg"
import Slide2 from "../../images/Slide2.jpeg"
import Slide3 from "../../images/Slide3.jpeg"
import Slide4 from "../../images/Slide4.jpeg"

const Gallery = ({ data }) => {
  return (
    <div>
      <Carousel nextLabel="" prevLabel="" indicators>
        <Carousel.Item>
          <img
            width={900}
            height={600}
            className="d-block w-100"
            src={Slide1}
            alt="first image"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            width={900}
            height={600}
            src={Slide2}
            alt="first image"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            width={900}
            height={600}
            src={Slide3}
            alt="first image"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Gallery
