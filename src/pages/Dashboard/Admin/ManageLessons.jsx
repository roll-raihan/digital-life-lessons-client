import React, { useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../../components/shared/Loading';
import Swal from 'sweetalert2';
import { Flag, Globe, Lock } from 'lucide-react';

const ManageLessons = () => {

    const [category, setCategory] = useState('');
    const axiosSecure = useAxiosSecure();

    const { data: lessons = [], isLoading, refetch } = useQuery({
        queryKey: ['lessons', category],
        queryFn: async () => {
            const res = await axiosSecure.get(`/lessons?category=${category}`)
            return res.data;
        }
    })

    const { data: report = [], isLoading: reportLoading } = useQuery({
        queryKey: ['report-lesson'],
        queryFn: async () => {
            const res = await axiosSecure.get('/reports');
            return res.data;
        }
    })

    const handleReview = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to review this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, review it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/lessons/${id}/review`)
                    .then(() => {
                        refetch();
                        Swal.fire({
                            title: "Reviewed!",
                            text: "This lesson has been reviewed.",
                            icon: "success"
                        });
                    })
                    .catch(err => {
                        console.log('Error in manage user review:', err)
                    })
            }
        })
    }

    const handleFeature = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to feature this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, feature it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/lessons/${id}/feature`)
                    .then(() => {
                        refetch();
                        Swal.fire({
                            title: "Featured!",
                            text: "This lesson has been featured.",
                            icon: "success"
                        });
                    })
                    .catch(err => {
                        console.log('Error in manage user feature:', err)
                    })
            }
        });
    }

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/lessons/${id}`)
                    .then(() => {
                        refetch();
                        Swal.fire({
                            title: "Deleted!",
                            text: "This lesson has been deleted.",
                            icon: "success"
                        });
                    })
                    .catch(err => {
                        console.log('Error in manage user delete:', err)
                    })
            }
        });
    }

    const filterPublic = lessons.filter((lesson) => lesson?.lessonPrivacy === 'public')
    const filterPrivate = lessons.filter((lesson) => lesson?.lessonPrivacy === 'private')

    if (isLoading || reportLoading) return <Loading></Loading>

    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            <h2 className='font-bold text-3xl m-4'>Manage Lessons</h2>
            <div>
                <select
                    className="select select-bordered"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="">All Categories</option>
                    <option value="Personal-Growth">Personal Growth</option>
                    <option value="Career">Career</option>
                    <option value="Relationships">Relationships</option>
                    <option value="Mindset">Mindset</option>
                    <option value="Mistakes-Learned">Mistakes Learned</option>
                </select>
            </div>
            <div className='mt-5'>
                <h2 className="text-2xl font-bold mb-6 text-gray-800">All Lessons</h2>
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Lesson Name</th>
                            <th>Creator</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            lessons.map((lesson, i) => <tr key={lesson?._id}>
                                <td>{i + 1}</td>
                                <td>{lesson?.lessonTitle}</td>
                                <td>{lesson?.email}</td>
                                <td className='flex gap-2'>
                                    {
                                        lesson?.isReviewed ? <button className='btn btn-warning btn-sm'>Reviewed</button> : <button onClick={() => handleReview(lesson._id)} className='btn btn-sm  btn-warning btn-outline'>
                                            Review
                                        </button>
                                    }
                                    {
                                        lesson?.isFeatured ? <button className='btn btn-success btn-sm'>Featured</button> : <button onClick={() => handleFeature(lesson?._id)} className='btn btn-sm btn-success btn-outline'>
                                            Feature
                                        </button>
                                    }
                                    <button onClick={() => handleDelete(lesson._id)} className='btn btn-sm btn-error btn-outline'>Remove</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            <div className='mt-10'>
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Lesson Statistics</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Public Lessons Card */}
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg shadow-md p-6 border border-blue-200">
                        <div className="flex items-center justify-between mb-4">
                            <div className="bg-blue-500 p-3 rounded-full">
                                <Globe className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-sm font-medium text-blue-600 bg-blue-200 px-3 py-1 rounded-full">
                                Public
                            </span>
                        </div>

                        <div className="mt-4">
                            <p className="text-gray-600 text-sm font-medium mb-1">Public Lessons</p>
                            <p className="text-4xl font-bold text-blue-600">
                                {
                                    filterPublic?.length || '0'
                                }
                            </p>
                        </div>

                        <div className="mt-4 pt-4 border-t border-blue-200">
                            <p className="text-xs text-gray-600">
                                Accessible to all users
                            </p>
                        </div>
                    </div>

                    {/* Private Lessons Card */}
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg shadow-md p-6 border border-purple-200">
                        <div className="flex items-center justify-between mb-4">
                            <div className="bg-purple-500 p-3 rounded-full">
                                <Lock className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-sm font-medium text-purple-600 bg-purple-200 px-3 py-1 rounded-full">
                                Private
                            </span>
                        </div>

                        <div className="mt-4">
                            <p className="text-gray-600 text-sm font-medium mb-1">Private Lessons</p>
                            <p className="text-4xl font-bold text-purple-600">
                                {
                                    filterPrivate?.length || '0'
                                }
                            </p>
                        </div>

                        <div className="mt-4 pt-4 border-t border-purple-200">
                            <p className="text-xs text-gray-600">
                                Restricted access only
                            </p>
                        </div>
                    </div>

                    {/* Flagged Lessons Card */}
                    <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg shadow-md p-6 border border-red-200">
                        <div className="flex items-center justify-between mb-4">
                            <div className="bg-red-500 p-3 rounded-full">
                                <Flag className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-sm font-medium text-red-600 bg-red-200 px-3 py-1 rounded-full">
                                Flagged
                            </span>
                        </div>

                        <div className="mt-4">
                            <p className="text-gray-600 text-sm font-medium mb-1">Flagged Lessons</p>
                            <p className="text-4xl font-bold text-red-600">
                                {
                                    report?.length || '0'
                                }
                            </p>
                        </div>

                        <div className="mt-4 pt-4 border-t border-red-200">
                            <p className="text-xs text-gray-600">
                                Requires review
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageLessons;