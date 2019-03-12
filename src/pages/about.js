import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader, Banner } from "../utils"
import aboutImg from "../images/bcg/aboutBcg.jpeg"

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="about" keywords={[`gatsby`, `application`, `react`]} />
      <PageHeader img={aboutImg}>
        <Banner title="About Us" subtitle="A little about us" />
      </PageHeader>
    </Layout>
  )
}

export default AboutPage
