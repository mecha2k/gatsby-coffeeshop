import React from "react"
import { Link } from "gatsby"

import "./bootstrap.min.css"
import logo from "../images/coffee.png"
import { FaCartArrowDown } from "react-icons/fa"

class Navbar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      navbarOpen: false,
      css: "collapse navbar-collapse",
      links: [
        {
          id: 1,
          path: "/",
          text: "home"
        },
        {
          id: 2,
          path: "/about",
          text: "about"
        }
      ]
    }
  }

  handleNavbar = () => {
    this.state.navbarOpen
      ? this.setState({ navbarOpen: false, css: "collapse navbar-collapse" })
      : this.setState({ navbarOpen: true, css: "collapse navbar-collapse show" })
  }

  render() {
    return (
      <nav className="navbar navbar-expand-md bg-light navbar-light">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="logo" width="20px" />
        </Link>
        <button className="navbar-toggler" type="button" onClick={this.handleNavbar}>
          <span className="navbar-toggler-icon" />
        </button>
        <div className={this.state.css}>
          <ul className="navbar-nav mx-auto">
            {this.state.links.map(function(link) {
              return (
                <li key={link.id} className="nav-item">
                  <Link to={link.path} className="nav-link text-capitalize">
                    {link.text}
                  </Link>
                </li>
              )
            })}
            <li className="nav-item ml-sm-5">
              <FaCartArrowDown className="cart-icon snipcart-checkout" />
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar
