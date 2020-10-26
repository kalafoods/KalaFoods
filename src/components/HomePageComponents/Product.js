import React from "react"
import styled from "styled-components"
import { styles } from "../../utils"
import Img from "gatsby-image"

export default function Product({ product }) {
  const { name, price, ingredients, description } = product
  const { fixed } = product.image

  return (
    <ProductWrapper>
      <Img fixed={fixed} className="img" />
      <div className="text">
        <div className="product-content">
          <h3 className="name">{name}</h3>
          <h3 className="description">{description.description}</h3>
          <h3 className="price">{price}</h3>
        </div>
        <p className="info">{ingredients}</p>
      </div>
    </ProductWrapper>
  )
}

const ProductWrapper = styled.div`
  @media (min-width: 576px) {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-column-gap: 1rem;
  }
  .img {
    border-radius: 0.5rem;
  }
  .product-content {
    display: flex;
    justify-content: space-between;
    font-size: 1.4rem;
    text-transform: uppercase;
  }
  .name {
    color: ${styles.colors.mainGold};
    margin-top: 0.5rem;
  }
  .description {
    color: ${styles.colors.mainGrey};
    margin-top: 0.5rem;
    font-size: 16px;
    font-style: oblique;
    word-spacing: 10px;
  }
  .price {
    color: ${styles.colors.mainGold};
    margin-top: 0.5rem;
  }
  .info {
    margin-top: 0.5rem;
    word-spacing: 0.2rem;
    text-transform: lowercase;
  }
`
