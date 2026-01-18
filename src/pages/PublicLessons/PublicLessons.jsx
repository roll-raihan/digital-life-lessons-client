import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Loading from '../../components/shared/Loading';
import { motion } from "framer-motion";
import { Lock } from "lucide-react";
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router';

const PublicLessons = () => {

    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const [searchText, setSearchText] = useState('');
    const [debouncedSearch, setDebouncedSearch] = useState('');
    const [category, setCategory] = useState('');
    const [emotion, setEmotion] = useState('');


    const { data: userData = [], isLoading: userLoading } = useQuery({
        queryKey: ['isPremium', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/${user?.email}/isPremium`)
            return res.data;
        }
    })

    useEffect(() => {
        const delay = setTimeout(() => {
            setDebouncedSearch(searchText);
        }, 500);

        return () => clearTimeout(delay);
    }, [searchText]);

    const { data: lessons = [], isLoading: lessonLoading } = useQuery({
        queryKey: ['public-lessons', debouncedSearch, category, emotion],
        queryFn: async () => {
            const res = await axiosSecure.get(`/lessons?searchText=${debouncedSearch}&category=${category}&emotion=${emotion}`)
            return res.data;
        }
    })

    if (userLoading || lessonLoading) {
        return <Loading></Loading>
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-10 mt-16">
            <h1 className="text-3xl font-bold mb-8">🌍 Public Life Lessons</h1>

            {/* search field for title */}
            <label className="input mb-5">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                    >
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                    </g>
                </svg>
                <input onChange={(e) => setSearchText(e.target.value)} type="search" placeholder="Search by Title" />
            </label>

            {/* filter option for category and emotion */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">

                {/* Category Filter */}
                <select
                    className="select select-bordered"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="">All Categories</option>
                    <option value="Personal-Growth">Personal Growth</option>
                    <option value="Career">Career</option>
                    <option value="Relationships">Relationships</option>
                    <option value="Mindset">Mindset</option>
                    <option value="Mistakes-Learned">Mistakes Learned</option>
                </select>

                {/* Emotion Filter */}
                <select
                    className="select select-bordered"
                    value={emotion}
                    onChange={(e) => setEmotion(e.target.value)}
                >
                    <option value="">All Emotions</option>
                    <option value="Motivational">Motivational</option>
                    <option value="Sad">Sad</option>
                    <option value="Realization">Realization</option>
                    <option value="Gratitude">Gratitude</option>
                </select>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {lessons.map(lesson => {
                    const isPremiumLocked = lesson.lessonAccess === "premium" && !userData?.isPremium;

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
                                        <Link to='/be-premium' className='btn' variant="secondary" size="sm">Upgrade</Link>
                                    </div>
                                )}


                                <div className={`space-y-3 ${isPremiumLocked ? "blur-sm" : ""}`}>
                                    <h2 className="text-xl font-semibold">{lesson.lessonTitle}</h2>
                                    <p className="text-sm text-muted-foreground line-clamp-2">
                                        {lesson?.lessonDescription}
                                    </p>


                                    <div className="flex flex-wrap gap-2 text-xs">
                                        <span className="px-2 py-1 bg-muted rounded">{lesson?.lessonCategory}</span>
                                        <span className="px-2 py-1 bg-muted rounded">{lesson?.
                                            lessonEmotion}</span>
                                        <span className="px-2 py-1 bg-muted border rounded capitalize">{lesson?.lessonPrivacy}</span>
                                    </div>


                                    <div className="flex items-center gap-3 mt-4">
                                        <img
                                            src={lesson?.creator?.photoURL}
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