import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Title from "./title"
import Product from "./product"

const getProducts = graphql`
  {
    products: allContentfulProduct {
      edges {
        node {
          id
          title
          price
          image {
            fluid(maxHeight: 426) {
              src
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

function Products(props) {
  return (
    <StaticQuery
      query={getProducts}
      render={(data) => {
        return (
          <section className="py-5">
            <div className="container">
              <Title title="our products" />
              <div className="row">
                {data.products.edges.map((edge) => {
                  return <Product key={edge.node.id} node={edge.node} />
                })}
              </div>
            </div>
          </section>
        )
      }}
    />
  )
}

export default Products
