import { Book, Heart, Lock, Star, BarChart3, Gift } from "lucide-react";

const Features = () => {
    const features = [
        {
            id: 1,
            plan: "Free",
            icon: <Book className="text-4xl" />,
            title: "5 Lessons Per Month",
            description: "Create and share up to 5 life lessons each month to document your personal growth journey.",
            color: "from-gray-500 to-slate-600",
            iconBg: "bg-gray-100"
        },
        {
            id: 2,
            plan: "Free",
            icon: <Heart className="text-4xl" />,
            title: "Access Free Public Lessons",
            description: "Browse and learn from thousands of free public lessons shared by the community.",
            color: "from-gray-500 to-slate-600",
            iconBg: "bg-gray-100"
        },
        {
            id: 3,
            plan: "Free",
            icon: <BarChart3 className="text-4xl" />,
            title: "Basic Analytics",
            description: "Track your lesson views, likes, and favorites with essential analytics tools.",
            color: "from-gray-500 to-slate-600",
            iconBg: "bg-gray-100"
        },
        {
            id: 4,
            plan: "Premium",
            icon: <Star className="text-4xl" />,
            title: "Unlimited Lessons",
            description: "Create unlimited life lessons without any monthly restrictions. Share your wisdom freely.",
            color: "from-amber-500 to-yellow-500",
            iconBg: "bg-amber-100"
        },
        {
            id: 5,
            plan: "Premium",
            icon: <Lock className="text-4xl" />,
            title: "Create Premium Lessons",
            description: "Monetize your expertise by creating exclusive premium lessons accessible only to premium members.",
            color: "from-amber-500 to-yellow-500",
            iconBg: "bg-amber-100"
        },
        {
            id: 6,
            plan: "Premium",
            icon: <Gift className="text-4xl" />,
            title: "Ad-Free Experience",
            description: "Enjoy a clean, distraction-free interface without any advertisements while browsing lessons.",
            color: "from-amber-500 to-yellow-500",
            iconBg: "bg-amber-100"
        }
    ];

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Choose Your Plan
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Start with our free plan and upgrade anytime to unlock premium features and unlimited potential.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature) => (
                        <div
                            key={feature.id}
                            className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:scale-105"
                        >
                            {feature.plan === "Premium" && (
                                <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                                    PREMIUM ⭐
                                </div>
                            )}

                            <div className={`h-1.5 bg-gradient-to-r ${feature.color}`}></div>

                            <div className="p-6">
                                <div className={`w-16 h-16 ${feature.iconBg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    <div className="text-gray-700">
                                        {feature.icon}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {feature.title}
                                </h3>

                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>

                            <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-gray-700 text-lg mb-4">
                        Upgrade to Premium for just <span className="font-bold text-amber-600">৳1500</span> - Lifetime Access!
                    </p>
                    <p className="text-gray-500 text-sm">
                        One-time payment. No recurring fees. Unlock all premium features forever.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Features;