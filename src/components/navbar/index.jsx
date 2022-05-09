import React from 'react'

const Navbar = (props) => {
    return (
      <section className="task-number">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Number Of Task : {props.lenght} </h1>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Navbar