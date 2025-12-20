import React, { useState } from 'react';
import { Link, useParams } from 'react-router';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../../components/shared/Loading';
import { Heart, Bookmark, Flag, Share2, Eye } from 'lucide-react';
import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth';

const LessonDetails = () => {

    const { id } = useParams();
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const [reportIssue, setReportIssue] = useState(false);

    const { data: lesson = [], isLoading, error, refetch } = useQuery({
        queryKey: ['public-lessons', id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/lessons/${id}`);
            return res.data;
        }
    })

    const handleLike = id => {
        axiosSecure.patch(`lessons/${id}/reaction`, { userId: user?.uid })
            .then((res) => {
                if (res.data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        title: res.data.action === 'liked' ? 'Liked ❤️' : 'Disliked 💔',
                        icon: res.data.action === 'liked' ? 'success' : 'info',
                        timer: 1000,
                        showConfirmButton: false
                    });
                }

            }).catch(err => {
                console.log('Error in handle like', err)
            })
    }

    const handleSave = id => {
        axiosSecure.patch(`lessons/${id}/save`, { userEmail: user?.email })
            .then((res) => {
                if (res.data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        title: res.data.action === 'saved' ? 'Saved ❤️' : 'Unsaved 💔',
                        icon: res.data.action === 'saved' ? 'success' : 'info',
                        timer: 1000,
                        showConfirmButton: false
                    });
                }

            }).catch(err => {
                console.log('Error in handle save', err)
            })
    }

    const handleReport = id => {
        Swal.fire({
            title: "Report Reason",
            input: "select",
            icon: "warning",
            inputOptions: {
                "Inappropriate Content": "Inappropriate Content",
                "Hate Speech or Harassment": "Hate Speech or Harassment",
                "Misleading or False Information": "Misleading or False Information",
                "Spam or Promotional Content": "Spam or Promotional Content",
                "Sensitive or Disturbing Content": "Sensitive or Disturbing Content",
                "Other": "Other"
            },
            inputPlaceholder: "Select a reason",
            showCancelButton: true,
            confirmButtonText: "Submit Report",
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            inputValidator: (value) => {
                if (!value) {
                    return "You must select a reason!";
                }
            }
        }).then((result) => {
            if (result.isConfirmed) {
                const reason = result.value;
                const reportData = {
                    lessonId: id,
                    reporterUserId: user?.uid,
                    reporterEmail: user?.email,
                    reason: reason
                };

                axiosSecure.post('/lessons/report', reportData)
                    .then(res => {
                        if (res.data.insertedId) {
                            Swal.fire({
                                title: "Reported!",
                                text: "Thank you. Our team will review this lesson.",
                                icon: "success",
                                timer: 1500,
                                showConfirmButton: false
                            });
                        } else if (res.data.message === 'already-reported') {
                            Swal.fire({
                                title: "Already Reported",
                                text: "You have already reported this lesson.",
                                icon: "info"
                            });
                        }
                    })
                    .catch(err => {
                        console.error(err);
                        Swal.fire({
                            title: "Error",
                            text: "Something went wrong. Try again later.",
                            icon: "error"
                        });
                    });
            }
        });
    }

    if (isLoading) return <Loading></Loading>;
    if (error) return <p>Failed to load lesson</p>;

    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            {/* ================= Main Grid ================= */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* ================= Lesson Content ================= */}
                <div className="lg:col-span-2">
                    {/* Lesson Info */}
                    <div className=''>
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
                        <button onClick={() => handleLike(lesson._id)} className="flex items-center gap-2 px-5 py-2 rounded-xl border hover:bg-gray-50">
                            <Heart className="text-red-500" /> Like
                        </button>
                        <button onClick={() => handleSave(lesson._id)} className="flex items-center gap-2 px-5 py-2 rounded-xl border hover:bg-gray-50">
                            <Bookmark /> Save
                        </button>
                        <button className="flex items-center gap-2 px-5 py-2 rounded-xl border hover:bg-gray-50">
                            <Share2 /> Share
                        </button>
                        <button onClick={() => handleReport(lesson._id)} className="flex items-center gap-2 px-5 py-2 rounded-xl border border-red-200 text-red-600 hover:bg-red-50">
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
                            <p className="flex items-center gap-2">❤️ {lesson?.reactions || '0'}</p>
                            <p className="flex items-center gap-2">🔖 {lesson?.saves || '0'}</p>
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