import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader } from "../utils"
import menuImg from "../images/bcg/menuBcg.jpeg"

const MenuPage = () => {
  return (
    <Layout>
      <SEO title="menu" keywords={[`gatsby`, `application`, `react`]} />
      <PageHeader img={menuImg}>
        <h1>Hello from Menu</h1>
      </PageHeader>
    </Layout>
  )
}

export default MenuPage
