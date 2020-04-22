import React from "react"
import { Link, graphql } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Background from "../components/background"
import Info from "../components/info"
import Title from "../components/title"

const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" keywords={["gatsby", "application", "react"]} />
    <Background
      img={props.data.img.childImageSharp.fluid}
      title="regular joe's"
      styleClass="default-background"
    />
    <Title title="our story" />
    <Info />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "default-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default IndexPage
