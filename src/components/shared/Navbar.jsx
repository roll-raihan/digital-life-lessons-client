import React from 'react';
import { Link, NavLink } from 'react-router';
import './navbar.css'
import useAuth from '../../hooks/useAuth';
import { toast, ToastContainer } from 'react-toastify';
import Swal from 'sweetalert2';

const Navbar = () => {

    const { user, logOut } = useAuth();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    title: "Successfully logged out!",
                    icon: "success",
                    draggable: true
                });
            })
            .catch((error) => {
                toast(error.message)
            })
    }

    const links = <>
        <li><NavLink to='/public-lessons'>Public Lessons</NavLink></li>
        <li><NavLink to='/be-premium'>Be Premium</NavLink></li>
        <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <ToastContainer></ToastContainer>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link to='/' className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center btn btn-ghost text">
                    <span className="text-white font-bold text-xl">DL</span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <a onClick={handleLogOut} className="btn btn-secondary">Log Out</a> :
                        <Link className='btn btn-primary' to='/login'>Log in</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;