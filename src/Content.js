import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";

const Content = () => {
  const [task, setTask] = useState("");
  const handleChange = (event) => {
    setTask(event.target.value);
  };

  const [submit, setSubmit] = useState([]);
  const handleClick = () => {
    if (task !== "") {
      setSubmit([...submit, task]);
      setTask("");
    }
  };
  const handleDelete = (index)=>{
    const items = submit.filter((itm,key)=>(key != index))
    setSubmit(items)
       
  }

  return (
    <>
      <main>
        <input
          className="addForm"
          value={task}
          type="text"
          onChange={handleChange}
        />

        <button onClick={handleClick}>Submit</button>
        <ul>
          {submit.map((task, index) => {
            return (
              <li className="item" key={index}>
                {task}
                <input type="checkbox" />
                <button
                    onClick={()=>handleDelete(index)}
                >
                    Delete</button>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
};

export default Content;
