import React from 'react';
import { useParams } from 'react-router';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../components/shared/Loading';

const MyLessonsDetails = () => {

    const { id } = useParams();
    const axiosSecure = useAxiosSecure();

    const { data: lesson = [], isLoading, error } = useQuery({
        queryKey: ['lessons', id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/lessons/${id}`);
            return res.data;
        }
    })

    if (isLoading) return <Loading></Loading>;
    if (error) return <p>Failed to load lesson</p>;

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">{lesson?.lessonTitle}</h1>
            <p className="text-slate-600 mb-6"><span className='font-bold'>Description & Experience:</span> {lesson?.lessonDescription}</p>
            <p className="text-slate-600 mb-6"><span className='font-bold'>Category:</span> {lesson?.lessonCategory}</p>
            <p className="text-slate-600 mb-6"><span className='font-bold'>Emotional tone:</span> {lesson?.lessonEmotion}</p>
            <p className="text-slate-600 mb-6"><span className='font-bold'>Privacy:</span> {lesson?.lessonPrivacy}</p>
            <p className="text-slate-600 mb-6"><span className='font-bold'>Created Date:</span> {lesson?.createdDate}</p>

            <div className="flex gap-4 text-sm text-slate-500 mb-6">
                <span>❤️ {lesson?.reactions}</span>
                <span>🔖 {lesson?.saves}</span>
            </div>
        </div>
    );
};

export default MyLessonsDetails;