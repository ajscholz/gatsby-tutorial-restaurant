import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader } from "../utils"
import aboutImg from "../images/bcg/aboutBcg.jpeg"

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="about" keywords={[`gatsby`, `application`, `react`]} />
      <PageHeader img={aboutImg}>
        <h1>Hello from about</h1>
      </PageHeader>
    </Layout>
  )
}

export default AboutPage
