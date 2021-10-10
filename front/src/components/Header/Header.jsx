import React from "react";

import './Header.scss'
import Nav from '../Nav'

const Header = () => {
  return (
    <header>
      <h1 className='title'>MERN-Shop</h1>
      <Nav/>
    </header>
  );
};

export default Header;
