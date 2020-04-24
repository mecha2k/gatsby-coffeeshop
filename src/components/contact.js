import React from "react"
import Title from "./title"

class Contact extends React.Component {
  render() {
    return (
      <section className="contact py-5">
        <Title title="contact us" />

        <div className="row">
          <div className="col-10 col-sm-8 mx-auto">
            <form action="https://formspree.io/xzbanywo" method="POST">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="name"
                  placeholder="your name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="mecha2k@cstory.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="desc">Description</label>
                <input type="text" className="form-control" name="desc" id="desc" />
              </div>
              <button type="submit" className="btn btn-info btn-block text-capitalize mt-5">
                submit
              </button>
            </form>
          </div>
        </div>
      </section>
    )
  }
}

export default Contact
