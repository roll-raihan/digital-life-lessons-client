import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Loading from '../../../components/shared/Loading';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const ReportedLessons = () => {

    const axiosSecure = useAxiosSecure();
    const { data: reportedLessons = [], isLoading, refetch } = useQuery({
        queryKey: ['reported-lessons'],
        queryFn: async () => {
            const res = await axiosSecure.get('/reported-lessons');
            return res.data;
        }
    });

    const handleDeleteLesson = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                console.log('id:',id)
                axiosSecure.delete(`/reports/${id}`)
                    .then(() => {
                        refetch();
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success",
                            timer: 1500
                        });
                    })
                    .catch(err => {
                        console.log('Error in report lesson delete', err)
                    })
            }
        });
    }

    if (isLoading) return <Loading></Loading>

    return (
        <div className='max-w-7xl mx-auto px-4 py-8'>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
                All Reported Lessons
            </h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Lesson Title</th>
                            <th>Report Count</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reportedLessons.map((item, i) => (
                                <tr key={item.lessonId}>
                                    <th>{i + 1}</th>
                                    <td>{item.lessonTitle}</td>
                                    <td>{item.reportCount}</td>
                                    <td className='flex flex-col gap-2'>
                                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                                        {/* btn for reports view */}
                                        <button
                                            className="btn btn-soft btn-sm btn-info"
                                            onClick={() => document.getElementById(`report_modal_${item.lessonId}`).showModal()}
                                        >
                                            View Reports
                                        </button>

                                        <dialog id={`report_modal_${item.lessonId}`} className="modal modal-bottom sm:modal-middle">
                                            <div className="modal-box">
                                                <h3 className="font-bold text-lg">
                                                    Reports for: {item.lessonTitle}
                                                </h3>

                                                <div className="py-4 space-y-3">
                                                    {item?.reports?.map((report, j) => (
                                                        <div key={j} className="border rounded-lg p-3">
                                                            <p className="font-medium">Reason: {report.reason}</p>
                                                            <p className="text-sm text-gray-500">
                                                                Reporter: {report.reporterEmail || report.reporterUserId}
                                                            </p>
                                                        </div>
                                                    ))}
                                                </div>

                                                <div className="modal-action">
                                                    <form method="dialog">
                                                        <button className="btn">Close</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </dialog>

                                        {/* btn for delete lesson */}
                                        <button onClick={() => handleDeleteLesson(item.lessonId)} className='btn btn-soft btn-sm btn-warning'>Delete Lesson</button>

                                        {/* btn for ignore report */}
                                        <button className='btn btn-soft btn-sm btn-error'>Ignore</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ReportedLessons;