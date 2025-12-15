import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { X } from 'lucide-react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useAuth from '../../hooks/useAuth';
import Loading from '../../components/shared/Loading';

const EditLessonModal = ({ lessonId, onClose, refetch }) => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    // TODO: replace with real premium check
    const isPremiumUser = true;

    const { data: lesson, isLoading } = useQuery({
        queryKey: ['lesson', lessonId],
        enabled: !!lessonId,
        queryFn: async () => {
            const res = await axiosSecure.get(`/lessons/${lessonId}`);
            return res.data;
        }
    });

    const [formData, setFormData] = useState({
        lessonTitle: '',
        description: '',
        lessonPrivacy: 'private',
        accessLevel: 'free'
    });

    useEffect(() => {
        if (lesson) {
            setFormData({
                lessonTitle: lesson.lessonTitle || '',
                description: lesson.description || '',
                lessonPrivacy: lesson.lessonPrivacy || 'private',
                accessLevel: lesson.accessLevel || 'free'
            });
        }
    }, [lesson]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axiosSecure.patch(`/lessons/${lessonId}`, formData);

            Swal.fire({
                icon: 'success',
                title: 'Lesson Updated',
                timer: 1500,
                showConfirmButton: false
            });

            refetch();
            onClose();
        } catch (err) {
            console.error(err);
            Swal.fire('Error', 'Failed to update lesson', 'error');
        }
    };

    if (isLoading) {
        return <Loading></Loading>;
    }

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white w-full max-w-2xl rounded-xl shadow-lg relative">

                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b">
                    <h2 className="text-xl font-semibold text-slate-800">
                        Edit Lesson
                    </h2>
                    <button onClick={onClose} className="text-slate-500 hover:text-red-500">
                        <X />
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-6 space-y-4">

                    {/* Read-only user info */}
                    <div className="grid grid-cols-2 gap-4">
                        <input
                            value={lesson.userName}
                            disabled
                            className="input input-bordered w-full bg-slate-100"
                        />
                        <input
                            value={lesson.email}
                            disabled
                            className="input input-bordered w-full bg-slate-100"
                        />
                    </div>

                    {/* Title */}
                    <div>
                        <label className="label">Lesson Title</label>
                        <input
                            name="lessonTitle"
                            value={formData.lessonTitle}
                            onChange={handleChange}
                            required
                            className="input input-bordered w-full"
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="label">Description</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            className="textarea textarea-bordered w-full"
                        />
                    </div>

                    {/* Privacy + Access */}
                    <div className="grid grid-cols-2 gap-4">

                        {/* Visibility */}
                        <div>
                            <label className="label">Visibility</label>
                            <select
                                name="lessonPrivacy"
                                value={formData.lessonPrivacy}
                                onChange={handleChange}
                                className="select select-bordered w-full"
                            >
                                <option value="public">Public</option>
                                <option value="private">Private</option>
                            </select>
                        </div>

                        {/* Access Level */}
                        <div>
                            <label className="label">Access Level</label>
                            <select
                                name="accessLevel"
                                value={formData.accessLevel}
                                onChange={handleChange}
                                disabled={!isPremiumUser}
                                className={`select select-bordered w-full ${!isPremiumUser ? 'opacity-50 cursor-not-allowed' : ''
                                    }`}
                            >
                                <option value="free">Free</option>
                                <option value="premium">Premium</option>
                            </select>

                            {!isPremiumUser && (
                                <p className="text-xs text-red-500 mt-1">
                                    Upgrade to Premium to change access level
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex justify-end gap-3 pt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="btn btn-outline"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="btn bg-blue-600 text-white hover:bg-blue-700"
                        >
                            Update Lesson
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default EditLessonModal;
