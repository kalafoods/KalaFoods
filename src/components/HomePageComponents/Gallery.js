import React from "react"
import styled from "styled-components"
import { styles, Section } from "../../utils"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const query = graphql`
  {
    getImages: allFile(filter: { relativeDirectory: { eq: "homeGallery" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
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
        // data =>getImages(which is an obj) -> getImages -> edges(array of nodes) -each node-> childImageSharp -> fluid -> image
        const nodeArray = data.getImages.edges
        return (
          <Section>
            <GalleryWrapper>
              {nodeArray.map(({ node }, index) => {
                // Index makes it easier than using id attr available in every node
                //The node is destructured here, as an alternative for writing lenghty lines for loopinh through evey item in the node
                return (
                  <div key={index} className={`item item-${index + 1}`}>
                    <Img fluid={node.childImageSharp.fluid} />
                    <p className="info">Awesome Pizza</p>
                  </div>
                )
              })}
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
