import React from 'react';
import { XCircle, RefreshCcw, Home } from 'lucide-react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';

const Cancel = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 to-amber-50 p-6">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center"
            >
                <div className="flex justify-center mb-6">
                    <div className="bg-rose-100 rounded-full p-4">
                        <XCircle className="h-12 w-12 text-rose-600" />
                    </div>
                </div>


                <h1 className="text-2xl font-semibold text-gray-900">
                    Payment Cancelled
                </h1>
                <p className="text-gray-600 mt-3">
                    Your payment was not completed. No charges were made.
                </p>


                <div className="mt-6 rounded-xl bg-rose-50 p-4 text-sm text-rose-700">
                    If this was a mistake, you can retry the upgrade at any time.
                </div>


                <div className="mt-8 flex flex-col gap-3">
                    <Link
                        to="/be-premium"
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-rose-600 text-white py-3 font-medium hover:bg-rose-700 transition"
                    >
                        <RefreshCcw className="h-4 w-4" />
                        Try Again
                    </Link>


                    <Link
                        to="/"
                        className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 py-3 text-gray-700 hover:bg-gray-50 transition"
                    >
                        <Home className="h-4 w-4" />
                        Back to Home
                    </Link>
                </div>


                <p className="mt-4 text-xs text-gray-400">
                    Need help? Contact support anytime.
                </p>
            </motion.div>
        </div>
    );
};

export default Cancel;