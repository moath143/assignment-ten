import React, { useState } from "react";

const TaskItem = (props) => {
  const [show, setShow] = useState("none");
  

  const showEdit = () => {
    setShow("flex");
  };

  const cancelEdit = () => {
    setShow("none");
  };

  return (
    <div className="task">
      <div className="task-main">
        <div className="info">
          <h3 className="count">{props.id}</h3>
          <h2>{props.item.title}</h2>
        </div>
        <div className="control">
          <button onClick={showEdit} className="btn btn-primary">
            Edit
          </button>
          <button
            onClick={() => props.deleteTask(props.item.id)}
            className="btn btn-danger"
          >
            Delete
          </button>
        </div>
      </div>
      <div style={{ display: show }} className=" update">
        <div className="info-input">
          <input
            type="text"
            placeholder="Update Your Task..."
            value={props.updateText}
            onChange={(e) => props.setUpdtateText(e.target.value)}
          />
        </div>
        <div className="control">
          <button className="btn btn-success">Update</button>
          <button onClick={cancelEdit} className="btn btn-secondary">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
