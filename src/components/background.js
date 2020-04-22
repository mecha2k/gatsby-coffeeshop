import React from "react"
import BackgroundImage from "gatsby-background-image"

class Background extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <BackgroundImage className={this.props.styleClass} fluid={this.props.img}>
        <h1 className="title text-white text-uppercase text-center display-4 font-weight-bold">
          {this.props.title}
        </h1>
        {this.props.children}
      </BackgroundImage>
    )
  }
}

Background.defaultProps = {
  title: "default title",
  styleClass: "default-background",
}

export default Background
