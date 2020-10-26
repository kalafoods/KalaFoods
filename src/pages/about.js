import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader, Banner } from "../utils"
import aboutImg from "../images/bcg/aboutBcg.jpeg"

const AboutPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `react`, `restaurant`]} />
    <PageHeader img={aboutImg}>
      <Banner
        title="About Us"
        subtitle="How it all started..."
      ></Banner>
    </PageHeader>
  </Layout>
)

export default AboutPage
