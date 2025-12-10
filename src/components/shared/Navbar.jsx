import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router';
import './navbar.css'
import useAuth from '../../hooks/useAuth';
import { toast, ToastContainer } from 'react-toastify';
import Swal from 'sweetalert2';

const Navbar = () => {

    const { user, logOut } = useAuth();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    // handle click outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                setIsDropdownOpen(false); // Close dropdown on logout
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
                    user ? (
                        // Profile Dropdown Section
                        <div className="relative" ref={dropdownRef}>
                            {/* Profile Button */}
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="btn btn-ghost btn-circle avatar"
                            >
                                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img
                                        src={user?.photoURL}
                                        alt={user?.displayName || 'User'}
                                    />
                                </div>
                            </button>

                            {/* Dropdown Menu */}
                            {isDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-56 bg-base-100 rounded-box shadow-lg border border-base-300 z-50">
                                    {/* User Info */}
                                    <div className="px-4 py-3 border-b border-base-300">
                                        <p className="text-sm font-semibold">
                                            {user?.displayName || 'User'}
                                        </p>
                                        <p className="text-xs text-gray-500 truncate">
                                            {user?.email}
                                        </p>
                                    </div>

                                    {/* Menu Items */}
                                    <ul className="menu menu-sm p-2">
                                        <li>
                                            <Link
                                                to="/profile"
                                                onClick={() => setIsDropdownOpen(false)}
                                            >
                                                👤 Profile
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/dashboard"
                                                onClick={() => setIsDropdownOpen(false)}
                                            >
                                                📊 Dashboard
                                            </Link>
                                        </li>
                                        <li className="border-t border-base-300 mt-2 pt-2">
                                            <a
                                                onClick={handleLogOut}
                                                className="text-error"
                                            >
                                                🚪 Log out
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    ) : (
                        <Link className='btn btn-primary' to='/login'>Log in</Link>
                    )
                }
            </div>
        </div>
    );
};

export default Navbar;