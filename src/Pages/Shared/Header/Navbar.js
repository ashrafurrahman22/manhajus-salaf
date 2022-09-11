import React from 'react';
import { Link } from 'react-router-dom';
import '../../../Styles/Navbar.css'
import logo from '../../../assets/logo.png'

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/blogs'>Blogs</Link></li>
      <li><Link to='/books'>Books</Link></li>
      <li><Link to='/videos'>Videos</Link></li>
      </ul>
    </div>
    <Link style={{
        fontFamily:"aleo",
    }} to='/' className="text-2xl font-medium btn btn-ghost normal-case ">
      <img className='w-14' src={logo} alt="" />
      Manhajus Salaf</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul style={{
        fontFamily:'raleways',
        
    }} className="menu menu-horizontal text-xl p-0">
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/blogs'>Blogs</Link></li>
      <li><Link to='/books'>Books</Link></li>
      <li><Link to='/videos'>Videos</Link></li>
    </ul>
  </div>
  <div className="lg:navbar-end lg:flex hidden">
    <Link id='btn' to='/donation' className="btn lg:w-44 font-medium">Donation</Link>
  </div>
</div>
    );
};

export default Navbar;