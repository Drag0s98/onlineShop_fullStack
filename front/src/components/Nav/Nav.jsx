import React, { useContext } from "react";
import { fallDown as Menu } from 'react-burger-menu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom'

import { auth } from '../../firebase';
import { DataContext } from "../../context/auth.context";

import './Nav.scss';


const Nav = ({ mockClick }) => {

  const { user } = useContext(DataContext)

  return (
    <Menu width={'30%'}
      customCrossIcon={<FontAwesomeIcon icon={faTimes} color='#F5CB5C' spin />}
      customBurgerIcon={<FontAwesomeIcon icon={faBars} />}
      right onOpen={mockClick} onClose={mockClick} >
      <Link to='/auth'>Sign In</Link>
      <Link to='/'>Home</Link>
      {user != null ? <button onClick={() => auth.signOut()}>Log Out</button> : ''}
    </Menu>
  );
};

export default Nav;
