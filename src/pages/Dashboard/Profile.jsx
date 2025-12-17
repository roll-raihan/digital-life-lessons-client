import React from "react";

const Profile = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            {/* ================= Profile Header ================= */}
            <div className="bg-white rounded-2xl shadow p-6 mb-10">
                <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                    {/* Profile Photo */}
                    <div className="relative">
                        <img
                            src="https://i.ibb.co/7QpKsCX/avatar.png"
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
                            <h2 className="text-2xl font-bold text-gray-800">
                                Raihan Ahmed
                            </h2>
                            {/* Premium Badge */}
                            <span className="bg-yellow-100 text-yellow-700 text-sm font-semibold px-3 py-1 rounded-full">
                                Premium ⭐
                            </span>
                        </div>

                        <p className="text-gray-500">
                            raihan@gmail.com
                        </p>

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
                        <p className="text-2xl font-bold text-indigo-600">12</p>
                        <p className="text-gray-500 text-sm">Lessons Created</p>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-4 text-center">
                        <p className="text-2xl font-bold text-indigo-600">8</p>
                        <p className="text-gray-500 text-sm">Lessons Saved</p>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-4 text-center">
                        <p className="text-2xl font-bold text-indigo-600">Public</p>
                        <p className="text-gray-500 text-sm">Account Type</p>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-4 text-center">
                        <p className="text-2xl font-bold text-indigo-600">⭐</p>
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
                    {[1, 2, 3, 4, 5, 6].map((lesson) => (
                        <div
                            key={lesson}
                            className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
                        >
                            <img
                                src="https://i.ibb.co/SV6n4mK/lesson.jpg"
                                alt="Lesson"
                                className="w-full h-40 object-cover"
                            />

                            <div className="p-5 space-y-3">
                                <h4 className="font-semibold text-lg text-gray-800 line-clamp-2">
                                    Life Lesson Title Goes Here
                                </h4>

                                <p className="text-gray-500 text-sm line-clamp-2">
                                    Short description of the lesson. This is only UI content.
                                </p>

                                <div className="flex items-center justify-between pt-3">
                                    <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
                                        Public
                                    </span>

                                    <span className="text-xs text-gray-400">
                                        Newest
                                    </span>
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
