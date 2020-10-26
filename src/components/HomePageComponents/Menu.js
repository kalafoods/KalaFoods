import React from "react"
import Product from "./Product"
import { StaticQuery, graphql } from "gatsby"
import { Section, Title, SectionButton } from "../../utils"
import styled from "styled-components"
import { Link } from "gatsby"

const query = graphql`
  {
    pickles: allContentfulPickles {
      edges {
        node {
          title
          price
          id
          description{
            description
          }
          image {
            fixed(width: 150, height: 150) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
 `

export default function Menu() {
  return (
    <Section>
      <Title title="Our Speciaities" message="Delight in every bite" />
      <ProductList>
        <StaticQuery
          query={query}
          render={data => {
            const pickles = data.pickles.edges
            return pickles.map(item => {
              return <Product key={item.node.id} product={item.node} />
            })
          }}
        />
      </ProductList>
    </Section>
  )
}

const ProductList = styled.div`
  margin: 3rem 0;
  display: grid;
  grid-template-columns: 100%;
  grid-row-gap: 3rem;
  @media (min-width: 576px) {
    grid-template-columns: 95%;
  }
  @media (min-width: 776px) {
    grid-template-columns: 80%;
    justify-content: center;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
  }
`
