import React, { useContext, useState } from "react";
import { fallDown as Menu } from 'react-burger-menu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom'

import { auth } from '../../firebase';
import { DataContext } from "../../context/auth.context";



const Nav = ({ mockClick }) => {

  const { user } = useContext(DataContext)
  const [redirect, setRedirect] = useState(false)

  return (
    <>
      {redirect === true ? window.location.reload(false) : null}
      <Menu width={'30%'}
        customCrossIcon={<FontAwesomeIcon icon={faTimes} color='#F5CB5C' spin />}
        customBurgerIcon={<FontAwesomeIcon icon={faBars} />}
        right onOpen={mockClick} onClose={mockClick} >
        <Link to='/'>Home</Link>
        {user != null ? <button onClick={() => {
          setRedirect(true)
          auth.signOut()
        }}>Log Out</button>
          : <Link to='/auth'>Sign In</Link>}
      </Menu>
    </>
  );
};

export default Nav;
