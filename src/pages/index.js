import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Background from "../components/background"
import Info from "../components/info"
import Title from "../components/title"
import Menu from "../components/menu"
import Products from "../components/products"

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
    <Menu items={props.data.menu} />
    <Products />
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

    menu: allContentfulMenuItem {
      edges {
        node {
          title
          description {
            description
          }
          price
          category
          image {
            fixed(width: 50, height: 50) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default IndexPage
