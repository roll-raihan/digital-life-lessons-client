import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Loading from '../../../components/shared/Loading';
import { useQuery } from '@tanstack/react-query';

const ReportedLessons = () => {

    const axiosSecure = useAxiosSecure();
    const { data: reportedLessons = [], isLoading } = useQuery({
        queryKey: ['reported-lessons'],
        queryFn: async () => {
            const res = await axiosSecure.get('/reported-lessons');
            console.log('reported lessons',reportedLessons);
            return res.data;
        }
    });


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
                                    <td>
                                        <button>View Reports</button>
                                        <button>Delete Lesson</button>
                                        <button>Ignore</button>
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