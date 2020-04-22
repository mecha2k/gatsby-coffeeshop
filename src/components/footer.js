import React from "react"
import { Link } from "gatsby"

class Footer extends React.Component {
  render() {
    return (
      <footer className="bg-light py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-5 mx-auto text-center">
              <p>
                &copy;{new Date().getFullYear().toString()} Copyright,{" "}
                <Link to="/">cstory.com</Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
