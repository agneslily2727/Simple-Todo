import React, { useState } from 'react'
import axios from 'axios';
const CreateTodo = () => {
  const [data,setData] = useState({title:"",description:""});
  
  const addTodo = async(e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/todo",data)
    .then((res) =>
    { 
      setData({ title: "", description: "" });
      console.log(res)
    })
  }
  const handleChange = (e) => {
    setData({...data,[e.target.name]:e.target.value});
  }
  return (
    <div className='container commonClass'>CreateTodo
    <form method="POST">
  <div className="form-group">
    <label>Title</label>

    <input
    type="text"
    className="form-control"
    name="title"
    value={data.title}
    onInput={handleChange}
    />
  </div>
  <div className="form-group">
    <label>Description</label>
    <input 
    type="text"
    className="form-control" 
    name="description"
    value={data.description}
    onChange={handleChange}
    />
  </div>
  <button  className="btn btn-primary" onClick={addTodo}>Add Todo</button>
</form>
    </div>
  )
}

export default CreateTodo