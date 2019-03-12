import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader, Banner } from "../utils"
import menuImg from "../images/bcg/menuBcg.jpeg"

const MenuPage = () => {
  return (
    <Layout>
      <SEO title="menu" keywords={[`gatsby`, `application`, `react`]} />
      <PageHeader img={menuImg}>
        <Banner title="Our Menu" subtitle={`Let's dig in`} />
      </PageHeader>
    </Layout>
  )
}

export default MenuPage
