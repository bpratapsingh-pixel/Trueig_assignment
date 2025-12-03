"use client";
import useFetch from "./customHooks/useFetch";
import { useState } from "react";

const Home =() =>{

  const[data,setData] = useFetch();
  const[inputData,setInputData] = useState("");
  const[editData,setEditData] = useState("");
  const[editId,setEditId] = useState(null);

  //handle add
  const handleAdd = () =>{
    if(!inputData.trim()) return

    const newItem = {
      id:Date.now(),
      title:inputData
    }
    const updated = [...data, newItem];
    setData(updated);
    localStorage.setItem("items",JSON.stringify(updated));
    setInputData("")
    
  }
  //handle delete
  const handleDelete = (id) =>{
     const updated = data.filter(item=>item.id!==id)
     setData(updated);
     localStorage.setItem("items",JSON.stringify(updated));
  }
  //handle edit
  const handleEdit = (id,title) => {
    setEditId(id);
    setEditData(title);
  }
  //handle save
  const handleSave =(id)=>{
    const updated = data.map((item)=>
    item.id === id?{...item, title:editData}:item
    )
    setData(updated);
    localStorage.setItem("items",JSON.stringify(updated));
    setEditId(null);
    setEditData("");
  }



  return(
   <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center p-4">

      {/* Navbar */}
      <div className="w-full max-w-3xl bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-4 mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center tracking-wide">
          To-Do List
        </h1>
      </div>

      {/* Input Area */}
      <div className="w-full max-w-3xl bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 mb-6">
        <label className="text-white text-lg font-medium">Add Task:</label>
        <div className="flex flex-col md:flex-row gap-3 mt-2">
          <input
            type="text"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
            placeholder="Enter your task..."
            className="flex-1 px-4 py-3 rounded-xl bg-gray-700 text-white border border-gray-600 
              focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />
          <button
            onClick={handleAdd}
            className="px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white 
              shadow-md transition font-semibold"
          >
            Add
          </button>
        </div>
      </div>

      {/* Todo List */}
      <div className="w-full max-w-3xl space-y-4">
        {data &&
          data.map((item,index) => (
            <div
              className="flex flex-col md:flex-row items-center justify-between bg-gray-800 bg-opacity-50 backdrop-blur-md p-4 rounded-xl shadow-lg"
              key={item.id}
            >
              <div className="text-indigo-400 font-semibold mr-2.5">#{index+1}</div>

              {editId === item.id ? (
                <input
                  type="text"
                  value={editData}
                  onChange={(e) => setEditData(e.target.value)}
                  className="flex-1 px-3 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 
                focus:outline-none focus:ring-2 focus:ring-indigo-400 transition mt-3 md:mt-0"
                />
              ) : (
                <div className="flex-1 text-white text-lg font-medium mt-3 md:mt-0">
                  {item.title}
                </div>
              )}

              {/* Buttons */}
              <div className="flex gap-2 mt-3 md:mt-0">
                {editId === item.id ? (
                  <button
                    onClick={() => handleSave(item.id)}
                    className="px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white font-semibold transition"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => handleEdit(item.id, item.title)}
                    className="px-4 py-2 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-white font-semibold transition"
                  >
                    Edit
                  </button>
                )}

                <button
                  onClick={() => handleDelete(item.id)}
                  className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white font-semibold transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
export default Home;