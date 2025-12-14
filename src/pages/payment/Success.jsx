import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { CheckCircle, ArrowRight } from 'lucide-react';

const Success = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 to-sky-50 p-6">
            <motion
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
            </motion>
        </div>
    );
};

export default Success;