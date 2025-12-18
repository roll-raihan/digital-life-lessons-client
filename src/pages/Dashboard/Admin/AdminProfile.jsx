import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../../components/shared/Loading';
import { RiAdminFill } from "react-icons/ri";
{/*  */}

const AdminProfile = () => {

    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const { data: userData = [], isLoading: userLoading } = useQuery({
        queryKey: ['isPremium', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/${user?.email}/isPremium`)
            return res.data
        }
    });

    if (userLoading) return <Loading></Loading>

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="bg-white rounded-2xl shadow p-6 mb-10">
                <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                    {/* Profile Photo */}
                    <div className="relative">
                        <img
                            src={userData?.photoURL || "https://i.ibb.co/7QpKsCX/avatar.png"}
                            alt="Profile"
                            className="w-28 h-28 rounded-full object-cover border-4 border-indigo-500"
                        />
                        <button className="absolute bottom-0 right-0 bg-indigo-600 text-white text-xs px-3 py-1 rounded-full hover:bg-indigo-700">
                            Change
                        </button>
                    </div>

                    {/* User Info */}
                    <div className="flex-1 space-y-2">
                        <div className="flex items-center gap-3">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-800">
                                    {userData?.displayName || 'Creator Name'}
                                </h2>
                                <p className="text-gray-500">
                                    {userData?.email || 'Creator Email'}
                                </p>
                            </div>
                            {/* Premium Badge */}
                            <span className="bg-yellow-100 text-yellow-700 text-sm font-semibold px-3 py-1 rounded-full">
                                <RiAdminFill />
                            </span>
                        </div>

                        {/* Edit Name */}
                        <div className="flex gap-3 mt-3">
                            <input
                                type="text"
                                placeholder="Update display name"
                                className="border rounded-lg px-4 py-2 w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                            <button className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700">
                                Update
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminProfile;