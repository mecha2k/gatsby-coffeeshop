import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Background from "../components/background"
import Info from "../components/info"

class About extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" keywords={["gatsby", "application", "react"]} />
        <Background
          img={this.props.data.img.childImageSharp.fluid}
          title="about us"
          styleClass="default-background"
        />
        <Info />
      </Layout>
    )
  }
}

export const query = graphql`
  {
    img: file(relativePath: { eq: "about-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default About
