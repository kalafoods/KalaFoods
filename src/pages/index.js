import React from "react"
import { Link } from "gatsby"
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
      <Banner title="கலா ஊறுகாய்" subtitle="Chennai & Villupuram">
        <Link to="/menu">
          <BannerButton style={{ margin: "2rem auto" }}>Menu</BannerButton>
        </Link>
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
