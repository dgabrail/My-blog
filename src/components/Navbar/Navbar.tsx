import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className="navbar navbar-expand navbar-dark bg-primary">
        <div style={{justifyContent:'space-between' , flexWrap:'wrap'}} className="container-fluid">
          <span className="navbar-brand">My blog</span>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink to='/My-blog' className="nav-link">
                  Home 
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/new-post' className="nav-link">
                  Add 
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/about' className="nav-link">
                  About 
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/contacts' className="nav-link">
                  Contacts
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
