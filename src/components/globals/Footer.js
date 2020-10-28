import React, { Component } from "react"
import styled from "styled-components"
import { styles } from "../../utils"
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa"

export default class Footer extends Component {
  state = {
    icons: [
      {
        id: 1,
        icon: <FaFacebook className="icon facebook-icon" />,
        path: "https:/facebook.com/guhandelta",
      },
      {
        id: 2,
        icon: <FaTwitter className="icon twitter-icon" />,
        path: "https:/twitter.com/guhandelta",
      },
      {
        id: 3,
        icon: <FaInstagram className="icon instagram-icon" />,
        path: "https:/instagram.com/guhandelta",
      },
    ],
  }
  render() {
    return (
      <FooterWrapper>
        <div className="title">கலா</div>
        <div className="icons">
          {this.state.icons.map(icon => {
            return (
              <a
                href={icon.path}
                key={icon.id}
                target="_blank"
                rel="noopener noreferrer"
              >
                {icon.icon}
              </a>
            )
          })}
        </div>
        <p className="copyright">copyright &copy; 2019 உணவகம்</p>
      </FooterWrapper>
    )
  }
}

const FooterWrapper = styled.div`
  padding: 2rem 0;
  background: ${styles.colors.mainBlack};
  .icons {
    width: 10rem;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
  }
  .icon {
    color: ${styles.colors.mainWhite};
    font-size: 1.3rem;
    ${styles.transition({})};
    &:hover {
      color: ${styles.colors.mainGold};
    }
  }
  .copyright {
    color: ${styles.colors.mainWhite};
    text-transform: capitalize;
    text-align: center;
    margin: 1rem 0;
  }
  .title {
    text-align: center;
    width: 10rem;
    color: ${styles.colors.mainGold};
    text-transform: uppercase;
    padding: 0.3rem 1rem;
    margin: 0 auto 2rem auto;
    font-size: 1.5rem;
    ${styles.border({ color: `${styles.colors.mainGold}` })}
  }
`
