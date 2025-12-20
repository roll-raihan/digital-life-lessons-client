import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../../components/shared/Loading';
import Swal from 'sweetalert2';

const ManageLessons = () => {

    const axiosSecure = useAxiosSecure();
    const { data: lessons = [], isLoading, refetch } = useQuery({
        queryKey: ['lessons'],
        queryFn: async () => {
            const res = await axiosSecure.get('/lessons')
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

    if (isLoading) return <Loading></Loading>

    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            <h2 className='font-bold text-3xl m-4'>Manage Lessons</h2>
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
    );
};

export default ManageLessons;