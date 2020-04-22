import React from "react"

class Title extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col text-center pt-5">
          <h1 className="display-4 text-capitalize font-weight-bold">{this.props.title}</h1>
        </div>
      </div>
    )
  }
}

export default Title
