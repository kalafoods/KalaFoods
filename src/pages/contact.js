import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader, Banner } from "../utils"
import contactImg from "../images/bcg/contactBcg.jpeg"

const ContactPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `react`, `restaurant`]} />
    <PageHeader img={contactImg}>
      <Banner title="Contact Us" subtitle={`Let's get in touch`}></Banner>
    </PageHeader>
  </Layout>
)

export default ContactPage
