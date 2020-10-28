import styled from "styled-components"
import { styles } from "../utils"

const BannerButton = styled.button`
  display: block;
  color: ${styles.colors.mainWhite};
  background: transparent;
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.5rem;
  font-weight: 700;
  border: 0.1px solid rgba(255, 255, 255, 0.4);
  margin-top: 1rem;
  ${styles.transition({})};
  &:hover {
    background: ${styles.colors.mainWhite};
    color: ${styles.colors.mainGold};
    /* border: none;
    margin: 0.5px auto; */
    cursor: pointer;
  }
  a {
    text-decoration: none;
    transition: 1s linear;
  }
`

const SectionButton = styled(BannerButton)`
  color: ${styles.colors.mainBlack};
  font-family: 'Anurati', 'Helvetica' !important;
  ${styles.border({ color: `${styles.colors.mainBlack}` })};
  &:hover {
    background: ${styles.colors.mainBlack};
    color: ${styles.colors.mainGold};
  }
`

export { BannerButton, SectionButton }
