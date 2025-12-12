import React from 'react';
import { Check, X, Crown, Sparkles, Zap, Star } from 'lucide-react';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';

const BePremium = () => {

    const { user } = useAuth();
    const handlePayment = () => {
        const cost = 1500;
        console.log(cost);
        Swal.fire({
            title: "Are you sure?",
            text: "You will be charged 1500Tk !",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, continue!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Yahooo!",
                    text: "You are a premium user now.",
                    icon: "success"
                });
            }
        });
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">

            <div className="flex items-center gap-4">
                {user?.isPremium && (
                    <div className="flex items-center gap-2 bg-gradient-to-r from-amber-400 to-yellow-500 text-white px-4 py-2 rounded-full font-semibold">
                        <Crown className="w-4 h-4" />
                        Premium ⭐
                    </div>
                )}
                <button className="text-gray-600 hover:text-gray-900">Profile</button>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                        <Sparkles className="w-4 h-4" />
                        Unlock Premium Features
                    </div>
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">
                        Choose Your Plan
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Get lifetime access to all premium features with a one-time payment
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
                    {/* Free Plan */}
                    <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 p-8 hover:shadow-xl transition-shadow">
                        <div className="text-center mb-6">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Free</h3>
                            <div className="text-4xl font-bold text-gray-900 mb-2">৳0</div>
                            <p className="text-gray-600">Forever free</p>
                        </div>

                        <ul className="space-y-4 mb-8">
                            <li className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                                    <Check className="w-3 h-3 text-green-600" />
                                </div>
                                <span className="text-gray-700">Up to 5 lessons</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                                    <Check className="w-3 h-3 text-green-600" />
                                </div>
                                <span className="text-gray-700">Basic lesson creation</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                                    <X className="w-3 h-3 text-red-600" />
                                </div>
                                <span className="text-gray-400">Contains advertisements</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                                    <X className="w-3 h-3 text-red-600" />
                                </div>
                                <span className="text-gray-400">Standard listing position</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                                    <X className="w-3 h-3 text-red-600" />
                                </div>
                                <span className="text-gray-400">Limited analytics</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                                    <X className="w-3 h-3 text-red-600" />
                                </div>
                                <span className="text-gray-400">No priority support</span>
                            </li>
                        </ul>

                        <button
                            disabled
                            className="w-full py-3 px-6 rounded-lg bg-gray-100 text-gray-400 font-semibold cursor-not-allowed"
                        >
                            Current Plan
                        </button>
                    </div>

                    {/* Premium Plan */}
                    <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl shadow-2xl border-2 border-indigo-400 p-8 relative transform hover:scale-105 transition-transform">
                        {/* Popular Badge */}
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                            <div className="bg-gradient-to-r from-amber-400 to-yellow-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                                <Star className="w-4 h-4" />
                                MOST POPULAR
                            </div>
                        </div>

                        <div className="text-center mb-6">
                            <h3 className="text-2xl font-bold text-white mb-2 flex items-center justify-center gap-2">
                                <Crown className="w-6 h-6" />
                                Premium
                            </h3>
                            <div className="text-5xl font-bold text-white mb-2">৳1500</div>
                            <p className="text-indigo-100">One-time payment • Lifetime access</p>
                        </div>

                        <ul className="space-y-4 mb-8">
                            <li className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-white flex items-center justify-center mt-0.5">
                                    <Check className="w-3 h-3 text-indigo-600" />
                                </div>
                                <span className="text-white font-medium">Unlimited lessons</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-white flex items-center justify-center mt-0.5">
                                    <Check className="w-3 h-3 text-indigo-600" />
                                </div>
                                <span className="text-white font-medium">Advanced lesson creation tools</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-white flex items-center justify-center mt-0.5">
                                    <Check className="w-3 h-3 text-indigo-600" />
                                </div>
                                <span className="text-white font-medium">100% Ad-free experience</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-white flex items-center justify-center mt-0.5">
                                    <Check className="w-3 h-3 text-indigo-600" />
                                </div>
                                <span className="text-white font-medium">Priority listing & featured badge</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-white flex items-center justify-center mt-0.5">
                                    <Check className="w-3 h-3 text-indigo-600" />
                                </div>
                                <span className="text-white font-medium">Detailed analytics & insights</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-white flex items-center justify-center mt-0.5">
                                    <Check className="w-3 h-3 text-indigo-600" />
                                </div>
                                <span className="text-white font-medium">Priority customer support</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-white flex items-center justify-center mt-0.5">
                                    <Check className="w-3 h-3 text-indigo-600" />
                                </div>
                                <span className="text-white font-medium">Early access to new features</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-white flex items-center justify-center mt-0.5">
                                    <Check className="w-3 h-3 text-indigo-600" />
                                </div>
                                <span className="text-white font-medium">Custom branding options</span>
                            </li>
                        </ul>

                        <button onClick={handlePayment} className="w-full py-4 px-6 rounded-lg bg-white text-indigo-600 font-bold text-lg hover:bg-indigo-50 transition-colors shadow-lg flex items-center justify-center gap-2">
                            <Zap className="w-5 h-5" />
                            Upgrade to Premium
                        </button>
                    </div>
                </div>

                {/* Features Comparison Table */}
                <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                        Detailed Feature Comparison
                    </h2>

                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b-2 border-gray-200">
                                    <th className="text-left py-4 px-4 text-gray-700 font-semibold">Feature</th>
                                    <th className="text-center py-4 px-4 text-gray-700 font-semibold">Free</th>
                                    <th className="text-center py-4 px-4 text-indigo-600 font-semibold">Premium</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-gray-100 hover:bg-gray-50">
                                    <td className="py-4 px-4 text-gray-800">Number of Lessons</td>
                                    <td className="py-4 px-4 text-center text-gray-600">Up to 5</td>
                                    <td className="py-4 px-4 text-center text-indigo-600 font-semibold">Unlimited</td>
                                </tr>
                                <tr className="border-b border-gray-100 hover:bg-gray-50">
                                    <td className="py-4 px-4 text-gray-800">Lesson Creation</td>
                                    <td className="py-4 px-4 text-center text-gray-600">Basic</td>
                                    <td className="py-4 px-4 text-center text-indigo-600 font-semibold">Advanced Tools</td>
                                </tr>
                                <tr className="border-b border-gray-100 hover:bg-gray-50">
                                    <td className="py-4 px-4 text-gray-800">Advertisements</td>
                                    <td className="py-4 px-4 text-center">
                                        <X className="w-5 h-5 text-red-500 mx-auto" />
                                    </td>
                                    <td className="py-4 px-4 text-center">
                                        <Check className="w-5 h-5 text-green-500 mx-auto" />
                                    </td>
                                </tr>
                                <tr className="border-b border-gray-100 hover:bg-gray-50">
                                    <td className="py-4 px-4 text-gray-800">Priority Listing</td>
                                    <td className="py-4 px-4 text-center">
                                        <X className="w-5 h-5 text-red-500 mx-auto" />
                                    </td>
                                    <td className="py-4 px-4 text-center">
                                        <Check className="w-5 h-5 text-green-500 mx-auto" />
                                    </td>
                                </tr>
                                <tr className="border-b border-gray-100 hover:bg-gray-50">
                                    <td className="py-4 px-4 text-gray-800">Analytics & Insights</td>
                                    <td className="py-4 px-4 text-center text-gray-600">Limited</td>
                                    <td className="py-4 px-4 text-center text-indigo-600 font-semibold">Detailed</td>
                                </tr>
                                <tr className="border-b border-gray-100 hover:bg-gray-50">
                                    <td className="py-4 px-4 text-gray-800">Customer Support</td>
                                    <td className="py-4 px-4 text-center text-gray-600">Standard</td>
                                    <td className="py-4 px-4 text-center text-indigo-600 font-semibold">Priority</td>
                                </tr>
                                <tr className="border-b border-gray-100 hover:bg-gray-50">
                                    <td className="py-4 px-4 text-gray-800">Early Feature Access</td>
                                    <td className="py-4 px-4 text-center">
                                        <X className="w-5 h-5 text-red-500 mx-auto" />
                                    </td>
                                    <td className="py-4 px-4 text-center">
                                        <Check className="w-5 h-5 text-green-500 mx-auto" />
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="py-4 px-4 text-gray-800">Custom Branding</td>
                                    <td className="py-4 px-4 text-center">
                                        <X className="w-5 h-5 text-red-500 mx-auto" />
                                    </td>
                                    <td className="py-4 px-4 text-center">
                                        <Check className="w-5 h-5 text-green-500 mx-auto" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Trust Indicators */}
                <div className="mt-12 text-center">
                    <p className="text-gray-600 mb-4">
                        🔒 Secure payment powered by Stripe • 💯 Lifetime access • ⚡ Instant activation
                    </p>
                    <p className="text-sm text-gray-500">
                        Questions? Contact our support team at support@digitallifelessons.com
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BePremium;