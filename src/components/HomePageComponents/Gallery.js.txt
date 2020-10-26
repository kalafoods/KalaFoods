import React from "react"
import styled from "styled-components"
import { styles, Section } from "../../utils"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const query = graphql`
  {
    img1: file(relativePath: { eq: "homeGallery/img-1.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    img2: file(relativePath: { eq: "homeGallery/img-2.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    img3: file(relativePath: { eq: "homeGallery/img-3.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default function Gallery() {
  return (
    <StaticQuery
      query={query}
      render={data => {
        const img1 = data.img1.childImageSharp.fluid
        const img2 = data.img2.childImageSharp.fluid
        const img3 = data.img3.childImageSharp.fluid
        return (
          <Section>
            <GalleryWrapper>
              <div className="item item-1">
                <Img fluid={img1} />
                <p className="info">Awesome Pizza</p>
              </div>
              <div className="item item-2">
                <Img fluid={img2} />
                <p className="info">Awesome Pork</p>
              </div>
              <div className="item item-3">
                <Img fluid={img3} />
                <p className="info">Awesome Steak</p>
              </div>
            </GalleryWrapper>
          </Section>
        )
      }}
    />
  )
}

const GalleryWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; /*This attr says how many columns will be there and how the layout looks*/
  grid-row-gap: 0.5rem;
  grid-column-gap: 0.5rem;
  .item {
    position: relative;
  }
  .info {
    position: absolute;
    top: 0;
    left: 0;
    background: ${styles.colors.mainGold};
    padding: 0.1rem 0.3rem;
    text-transform: capitalize;
    border-radius: 0 0 7px 0;
  }
  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr; /* fr-> fraction, this styl means, 2 columns of equal width*/
    grid-column-gap: 1rem;
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr); /* same as => 1fr 1fr 1fr ;*/
  }
  @media (min-width: 992px) {
    .gatsby-image-wrapper {
      height: 100%;
    }
    grid-template-areas:/* making a 4 col layout and pretty much describing how the gris will/shoul be displayed*/
      "one one two two"
      "one one three three";
    .item-1 {
      grid-area: one;
    }
    .item-2 {
      grid-area: two;
    }
    .item-3 {
      grid-area: three;
    }
  }
`
