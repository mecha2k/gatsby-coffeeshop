import React from "react"
import GatsbyImage from "gatsby-image"

class Product extends React.Component {
  render() {
    return (
      <div className="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto my-3">
        <div className="card" style={{ minHeight: "100%" }}>
          <div style={{ maxHeight: "426px" }}>
            <GatsbyImage fluid={this.props.node.image.fluid} className="card-img-top" />
            <div className="card-body text-center">
              <h6>{this.props.node.title}</h6>
              <h6>${this.props.node.price}</h6>
              <button
                className="btn btn-info mt-3 text-capitalize snipcart-add-item"
                data-item-id={this.props.node.id}
                data-item-name={this.props.node.title}
                data-item-price={this.props.node.price}
                data-item-image={this.props.node.image.fluid.src}
                data-item-url="https://gatsby-coffeeshop-contentful.netlify.app"
              >
                add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Product
