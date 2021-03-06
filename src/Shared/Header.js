import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../firebase.init";

const Header = () => {

  const [user] = useAuthState(auth);
  const navigate = useNavigate();

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
        navigate('/login');
      };
  const navbarItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/purchase">Purchase</Link>
      </li>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/portfolio">My Portfolio</Link>
      </li>
      <li>{user ? <button className="btn btn-ghost capitalize"  onClick={logout} >Sign Out</button> : <Link to="/login">Login</Link>}</li>
    </>
  );

  return (
    <div className="navbar bg-base-100 px-16">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navbarItems}
          </ul>
        </div>
        
        <Link to="/" className="btn btn-ghost normal-case text-xl"><img src="https://i.ibb.co/98f6phs/Car-Logo.png" alt="" className="h-10 w-23"/></Link>
      </div>
      <div className="navbar-center hidden lg:flex navbar-end">
        <ul className="menu menu-horizontal p-0">{navbarItems}</ul>
      </div>
    </div>
  );
};

export default Header;
