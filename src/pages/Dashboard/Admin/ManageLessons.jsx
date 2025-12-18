import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../../components/shared/Loading';
import Swal from 'sweetalert2';

const ManageLessons = () => {

    const axiosSecure = useAxiosSecure();
    const { data: lessons = [], isLoading,refetch } = useQuery({
        queryKey: ['lessons'],
        queryFn: async () => {
            const res = await axiosSecure.get('/lessons')
            return res.data;
        }
    })

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
                            text: "Your file has been featured.",
                            icon: "success"
                        });
                    })
                    .catch(err => {
                        console.log('Error in manage user:', err)
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
                                <button className='btn btn-sm'>
                                    Review
                                </button>
                                <button onClick={() => handleFeature(lesson?._id)} className='btn btn-sm'>
                                    Feature
                                </button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageLessons;