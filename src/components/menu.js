import React from "react"
import GatsbyImage from "gatsby-image"

import Title from "./title"

const getCategories = (items) => {
  const mapItems = items.map((item) => {
    return item.node.category
  })

  let categories = Array.from(new Set(mapItems))
  categories = ["all", ...categories]

  return categories
}

class Menu extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      items: props.items.edges,
      menuItems: props.items.edges,
      categories: getCategories(props.items.edges),
    }
  }

  handleMenuItems = () => {}

  render() {
    if (this.state.items.length < 1)
      return (
        <div>
          <h1>content from menu component</h1>
        </div>
      )

    return (
      <section className="menu py-5">
        <div className="container">
          <Title title="our menu" />
          <div className="row mb-5">
            <div className="col-10 mx-auto text-center">
              {this.state.categories.map((category, index) => {
                return (
                  <button
                    type="button"
                    key={index}
                    className="btn btn-yellow text-capitalize m-3"
                    onClick={() => {
                      this.handleMenuItems(category)
                    }}
                  >
                    {category}
                  </button>
                )
              })}
            </div>
          </div>
          <div className="row mb-5">
            {/*  {this.state.categories.map((category, index) => {*/}
            {/*    return <button type="button" key={index} className="btn"></button>*/}
            {/*  })}*/}

            {this.state.menuItems.map(({ node }) => {
              return (
                <div key={node.id} className="col-10 col-md-6 d-flex mx-auto my-3">
                  <div>
                    <GatsbyImage fixed={node.image.fixed} />
                  </div>
                  <div className="flex-grow-1 px-3">
                    <div className="d-flex justify-content-between">
                      <h5 className="mb-0">
                        <small>{node.title}</small>
                      </h5>
                      <h5 className="mb-0 text-yellow">
                        <small>${node.price}</small>
                      </h5>
                    </div>
                    <p className="text-muted mb-0">
                      <small>{node.description.description}</small>
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    )
  }
}

export default Menu
