import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { HomeHeader, Banner, BannerButton } from "../utils"
import QuickInfo from "../components/HomePageComponents/QuickInfo"
import Gallery from "../components/HomePageComponents/Gallery"
import img from "../images/bcg/homeBcg.jpeg"
import Menu from "../components/HomePageComponents/Menu"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `react`, `restaurant`]} />
    <HomeHeader img={img}>
      <Banner title="காலா ஊருகாய்" subtitle="Villupuram, Villupuram">
        <a href="#menu">
          <BannerButton style={{ margin: "2rem auto" }}>Menu</BannerButton>
        </a>
      </Banner>
    </HomeHeader>
    <QuickInfo />
    <Gallery />
    <div id="menu">
      <Menu />
    </div>
  </Layout>
)

export default IndexPage
