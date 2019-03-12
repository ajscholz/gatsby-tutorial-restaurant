import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader } from "../utils"
import contactImg from "../images/bcg/contactBcg.jpeg"

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="contact" keywords={[`gatsby`, `application`, `react`]} />
      <PageHeader img={contactImg}>
        <h1>Hello from contact</h1>
      </PageHeader>
    </Layout>
  )
}

export default ContactPage
