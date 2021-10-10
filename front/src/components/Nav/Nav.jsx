import React from "react";
import { fallDown as Menu } from 'react-burger-menu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faHamburger } from "@fortawesome/free-solid-svg-icons";

import './Nav.scss'

const Nav = () => {



  return (
    <Menu right width={'30%'} customBurgerIcon={<FontAwesomeIcon icon={faBars} />} >
      <p>Link1</p>
      <p>Link2</p>
      <p>Link3</p>
      <p>Link4</p>
    </Menu>
  );
};

export default Nav;
