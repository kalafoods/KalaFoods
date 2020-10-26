import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader, Banner } from "../utils"
import menuImg from "../images/bcg/menuBcg.jpeg"
import Menu from "../components/HomePageComponents/Menu"

const MenuPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `react`, `restaurant`]} />
    <PageHeader img={menuImg}>
      <Banner title="Menu" subtitle={`Let's dig in`}></Banner>
    </PageHeader>
    <Menu />
  </Layout>
)

export default MenuPage
