import React from "react";
import { Link } from "react-router-dom";

import Nav from '../Nav'

const Header = () => {
  return (
    <header>
      <Link to='/' className='titleLink'>
        <h1 className='title'>FStack-Shop</h1>
      </Link>
      <Nav />
    </header>
  );
};

export default Header;
