import React, { useState } from "react";

const FormTask = (props) => {
    

  return (
    <section className="form-task">
      <div className="container">
        <div className="row">
          <div className="col-md-12 d-flex justify-content-center">
            <form onSubmit={props.addTask}>
              <input
                value={props.taskText}
                onChange={(e) => props.setTaskText(e.target.value)}
                maxLength="28"
                className="form-input"
                type="text"
                placeholder="type your task..."
              />
              <button className="btn-input">Add Task</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormTask;
