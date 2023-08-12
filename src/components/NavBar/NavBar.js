import React from 'react';
import "./NavBar.css";
import {netflix_logo,nav_avatar} from "../../content"

const NavBar = () => {
  return (
    <div className='navbar'>
       <img className='logo' src={netflix_logo} alt="Netflix logo" />
       <img className='avatar' src={nav_avatar} alt="Avatar" />
    </div>
  )
}

export default NavBar