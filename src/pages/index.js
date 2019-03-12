import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { HomeHeader, Banner } from "../utils"
import img from "../images/bcg/homeBcg.jpeg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HomeHeader img={img}>
      <Banner title="Eatery" subtitle="55 Main Street - Santa Monica, CA">
        <button />
      </Banner>
    </HomeHeader>
  </Layout>
)

export default IndexPage
