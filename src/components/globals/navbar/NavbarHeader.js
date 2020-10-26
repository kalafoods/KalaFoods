import React, { Component } from "react"
import { Link } from "gatsby"
import logo from "../../../images/logo.svg"
import { FaAlignRight } from "react-icons/fa"
import styled from "styled-components"
import { styles } from "../../../utils"

export default class NavbarHeader extends Component {
  render() {
    const { handleNavbar } = this.props
    return (
      <HeaderWrapper>
        <Link to="/">
          <img src={logo} alt="உணவகம்" />
        </Link>
        <FaAlignRight
          className="toggle-icon"
          onClick={() => {
            handleNavbar()
          }}
        ></FaAlignRight>
        {/* The method received down throuh the props will be passed to this class here, as this is where the state is affected,-
        - in the navbar component, when clicking on this icon, which inturn affects the links */}
      </HeaderWrapper>
    )
  }
}

// const gold = "#d2aa5c" // can give by color name or hex code
const HeaderWrapper = styled.div`
  padding: 0.4rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .toggle-icon {
    font-size: 1.75rem;
    color: ${styles.colors.mainGold};
    cursor: pointer;
  }
  @media (min-width: 768px) {
    .toggle-icon {
      display: none;
    }
  }
`
