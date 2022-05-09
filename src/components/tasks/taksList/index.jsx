import React from "react";
import TaskItem from "../taskItem";

const TaskList = (props) => {
    const dataList = props.listTask.map((item, index) => {
        return (
          <TaskItem
            deleteTask={props.deleteTask}
            key={Math.random() * 1000}
            id={index + 1}
            item={item}
            updateText={props.updateText}
            setUpdtateText={props.setUpdtateText}
          />
        );
    })
  return (
    <section className="task-list">
      <div className="container">
        <div className="row">
          <div className="col-md-12">{dataList}</div>
        </div>
      </div>
    </section>
  );
};

export default TaskList;
