import React from "react";
import { fallDown as Menu } from 'react-burger-menu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import './Nav.scss'

const Nav = () => {



  return (
    <Menu width={'30%'}
      customCrossIcon={<FontAwesomeIcon icon={faTimes} color='#F5CB5C' spin />}
      customBurgerIcon={<FontAwesomeIcon icon={faBars} />}
      right  >
      <p>Link1</p>
      <p>Link2</p>
      <p>Link3</p>
      <p>Link4</p>
    </Menu>
  );
};

export default Nav;
