import React from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Loading from '../shared/Loading';

const FeaturedLessons = () => {

    const axiosSecure = useAxiosSecure();
    const { data: lessons = [], isLoading } = useQuery({
        queryKey: ['featured'],
        queryFn: async () => {
            const res = await axiosSecure.get('/lessons')
            return res.data;
        }
    })
    const featuredLessons = lessons.filter(lesson => lesson.isFeatured);

    if (isLoading) return <Loading></Loading>

    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            <h2 className='font-bold text-3xl m-4 text-center'>Featured Lessons</h2>
            <div className="m-10">
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                    {
                        featuredLessons.map((lesson) => (<div className='rounded-2xl p-5 shadow-2xl border' key={lesson._id}>
                            <h3>{lesson.lessonTitle}</h3>
                        </div>))
                    }
                </div>
            </div>
        </div>
    );
};

export default FeaturedLessons;