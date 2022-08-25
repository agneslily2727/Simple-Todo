import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditTodo = () => {
  const navigate = useNavigate();
  const[edit,setEdit] = useState({title:"",description:""});
  let params  = useParams();
  useEffect(() => {
    axios.get(`http://localhost:5000/api/todo/${params.id}`)
    .then((res) => setEdit({title:res.data.title,description:res.data.description}))
  },[params.id])

  const handleChange = (e) => {
    setEdit({...edit,[e.target.name]:e.target.value});
  }

const editTodo = (e) => {
  e.preventDefault();
  axios.put(`http://localhost:5000/api/todo/${params.id}`, edit)
      .then((res) => {
          edit({ title: "", description: "" });
      })
      .catch((err) => {
          console.log("Failed to update todo");
      });
      navigate('/')
}


  return (
    <div className='container commonClass'>
    <form method="POST">
  <div className="form-group">
    <label>Title</label>
    <input
    type="text"
    className="form-control"
    name="title"
    value={edit.title}
    onInput={handleChange}
    />
  </div>
  <div className="form-group">
    <label>Description</label>
    <input 
    type="text"
    className="form-control" 
    name="description"
    value={edit.description}
    onChange={handleChange}
    />
  </div>
  <button  className="btn btn-primary" onClick={editTodo}>Edit</button>
</form>
    </div>
  )
}

export default EditTodo