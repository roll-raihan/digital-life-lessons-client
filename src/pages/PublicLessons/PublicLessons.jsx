import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Loading from '../../components/shared/Loading';
import { motion } from "framer-motion";
import { Lock } from "lucide-react";
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router';

const PublicLessons = () => {

    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const isPremiumUser = false;
    const { data: lessons = [], isLoading } = useQuery({
        queryKey: ['public-lessons', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get('/lessons')
            return res.data;
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    // const handleDetails = id => {
    //     console.log(id)
    // }

    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-8">🌍 Public Life Lessons</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {lessons.map(lesson => {
                    const isPremiumLocked = lesson.accessLevel === "premium" && !isPremiumUser;


                    return (
                        <motion.div
                            key={lesson._id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className='border rounded-2xl p-4 shadow-2xl'
                        >
                            <div className="relative card overflow-hidden">
                                {isPremiumLocked && (
                                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-10 flex flex-col items-center justify-center text-white text-center p-4">
                                        <Lock className="w-10 h-10 mb-3" />
                                        <p className="font-semibold">Premium Lesson</p>
                                        <p className="text-sm mb-3">Upgrade to view full content</p>
                                        <button variant="secondary" size="sm">Upgrade</button>
                                    </div>
                                )}


                                <div className={`space-y-3 ${isPremiumLocked ? "blur-sm" : ""}`}>
                                    <h2 className="text-xl font-semibold">{lesson.lessonTitle}</h2>
                                    <p className="text-sm text-muted-foreground line-clamp-2">
                                        {lesson.lessonDescription}
                                    </p>


                                    <div className="flex flex-wrap gap-2 text-xs">
                                        <span className="px-2 py-1 bg-muted rounded">{lesson.lessonCategory}</span>
                                        <span className="px-2 py-1 bg-muted rounded">{lesson.
                                            lessonEmotion}</span>
                                        <span className="px-2 py-1 bg-muted rounded capitalize">{lesson.accessLevel}</span>
                                    </div>


                                    <div className="flex items-center gap-3 mt-4">
                                        <img
                                            src={lesson?.creator?.photo}
                                            alt={lesson?.creator?.name}
                                            className="w-8 h-8 rounded-full"
                                        />
                                        <div className="text-sm">
                                            <p className="font-medium">{lesson.email}</p>
                                            <p className="text-xs text-muted-foreground">
                                                {new Date(lesson.
                                                    createdDate).toLocaleDateString()}
                                            </p>
                                        </div>
                                    </div>


                                    <Link to={`/public-lessons/${lesson._id}`}
                                        // onClick={() => handleDetails(lesson._id)}
                                        className="btn w-full mt-4"
                                        disabled={isPremiumLocked}
                                    >
                                        See Details
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default PublicLessons;