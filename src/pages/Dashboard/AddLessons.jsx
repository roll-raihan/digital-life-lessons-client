import React, { useState } from 'react';
import { Camera, X, AlertCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { Link } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../components/shared/Loading';
import Lottie from 'lottie-react';

const AddLesson = () => {

    const axiosSecure = useAxiosSecure();
    const {
        register,
        handleSubmit,
        reset,
        // formState: { errors }
    } = useForm();
    const { user } = useAuth();
    const [showSuccess, setShowSuccess] = useState(false);

    const { data: userData = [], isLoading } = useQuery({
        queryKey: ['isPremium', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/${user?.email}/isPremium`)
            return res.data;
        }
    })

    const successAnimation = {
        "v": "5.7.4",
        "fr": 60,
        "ip": 0,
        "op": 90,
        "w": 500,
        "h": 500,
        "nm": "Success",
        "ddd": 0,
        "assets": [],
        "layers": [
            {
                "ddd": 0,
                "ind": 1,
                "ty": 4,
                "nm": "checkmark",
                "sr": 1,
                "ks": {
                    "o": { "a": 0, "k": 100 },
                    "r": { "a": 0, "k": 0 },
                    "p": { "a": 0, "k": [250, 250, 0] },
                    "a": { "a": 0, "k": [0, 0, 0] },
                    "s": {
                        "a": 1,
                        "k": [
                            { "i": { "x": [0.833], "y": [0.833] }, "o": { "x": [0.167], "y": [0.167] }, "t": 0, "s": [0, 0, 100] },
                            { "t": 30, "s": [120, 120, 100] }
                        ]
                    }
                },
                "ao": 0,
                "shapes": [
                    {
                        "ty": "gr",
                        "it": [
                            {
                                "ind": 0,
                                "ty": "sh",
                                "ks": {
                                    "a": 0,
                                    "k": {
                                        "i": [[0, 0], [0, 0], [0, 0]],
                                        "o": [[0, 0], [0, 0], [0, 0]],
                                        "v": [[-50, 0], [-20, 30], [50, -40]],
                                        "c": false
                                    }
                                }
                            },
                            {
                                "ty": "st",
                                "c": { "a": 0, "k": [0.2, 0.8, 0.4, 1] },
                                "o": { "a": 0, "k": 100 },
                                "w": { "a": 0, "k": 12 },
                                "lc": 2,
                                "lj": 2
                            },
                            {
                                "ty": "tr",
                                "p": { "a": 0, "k": [0, 0] },
                                "a": { "a": 0, "k": [0, 0] },
                                "s": { "a": 0, "k": [100, 100] },
                                "r": { "a": 0, "k": 0 },
                                "o": { "a": 0, "k": 100 }
                            }
                        ]
                    },
                    {
                        "ty": "gr",
                        "it": [
                            {
                                "ty": "el",
                                "p": { "a": 0, "k": [0, 0] },
                                "s": { "a": 0, "k": [160, 160] }
                            },
                            {
                                "ty": "st",
                                "c": { "a": 0, "k": [0.2, 0.8, 0.4, 1] },
                                "o": { "a": 0, "k": 100 },
                                "w": { "a": 0, "k": 8 },
                                "lc": 2,
                                "lj": 2
                            },
                            {
                                "ty": "tr",
                                "p": { "a": 0, "k": [0, 0] },
                                "a": { "a": 0, "k": [0, 0] },
                                "s": { "a": 0, "k": [100, 100] },
                                "r": { "a": 0, "k": 0 },
                                "o": { "a": 0, "k": 100 }
                            }
                        ]
                    }
                ],
                "ip": 0,
                "op": 90,
                "st": 0
            }
        ]
    };

    if (isLoading) return <Loading></Loading>

    const handleAddLessons = (data) => {
        // console.log(data);
        Swal.fire({
            title: "Are you sure?",
            text: "You want to add this lesson !",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, add!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.post('/lessons', data)
                    .then(res => {
                        console.log('after saving premium', res.data);

                        // Show Lottie animation
                        setShowSuccess(true);

                        // Reset form after 2 seconds
                        setTimeout(() => {
                            setShowSuccess(false);
                            reset();
                        }, 2500);

                    })
                    .catch(err => {
                        console.log('Error: ', err);
                        Swal.fire({
                            title: "Error!",
                            text: "Failed to add lesson. Please try again.",
                            icon: "error"
                        });
                    })

                // Swal.fire({
                //     title: "Yahooo!",
                //     text: "Your lesson successfully added.",
                //     icon: "success"
                // });

            }
        });
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8 px-4">

            {/* Success Animation Overlay (lottie) */}
            {showSuccess && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
                    <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-md mx-4 text-center">
                        <Lottie
                            animationData={successAnimation}
                            loop={false}
                            style={{ width: 200, height: 200, margin: '0 auto' }}
                        />
                        <h2 className="text-2xl font-bold text-slate-900 mt-4">Lesson Added Successfully!</h2>
                        <p className="text-slate-600 mt-2">Your life lesson has been shared with the community.</p>
                    </div>
                </div>
            )}

            <div className="max-w-3xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-slate-900 mb-2">Create New Lesson</h1>
                    <p className="text-slate-600">Share your life experiences and insights with others</p>
                </div>

                {/* Form Card */}
                <form onSubmit={handleSubmit(handleAddLessons)} className="bg-white rounded-xl shadow-lg p-8">
                    <div className="space-y-6">
                        {/* email */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                Your Email <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                name="title" {...register('email', { required: true })}
                                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" disabled
                                value={`${user?.email}`}
                            />
                        </div>

                        {/* Lesson Title */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                Lesson Title <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="email" {...register('lessonTitle')}
                                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                placeholder="Enter a compelling title for your lesson"
                            />
                        </div>

                        {/* Description */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                Full Description / Story / Insight <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                name="description"
                                rows="8" {...register('lessonDescription', { required: true })}
                                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                                placeholder="Share your experience, what you learned, and how it impacted you..."
                            />
                        </div>

                        {/* Category Dropdown */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                Category <span className="text-red-500">*</span>
                            </label>
                            <select
                                name="category" {...register('lessonCategory', { required: true })}
                                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white cursor-pointer"
                            >
                                <option value="">Select a category</option>
                                <option value="personal-growth">Personal Growth</option>
                                <option value="career">Career</option>
                                <option value="relationships">Relationships</option>
                                <option value="mindset">Mindset</option>
                                <option value="mistakes-learned">Mistakes Learned</option>
                            </select>
                        </div>

                        {/* Emotional Tone Dropdown */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                Emotional Tone <span className="text-red-500">*</span>
                            </label>
                            <select
                                name="emotionalTone" {...register('lessonEmotion', { required: true })}
                                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white cursor-pointer"
                            >
                                <option value="">Select emotional tone</option>
                                <option value="motivational">Motivational</option>
                                <option value="sad">Sad</option>
                                <option value="realization">Realization</option>
                                <option value="gratitude">Gratitude</option>
                            </select>
                        </div>

                        {/* Image Upload */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                Image (Optional)
                            </label>

                            {/* Upload Area - Show this by default */}
                            <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-slate-300 rounded-lg cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-all">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <Camera className="w-12 h-12 text-slate-400 mb-3" />
                                    <p className="mb-2 text-sm text-slate-600">
                                        <span className="font-semibold">Click to upload</span> or drag and drop
                                    </p>
                                    <p className="text-xs text-slate-500">PNG, JPG or WEBP (MAX. 5MB)</p>
                                </div>
                                <input
                                    type="file"
                                    className="hidden"
                                    accept="image/*"
                                />
                            </label>

                            {/* Image Preview - Show this when image is uploaded */}
                            {/* <div className="relative w-full h-48 rounded-lg overflow-hidden border-2 border-slate-300">
                                <img
                                    src="img_url"
                                    alt="Preview"
                                    className="w-full h-full object-cover"
                                />
                                <button
                                    type="button"
                                    className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors shadow-lg"
                                >
                                    <X size={16} />
                                </button>
                            </div> */}

                        </div>

                        {/* Privacy Dropdown */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                Privacy <span className="text-red-500">*</span>
                            </label>
                            <select
                                name="privacy" {...register('lessonPrivacy', { required: true })}
                                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white cursor-pointer"
                            >
                                {
                                    userData?.isPremium === true ? <>
                                        <option value="public">Public - Anyone can see this lesson</option>
                                        <option value="private">Private - Only you can see this lesson</option>
                                    </> : <option value="public">Public - Anyone can see this lesson</option>
                                }
                            </select>
                        </div>

                        {/* Access Level Dropdown */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                Access Level <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <select
                                    name="accessLevel" {...register('lessonAccess')}

                                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white cursor-not-allowed opacity-60"
                                >
                                    {
                                        userData?.isPremium === true ? <>
                                            <option value="free">Free - Available to all users</option>
                                            <option value="premium">Premium - Only for premium members</option>
                                        </> : <option value="free">Free - Available to all users</option>
                                    }

                                </select>

                                {/* Tooltip on hover */}
                                {
                                    userData?.isPremium === false &&
                                    <div className="absolute inset-0 cursor-not-allowed group">
                                        <div className="absolute bottom-full left-0 mb-2 hidden group-hover:block w-full">
                                            <div className="bg-slate-900 text-white text-xs rounded-lg py-2 px-3 shadow-lg">
                                                Upgrade to Premium to create paid lessons
                                                <div className="absolute top-full left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900"></div>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>

                            {/* Warning message for free users */}
                            <p className="mt-2 text-sm text-amber-600 flex items-center gap-1">
                                <AlertCircle size={14} />
                                Upgrade to Premium to unlock paid lesson creation. <Link to='/be-premium' className='underline font-bold text-blue-600'>Be Premium now</Link>
                            </p>
                        </div>

                        {/* Submit Buttons */}
                        <div className="flex gap-4 pt-4">
                            <button
                                type="button"
                                className="flex-1 px-6 py-3 btn text-slate-700 rounded-lg font-semibold hover:bg-slate-100 hover:shadow-xl transition-all"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="flex-1 px-6 py-3 btn btn-primary text-white rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl"
                            >
                                Create Lesson
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddLesson;