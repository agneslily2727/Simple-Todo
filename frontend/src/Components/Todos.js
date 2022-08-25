import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Todos = () => {
  const navigate = useNavigate();
  
  const [item,setItem] = useState([]);
  const displayItem = () =>{
    fetch('http://localhost:5000/api/todo')
    .then((res) =>res.json())
    .then((data) => setItem(data.todos))
  }
  useEffect(()=>{
    displayItem();
  },[])
  return (
    <div className='container commonClass'>
      <ul>
      {item && item.map((toodoo,index) => (
          <div class="card text-center" key={index}>
          <div class="card-header bg-dark">
          </div>
          <div class="card-body">
            <h5 class="card-title">{toodoo.title}</h5>
            <p class="card-text">{toodoo.description}</p>
            <button className='btn btn-success btn-lg me-4' onClick={() => navigate(`/edit/${toodoo._id}`)}>Edit</button>
            <button className='btn btn-danger btn-lg'>Delete</button>
          </div>
        </div>
      ))}
      </ul>
    </div>
  )
}
export default Todos;