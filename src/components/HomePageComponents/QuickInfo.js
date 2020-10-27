import React, { Component } from "react"
import { Section, Title, SectionButton } from "../../utils"
import styled from "styled-components"
import { Link } from "gatsby"
import { styles } from "../../utils"

export default class QuickInfo extends Component {
  render() {
    return (
      <Section>
        <Title message="Let me tell you about" title="Out Mission" />
        <QuickInfoWapper>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            inventore porro ipsum optio officia iste distinctio repellendus
            veritatis enim repellat doloribus, consectetur, saepe beatae iusto,
            itaque quam provident. Similique itaque et sint excepturi nam aut
            commodi quas, vero debitis nostrum labore voluptatum quos quasi
            architecto minima magnam id autem aperiam?
          </p>
        </QuickInfoWapper>
        <SectionButton style={{ margin: "2rem auto" }}>
          <Link to="/about/" style={{ textDecoration: "none", color: `${styles.colors.mainBlack}` }}>
            About
          </Link>
        </SectionButton>
      </Section>
    )
  }
}

const QuickInfoWapper = styled.div`
  width: 90%;
  margin: 2rem auto;
  .text {
    line-height: 2rem;
    color: ${styles.colors.mainGrey};
    word-spacing: 0.2rem;
  }
  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 992px) {
    width: 60%;
  }
`
