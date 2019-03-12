import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader, Banner } from "../utils"
import contactImg from "../images/bcg/contactBcg.jpeg"

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="contact" keywords={[`gatsby`, `application`, `react`]} />
      <PageHeader img={contactImg}>
        <Banner title="Contact Us" subtitle={`Let's get in touch`} />
      </PageHeader>
    </Layout>
  )
}

export default ContactPage
