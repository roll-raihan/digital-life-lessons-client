import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../../components/shared/Loading';
// import useAuth from '../../../hooks/useAuth';

const AdminDashboardHome = () => {

    // const { user } = useAuth();
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

    const filterPublicLesson = lessons.filter(lesson => lesson?.lessonPrivacy === 'public')

    if (userLoading || lessonsLoading || reportLoading) return <Loading></Loading>

    return (
        <div className='card border rounded-2xl p-10 m-10'>
            <h3 className='font-semibold text-2xl mb-2'>Total Users: <span className='italic font-bold'>{userData?.length || '0'}</span></h3>
            <h3 className='font-semibold text-2xl mb-2'>Total Public Lesson: <span className='italic font-bold'>{filterPublicLesson?.length || '0'}</span></h3>
            <h3 className='font-semibold text-2xl mb-2'>Total Flagged Lesson: <span className='italic font-bold'>{report?.length || '0'}</span></h3>
            <h3 className='font-semibold text-2xl mb-2'>Most Active Contributor: <span className='italic font-bold'>{userData?.length || '0'}</span></h3>
        </div>
    );
};

export default AdminDashboardHome;