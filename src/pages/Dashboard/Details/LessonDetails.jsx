import React from 'react';
import { Link, useNavigate, useParams } from 'react-router';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../../components/shared/Loading';
import { Lock, Heart, Bookmark, Flag, Share2, Eye } from 'lucide-react';

// **
// if the lesson is premium and user is not premium. navigate to bePremium **
// **

const LessonDetails = ({ isPremiumLesson = false, isUserPremium = false }) => {

    const { id } = useParams();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    const isLocked = isPremiumLesson && !isUserPremium;

    const { data: lesson = [], isLoading, error } = useQuery({
        queryKey: ['public-lessons', id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/lessons/${id}`);
            return res.data;
        }
    })

    if (isLoading) return <Loading></Loading>;
    if (error) return <p>Failed to load lesson</p>;

    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            {/* ================= Premium Lock Banner ================= */}
            {isLocked && (
                <div className="mb-6 rounded-2xl border border-yellow-300 bg-yellow-50 p-5 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <Lock className="text-yellow-600" />
                        <p className="text-yellow-800 font-medium">
                            This is a <span className="font-semibold">Premium Lesson</span>. Upgrade to unlock full content.
                        </p>
                    </div>
                    <button
                        onClick={() => navigate('/be-premium')}
                        className="px-6 py-2 rounded-xl bg-yellow-600 text-white font-semibold hover:bg-yellow-700 transition"
                    >
                        Upgrade to Premium ⭐
                    </button>
                </div>
            )}

            {/* ================= Main Grid ================= */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* ================= Lesson Content ================= */}
                <div className="lg:col-span-2">
                    {/* Lesson Info */}
                    <div className={`${isLocked ? 'blur-md select-none' : ''}`}>
                        <h1 className="text-3xl font-bold mb-3">{lesson?.lessonTitle || 'Lesson Title'}</h1>

                        <div className="flex flex-wrap gap-3 text-sm text-gray-600 mb-4">
                            <span className="px-3 py-1 bg-gray-100 rounded-full">📂 Category: {lesson?.lessonCategory}</span>
                            <span className="px-3 py-1 bg-gray-100 rounded-full">🎭 Tone: {lesson?.lessonEmotion}</span>
                            <span className="px-3 py-1 bg-gray-100 rounded-full">{lesson?.lessonPrivacy}</span>
                        </div>

                        <p className="text-gray-800 leading-relaxed whitespace-pre-line">
                            {lesson?.lessonDescription}
                        </p>
                    </div>

                    {/* ================= Interaction Buttons ================= */}
                    <div className="mt-8 flex flex-wrap gap-4">
                        <button className="flex items-center gap-2 px-5 py-2 rounded-xl border hover:bg-gray-50">
                            <Heart className="text-red-500" /> Like
                        </button>
                        <button className="flex items-center gap-2 px-5 py-2 rounded-xl border hover:bg-gray-50">
                            <Bookmark /> Save
                        </button>
                        <button className="flex items-center gap-2 px-5 py-2 rounded-xl border hover:bg-gray-50">
                            <Share2 /> Share
                        </button>
                        <button className="flex items-center gap-2 px-5 py-2 rounded-xl border border-red-200 text-red-600 hover:bg-red-50">
                            <Flag /> Report
                        </button>
                    </div>
                </div>

                {/* ================= Sidebar ================= */}
                <div className="space-y-6">
                    {/* Metadata */}
                    <div className="rounded-2xl border p-5">
                        <h3 className="font-semibold mb-4">📌 Lesson Info</h3>
                        <ul className="text-sm text-gray-600 space-y-2">
                            <li>📅 Created: {lesson?.createdDate || '2025-12-12T17:50:34.870Z'}</li>
                            <li>🕒 Updated: {lesson?.updatedDate || '2025-12-17T03:29:59.018Z'}</li>
                        </ul>
                    </div>

                    {/* Author Card */}
                    <div className="rounded-2xl border p-5 text-center">
                        <img
                            src={lesson?.creator?.photoURL || 'https://placehold.co/100'}
                            alt="Author"
                            className="w-20 h-20 rounded-full mx-auto mb-3"
                        />
                        <h4 className="font-semibold">{lesson?.creator?.name || 'Author Name'}</h4>
                        <p className="text-sm text-gray-500 mb-3">2 Lessons Shared</p>
                        <Link className="btn btn-active w-full px-4 py-2 rounded-xl border hover:bg-gray-50">
                            View all lessons
                        </Link>
                    </div>

                    {/* Stats */}
                    <div className="rounded-2xl border p-5">
                        <h3 className="font-semibold mb-4">📊 Engagement</h3>
                        <div className="space-y-2 text-sm">
                            <p className="flex items-center gap-2">❤️ {lesson?.reactions || '1.2K Likes'}</p>
                            <p className="flex items-center gap-2">🔖 {lesson?.saves || '342 Favorites'}</p>
                            <p className="flex items-center gap-2">
                                <Eye size={16} /> {Math.floor(Math.random() * 10000)} Views
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LessonDetails;