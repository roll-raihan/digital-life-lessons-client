import React from 'react';
import { IoIosAddCircle } from 'react-icons/io';
import { MdAdminPanelSettings, MdFavorite, MdOutlineManageSearch, MdPlayLesson, MdReport } from 'react-icons/md';
import { GiCaptainHatProfile } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { Link, Outlet } from 'react-router';
import useRole from '../../hooks/useRole';
import { FaUserShield } from 'react-icons/fa';

const Dashboard = () => {

    const { role } = useRole();

    return (
        <div className="drawer lg:drawer-open mt-16">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <div><Outlet></Outlet></div>
            </div>

            <div className="drawer-side is-drawer-close:overflow-visible">
                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
                    {/* Sidebar content here */}
                    <ul className="menu w-full grow">
                        <li>
                            {/* Sidebar toggle icon */}
                            <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                {/* Sidebar toggle icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M9 4v16"></path><path d="M14 10l2 2l-2 2"></path></svg>
                            </label>
                        </li>
                        {/* List item */}
                        <li>
                            <Link to='/' className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Homepage">
                                {/* Home icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
                                <span className="is-drawer-close:hidden">Homepage</span>
                            </Link>
                        </li>

                        {/* add lessons */}
                        <li>
                            <Link to='/dashboard/add-lessons' className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Add Lessons">
                                <IoIosAddCircle />
                                <span className="is-drawer-close:hidden">Add Lessons</span>
                            </Link>
                        </li>

                        {/* my lessons */}
                        <li>
                            <Link to='/dashboard/my-lessons' className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="My Lessons">
                                <MdPlayLesson />
                                <span className="is-drawer-close:hidden">My Lessons</span>
                            </Link>
                        </li>

                        {/* favorite lessons */}
                        <li>
                            <Link to='/dashboard/my-favorites' className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="My Favorites">
                                <MdFavorite />
                                <span className="is-drawer-close:hidden">My Favorites</span>
                            </Link>
                        </li>

                        {/* User Profile */}
                        <li>
                            <Link to='/dashboard/profile' className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Profile">
                                <CgProfile />
                                <span className="is-drawer-close:hidden">Profile</span>
                            </Link>
                        </li>

                        {
                            role?.role === 'admin' && <>
                                {/* admin dashboard */}
                                <li>
                                    <Link to='/dashboard/admin' className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Admin Dashboard">
                                        <MdAdminPanelSettings />
                                        <span className="is-drawer-close:hidden">Admin Dashboard</span>
                                    </Link>
                                </li>

                                {/* manage users */}
                                <li>
                                    <Link to='/dashboard/admin/manage-users' className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Manage Users">
                                        <FaUserShield></FaUserShield>
                                        <span className="is-drawer-close:hidden">Manage Users</span>
                                    </Link>
                                </li>
                                
                                {/* manage lessons */}
                                <li>
                                    <Link to='/dashboard/admin/manage-lessons' className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Manage Lessons">
                                        <MdOutlineManageSearch />
                                        <span className="is-drawer-close:hidden">Manage Lessons</span>
                                    </Link>
                                </li>
                                
                                {/* reported lessons */}
                                <li>
                                    <Link to='/dashboard/admin/reported-lessons' className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Reported Lessons">
                                        <MdReport />
                                        <span className="is-drawer-close:hidden">Reported Lessons</span>
                                    </Link>
                                </li>
                                
                                {/* admin profile */}
                                <li>
                                    <Link to='/dashboard/admin/profile' className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Admin Profile">
                                        <GiCaptainHatProfile />
                                        <span className="is-drawer-close:hidden">Admin Profile</span>
                                    </Link>
                                </li>
                            </>
                        }

                        {/* List item */}
                        <li>
                            <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Settings">
                                {/* Settings icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M20 7h-9"></path><path d="M14 17H5"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></svg>
                                <span className="is-drawer-close:hidden">Settings</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;