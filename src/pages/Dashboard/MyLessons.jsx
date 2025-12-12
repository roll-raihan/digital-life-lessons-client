import React from 'react';
import { useQuery } from '@tanstack/react-query'
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { Eye, EyeOff, Lock, Unlock, Info, Heart, Bookmark, Calendar, Edit, Trash2 } from 'lucide-react';

const MyLessons = () => {

    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: lessons = [] } = useQuery({
        queryKey: ['my-lessons', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/lessons?email=${user.email}`);
            return res.data;
        }
    })

     const isPremiumUser = true;

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-slate-800 mb-2">My Lessons</h1>
                    <p className="text-slate-600">Manage and track your created lessons</p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                    <div className="bg-white rounded-lg shadow-sm p-4 border border-slate-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-slate-600 mb-1">Total Lessons</p>
                                <p className="text-2xl font-bold text-slate-800">{lessons.length}</p>
                            </div>
                            <div className="bg-blue-100 p-3 rounded-lg">
                                <Info className="w-6 h-6 text-blue-600" />
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-sm p-4 border border-slate-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-slate-600 mb-1">Total Reactions</p>
                                <p className="text-2xl font-bold text-slate-800">
                                    {lessons.reduce((sum, lesson) => sum + lesson.reactions, 0)}
                                </p>
                            </div>
                            <div className="bg-red-100 p-3 rounded-lg">
                                <Heart className="w-6 h-6 text-red-600" />
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-sm p-4 border border-slate-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-slate-600 mb-1">Total Saves</p>
                                <p className="text-2xl font-bold text-slate-800">
                                    {lessons.reduce((sum, lesson) => sum + lesson.saves, 0)}
                                </p>
                            </div>
                            <div className="bg-amber-100 p-3 rounded-lg">
                                <Bookmark className="w-6 h-6 text-amber-600" />
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-sm p-4 border border-slate-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-slate-600 mb-1">Public Lessons</p>
                                <p className="text-2xl font-bold text-slate-800">
                                    {lessons.filter(l => l.visibility === 'public').length}
                                </p>
                            </div>
                            <div className="bg-green-100 p-3 rounded-lg">
                                <Eye className="w-6 h-6 text-green-600" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Table */}
                <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-slate-50 border-b border-slate-200">
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
                                        Lesson Details
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
                                        Visibility
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
                                        Access Level
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
                                        Stats
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
                                        Created Date
                                    </th>
                                    <th className="px-6 py-4 text-center text-xs font-semibold text-slate-700 uppercase tracking-wider">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200">
                                {lessons.map((lesson) => (
                                    <tr key={lesson.id} className="hover:bg-slate-50 transition-colors">
                                        {/* Lesson Details */}
                                        <td className="px-6 py-4">
                                            <div className="max-w-xs">
                                                <h3 className="text-sm font-semibold text-slate-800 mb-1">
                                                    {lesson.title}
                                                </h3>
                                                <p className="text-xs text-slate-600 line-clamp-2">
                                                    {lesson.description}
                                                </p>
                                            </div>
                                        </td>

                                        {/* Visibility Toggle */}
                                        <td className="px-6 py-4">
                                            <button className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${lesson.visibility === 'public'
                                                    ? 'bg-green-100 text-green-700 hover:bg-green-200'
                                                    : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                                                }`}>
                                                {lesson.visibility === 'public' ? (
                                                    <>
                                                        <Eye className="w-3.5 h-3.5" />
                                                        Public
                                                    </>
                                                ) : (
                                                    <>
                                                        <EyeOff className="w-3.5 h-3.5" />
                                                        Private
                                                    </>
                                                )}
                                            </button>
                                        </td>

                                        {/* Access Level Toggle */}
                                        <td className="px-6 py-4">
                                            <button
                                                className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${lesson.accessLevel === 'premium'
                                                        ? 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                                                        : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                                                    } ${!isPremiumUser ? 'opacity-50 cursor-not-allowed' : ''}`}
                                                disabled={!isPremiumUser}
                                            >
                                                {lesson.accessLevel === 'premium' ? (
                                                    <>
                                                        <Lock className="w-3.5 h-3.5" />
                                                        Premium
                                                    </>
                                                ) : (
                                                    <>
                                                        <Unlock className="w-3.5 h-3.5" />
                                                        Free
                                                    </>
                                                )}
                                            </button>
                                        </td>

                                        {/* Stats */}
                                        <td className="px-6 py-4">
                                            <div className="flex flex-col gap-2">
                                                <div className="flex items-center gap-2 text-xs text-slate-600">
                                                    <Heart className="w-4 h-4 text-red-500" />
                                                    <span className="font-medium">{lesson.reactions}</span>
                                                    <span className="text-slate-500">reactions</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-xs text-slate-600">
                                                    <Bookmark className="w-4 h-4 text-amber-500" />
                                                    <span className="font-medium">{lesson.saves}</span>
                                                    <span className="text-slate-500">saves</span>
                                                </div>
                                            </div>
                                        </td>

                                        {/* Created Date */}
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2 text-xs text-slate-600">
                                                <Calendar className="w-4 h-4 text-slate-400" />
                                                <span>{lesson.createdDate}</span>
                                            </div>
                                        </td>

                                        {/* Actions */}
                                        <td className="px-6 py-4">
                                            <div className="flex items-center justify-center gap-2">
                                                <button className="p-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors">
                                                    <Info className="w-4 h-4" />
                                                </button>
                                                <button className="p-2 rounded-lg bg-amber-50 text-amber-600 hover:bg-amber-100 transition-colors">
                                                    <Edit className="w-4 h-4" />
                                                </button>
                                                <button className="p-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition-colors">
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Empty State (shown when no lessons) */}
                {lessons.length === 0 && (
                    <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-12 text-center">
                        <div className="max-w-md mx-auto">
                            <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Info className="w-8 h-8 text-slate-400" />
                            </div>
                            <h3 className="text-lg font-semibold text-slate-800 mb-2">No lessons yet</h3>
                            <p className="text-slate-600 mb-6">Create your first lesson to get started</p>
                            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                                Create Lesson
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyLessons;