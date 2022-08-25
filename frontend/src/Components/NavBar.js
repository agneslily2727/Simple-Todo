import React from 'react'
import {Link} from 'react-router-dom'
const NavBar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg py-3 bg-dark fixed-top">
    <div className="container">
        <li className="navbar-brand text-light" >TODOS</li>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item"><Link className="nav-link text-light" to="/create"> CreateTodo </Link></li>
        <li className="nav-item"><Link className="nav-link text-light" to="/" > Home</Link></li>
        </ul>
        </div>
    </div>
    </nav>
    </>
  )
}
export default NavBar