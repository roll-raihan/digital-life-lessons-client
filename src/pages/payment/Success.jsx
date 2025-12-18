import React, { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router';
import { CheckCircle, ArrowRight } from 'lucide-react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useAuth from '../../hooks/useAuth';
import Loading from '../../components/shared/Loading';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';

const Success = () => {

    const [searchParams] = useSearchParams();
    const sessionId = searchParams.get('session_id');
    const axiosSecure = useAxiosSecure();
    const { loading } = useAuth();

    useEffect(() => {
        if (sessionId) {

            axiosSecure.patch(`/payment-success?session_id=${sessionId}`)
                .then(res => {
                    if (res.data.modifiedCount) {
                        Swal.fire({
                            title: "Yahooo!",
                            text: "You are a premium user now.",
                            icon: "success",
                            timer: 3000
                        })
                    } else {
                        console.log('Verification failed:', res.data.error);
                        Swal.fire({
                            title: "Verification Failed",
                            text: res.data.error || "Unable to verify payment",
                            icon: "error"
                        });
                    }
                })
                .catch(err => {
                    console.error('Error Object:', err);
                    console.error('Error Response:', err.response?.data);
                    console.error('Error Status:', err.response?.status);
                    Swal.fire({
                        title: "Error!",
                        text: "Failed to verify payment. Please contact support.",
                        icon: "error"
                    });
                });
        }
    }, [sessionId, axiosSecure]);

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 to-sky-50 p-6">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center"

            >
                <div className="flex justify-center mb-6">
                    <div className="bg-emerald-100 rounded-full p-4">
                        <CheckCircle className="h-12 w-12 text-emerald-600" />
                    </div>
                </div>


                <h1 className="text-2xl font-semibold text-gray-900">
                    Payment Successful 🎉
                </h1>
                <p className="text-gray-600 mt-3">
                    Welcome to <span className="font-medium">Digital Life Premium Lessons</span>.
                    Your upgrade was completed successfully.
                </p>


                <div className="mt-6 rounded-xl bg-emerald-50 p-4 text-sm text-emerald-700">
                    You now have access to premium lessons, ad-free learning, and priority listings.
                </div>


                <Link
                    to="/dashboard"
                    className="mt-8 inline-flex items-center justify-center gap-2 w-full rounded-xl bg-emerald-600 text-white py-3 font-medium hover:bg-emerald-700 transition"
                >
                    Go to Dashboard
                    <ArrowRight className="h-4 w-4" />
                </Link>


                <p className="mt-4 text-xs text-gray-400">
                    A confirmation has been sent to your email.
                </p>
            </motion.div>
        </div>
    );
};

export default Success;