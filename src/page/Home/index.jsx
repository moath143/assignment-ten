import React, { useState } from "react";
import FormTask from "../../components/formTask";
import Navbar from "../../components/navbar";
import TaskList from "../../components/tasks/taksList";
import "./style.css";



const Home = () => {
    const [taskText, setTaskText] = useState("");
    const [listTask, setListTask] = useState([]);
    const [updateText, setUpdtateText] = useState("");
    
      const addTask = (e) => {
          e.preventDefault();
          setListTask([
            ...listTask,
            { id: Math.random() * 1000, title: taskText },
          ]);
        setTaskText("");
      };

    const deleteTask = (id) => {
        setListTask(listTask.filter((item) => item.id !== id));
     }


  return (
    <>
      <header>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1>Todo List App</h1>
            </div>
          </div>
        </div>
      </header>
      <Navbar lenght={listTask.length} />
      <FormTask
        addTask={addTask}
        taskText={taskText}
        setTaskText={setTaskText}
      />
      <TaskList
        listTask={listTask}
        deleteTask={deleteTask}
        setUpdtateText={setUpdtateText}
        updateText={updateText}
      />
    </>
  );
};

export default Home;
