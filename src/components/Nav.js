import React from "react";
import { NavLink } from "react-router-dom";
import {FaUsers} from 'react-icons/fa';
import {GiHamburgerMenu} from'react-icons/gi';
import {ImUserPlus } from 'react-icons/im'
import './navbar.css'
const Nav = (props) => {

  return (
    <header>
       <div id="sidebar-wrapper">
            <ul className="sidebar-nav">
                <li className="sidebar-brand">
                        Navigation
                </li>
                <NavLink to='/user_management/' exact={true} activeClassName="is-active" style={{textDecoration:"none"}}> 
                <li>
                    <span className="link"><FaUsers style={{fontSize:'22px',margin:"5px"}}/>Existing User</span>
                </li>
                </NavLink>
               <NavLink to='/user_management/adduser/'  activeClassName="is-active" style={{textDecoration:"none"}}>
                <li>
                    <span className="link"><ImUserPlus style={{fontSize:'22px',margin:"5px"}}/>Create User</span>
                </li>
                </NavLink>
            </ul>
        </div>
        <nav className="nav d-flex align-items-center">
            <div className='brand'><GiHamburgerMenu className="burger"style={{fontSize:"28px",margin:"10px"}} onClick={props.toggleClass}/>User Management System</div>
        </nav>
    </header>
  );
};

export default Nav;