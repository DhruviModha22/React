import React, { useEffect, useState } from "react";

const ToDolist = () => {
  const [inputText, setInputText] = useState("");
  const [todolist, setTodolist] = useState(
    JSON.parse(localStorage.getItem("todolist")) || []
  );
  const [selectedTask, setSelectedTask] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [showCheckbox,setShowCheckbox] = useState(false);

  useEffect(() => {
    localStorage.setItem("todolist", JSON.stringify(todolist));
  }, [todolist]);

  function btnAdd() {
    setTodolist([...todolist, inputText]);
    setInputText("");
  }
  function btnDelete(){
    if (selectedTask === null) return;
    setTodolist(todolist.filter((_, i) => i !== selectedTask));
    setSelectedTask(null);
    setShowCheckbox(false)
  }
  function btnUpdate(){
    if (selectedTask===null) return;
    const updateTask=todolist.map((t,i) => (i===selectedTask ? inputText:t))
    setTodolist(updateTask);
    setInputText("")
    setEditMode(false)
    setSelectedTask(null)
    setShowCheckbox(false)
  }
  
  function handlebox(action){
    setShowCheckbox(true)
    if(action==="edit" && selectedTask!=null){
        setInputText(todolist[selectedTask]);
        setEditMode(true)
    }else if(action==="delete" && selectedTask!=null){
        btnDelete()
    }
  }
  return (
    <>
    <div className="max-w-md mx-auto mt-10 p-4 bg-gray-100 shadow-lg rounded-lg">
      <h1 className="text-xl font-bold mb-4 text-center">Todo List</h1>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter Your task"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          onClick={editMode?btnUpdate:btnAdd}
        >
          {editMode?"Update":"Add"}
        </button>
      </div>
      <ul>
        {todolist.map((item, index) => (
          <li
            key={index}
            className="flex justify-between items-center p-2 bg-white rounded-lg mb-2 shadow"
          >
            <div className="flex items-center gap-2">
                {showCheckbox && (<input
                type="checkbox"
                checked={selectedTask === index}
                onChange={() =>
                  setSelectedTask(selectedTask === index ? null : index)
                }
              />
              )}
              <span>{item}</span>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex justify-between mt-4">
        <button
          className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
          onClick={() => {
           handlebox("edit")
          }}
        >
          Edit
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          onClick={()=>handlebox("delete")}
        >
          Delete
        </button>
      </div>
    </div>
</>
  );
};

export default ToDolist;
