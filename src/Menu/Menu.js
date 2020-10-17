import React from 'react';

import {
    Link
  } from "react-router-dom";

function Menu() {
  return (
    <nav className="menu">
        <ul>
            <li><Link to="">Home</Link></li>
            <li><Link to="about.html">About</Link></li>
            <li><Link to="login.html">Login</Link></li>
        </ul>
    </nav>
  );
}

export default Menu;
