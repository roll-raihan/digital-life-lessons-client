import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../../components/shared/Loading';

const AdminDashboardHome = () => {

    const axiosSecure = useAxiosSecure();
    const { data: userData = [], isLoading: userLoading } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data;
        }
    })

    const { data: lessons = [], isLoading: lessonsLoading } = useQuery({
        queryKey: ["public-lessons"],
        queryFn: async () => {
            const res = await axiosSecure.get('/lessons')
            return res.data;
        },
    });

    const { data: report = [], isLoading: reportLoading } = useQuery({
        queryKey: ['report-lesson'],
        queryFn: async () => {
            const res = await axiosSecure.get('/reports');
            return res.data;
        }
    })

    const { data: newLessons = [], isLoading: newLessonsLoading } = useQuery({
        queryKey: ["new-lessons"],
        queryFn: async () => {
            const res = await axiosSecure.get('/lessons/new');
            return res.data;
        },
    });

    const filterPublicLesson = lessons.filter(lesson => lesson?.lessonPrivacy === 'public')

    if (userLoading || lessonsLoading || reportLoading || newLessonsLoading) return <Loading></Loading>

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <div className='border rounded-2xl p-10 m-5'>
                <h3 className='font-semibold text-2xl mb-2'>Total Users: <span className='italic font-bold'>{userData?.length || '0'}</span></h3>
                <h3 className='font-semibold text-2xl mb-2'>Total Public Lesson: <span className='italic font-bold'>{filterPublicLesson?.length || '0'}</span></h3>
                <h3 className='font-semibold text-2xl mb-2'>Total Flagged Lesson: <span className='italic font-bold'>{report?.length || '0'}</span></h3>

                {/* <h3 className='font-semibold text-2xl mb-2'>Most Active Contributor: <span className='italic font-bold'>{userData?.length || '0'}</span></h3> */}

            </div>
            <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    Today's New Lessons
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        newLessons.map((lesson) =>
                            <div key={lesson?._id}
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
                                        {lesson?.lessonPrivacy}
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default AdminDashboardHome;