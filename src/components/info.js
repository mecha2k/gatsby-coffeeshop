import React from "react"
import { Link } from "gatsby"

class Info extends React.Component {
  render() {
    return (
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-md-8 mx-auto text-center">
              <p className="lead text-muted mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet posuere
                elit. Aliquam pulvinar, justo in vestibulum laoreet, nibh ipsum placerat felis, eu
                facilisis sem orci ut nisl. Aliquam non arcu libero. Class aptent taciti sociosqu ad
                litora torquent per conubia nostra, per inceptos himenaeos. Morbi posuere tempor
                rhoncus. Sed a arcu et ex sollicitudin ultrices. Maecenas ut dui et elit aliquet
                porta. Donec mattis orci enim, nec lobortis mauris lacinia sit amet. Sed bibendum
                pharetra justo vitae viverra. Aenean non orci interdum, vulputate dolor ac, auctor
                nibh. Fusce et semper leo. Nunc tempor felis in odio condimentum, ut egestas mi
                mollis. Sed vel malesuada odio. Nullam tempus enim nec porttitor eleifend. Donec a
                bibendum ipsum. Donec ultricies eu est sit amet porta. Morbi quis tempus magna. Sed
                orci libero, sodales a faucibus eu, auctor a lacus. Vivamus vitae elementum velit.
                Nulla id interdum magna. Donec bibendum scelerisque mi et fringilla. Sed in ligula
                non odio consectetur finibus.
              </p>
              <Link to="/about">
                <button className="btn btn-outline-info text-uppercase">about page</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Info
