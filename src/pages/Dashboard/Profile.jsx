import React from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../components/shared/Loading";
import { MdWorkspacePremium } from "react-icons/md";

const Profile = () => {

    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const { data: userData = [], isLoading: userLoading } = useQuery({
        queryKey: ['isPremium', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/${user?.email}/isPremium`)
            return res.data
        }
    });

    const { data: lessons = [], isLoading: lessonsLoading } = useQuery({
        queryKey: ["my-public-lessons", user?.email],
        enabled: !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(`/lessons/user/public?email=${user?.email}`)
            return res.data.data;
        },
    });

    if (userLoading || lessonsLoading) {
        return <Loading />;
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            {/* ================= Profile Header ================= */}
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
                                {userData?.isPremium ? <p> Premium ⭐</p> : <p>Not premium user</p>}
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

                {/* ================= Stats ================= */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                    <div className="bg-gray-50 rounded-xl p-4 text-center">
                        <p className="text-2xl font-bold text-indigo-600">{lessons?.length || '0'}</p>
                        <p className="text-gray-500 text-sm">Lessons Created</p>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-4 text-center">
                        <p className="text-2xl font-bold text-indigo-600">{lessons?.saves || '0'}</p>
                        <p className="text-gray-500 text-sm">Lessons Saved</p>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-4 text-center">
                        <p className="text-2xl font-bold text-indigo-600">{userData?.isPremium ? 'Premium' : 'Public'}</p>
                        <p className="text-gray-500 text-sm">Account Type</p>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-4 text-center">
                        <p className="text-2xl font-bold text-indigo-600">
                            {userData?.isPremium ? <MdWorkspacePremium className="mx-auto"/> : 'Not Premium'}
                        </p>
                        <p className="text-gray-500 text-sm">Premium Status</p>
                    </div>
                </div>
            </div>

            {/* ================= User Public Lessons ================= */}
            <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    Public Lessons by You
                </h3>

                {/* Lessons Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Lesson Card */}
                    {lessons.map((lesson) => (
                        <div
                            key={lesson?._id}
                            className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
                        >
                            <div className="p-5 space-y-3">
                                <h4 className="font-semibold text-lg text-gray-800 line-clamp-2">
                                    {lesson?.lessonTitle}
                                </h4>

                                <p className="text-sm text-muted-foreground line-clamp-2">
                                    {lesson?.lessonDescription}
                                </p>
                                <div className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
                                    {lesson?.lessonAccess}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Profile;
