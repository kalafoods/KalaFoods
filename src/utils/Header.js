import React from "react"
import styled from "styled-components"
import img from "../images/bcg/homeBcg.jpeg"

function HomeHeader({ img, children }) {
  return <IndexHeader img={img}>{children}</IndexHeader>
}

function PageHeader({ img, children }) {
  return <DefaultHeader img={img}>{children}</DefaultHeader>
}

const IndexHeader = styled.header`
  min-height: calc(100vh - 54.8px);
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${props => props.img}) center/cover fixed no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
` // The props used here are renderProps and not normal props, as it would be a different procedure to use normal props here
// min-height -> calc => total height - navbar height => the image starts after the navbar
//  center/cover fixed no-repeat => bg-position/bg-size bg-attachement bg-repeat

// Same as IndexHeader, but instead of applying styles on a HTML element, a styled component can be imported and only the paramaters-
// - that require different customization or styling, shall be mentioned and rest of the styling is imported from that component
// EXPL => Here the styled component DefaultHeader imports all the styles from IndexHeader and only the height of attr needs change-
//- so only that is mentioned
const DefaultHeader = styled(IndexHeader)`
  min-height: 60vh;
`

HomeHeader.defaultProps = {
  // Default Props => To prevent any import issues on the respective pages, from not displaying the bg img
  img: img,
}

PageHeader.defaultProps = {
  img: img,
}

export { HomeHeader, PageHeader } // Destructuring is done here as multiple components will be expoerted from this file
