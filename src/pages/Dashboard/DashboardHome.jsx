import React from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../hooks/useAuth';
import Loading from '../../components/shared/Loading';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';
import { Link } from 'react-router';

const DashboardHome = () => {

    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    const { data: lessons = [], isLoading } = useQuery({
        queryKey: ['dashboard-stats', user?.email],
        enabled: !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(`/lessons/user/public?email=${user?.email}`);
            return res.data.data;
        },
    });

    const chartData = Object.values(
        lessons.reduce((acc, lesson) => {
            const date = new Date(lesson.createdDate).toLocaleDateString();

            if (!acc[date]) {
                acc[date] = { date, count: 0 };
            }

            acc[date].count += 1;
            return acc;
        }, {})
    );

    if (isLoading) return <Loading />;

    return (
        <div className='space-y-8'>
            <div className='card m-10 border border-gray-400 p-10'>
                <h3 className='font-bold'>Total Lesson Created: {lessons?.length || '0'}</h3>
                <h3 className='font-bold'>Total Lesson saved: {lessons.saves || '0'}</h3>
            </div>
            <div className='m-5'>
                <h3 className='font-bold text-center'>Recently Added Lessons:</h3>
                <div>
                    {
                        lessons.length === 0 ?
                            (
                                <p className="text-gray-500">No lessons yet.</p>
                            ) : (
                                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                                    {
                                        lessons.map((lesson) => (
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
                                        ))
                                    }
                                </div>
                            )
                    }
                </div>
            </div>
            <div className="min-h-[250px] w-full">
                <ResponsiveContainer width="100%" aspect={3}>
                    <LineChart data={chartData}>
                        <XAxis dataKey="date" />
                        <YAxis allowDecimals={false} />
                        <Tooltip />
                        <Line type="monotone" dataKey="count" strokeWidth={3} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow">
                <h2 className="text-lg font-semibold mb-4 text-center">
                    Quick Actions
                </h2>
                <div className="flex flex-wrap gap-4 justify-center m-5">
                    <Link to='/dashboard/add-lessons' className='btn btn-primary text-white'>Add Lesson</Link>
                    <Link to='/dashboard/my-lessons' className='btn btn-secondary text-white'>My Lessons</Link>
                    <Link to='/dashboard/my-favorites' className='btn btn-info text-white'>Saved Lessons</Link>
                    <Link to='/public-lessons' className='btn btn-accent text-white'>Public Lessons</Link>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;