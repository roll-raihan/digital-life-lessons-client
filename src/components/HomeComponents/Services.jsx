import { BookOpen, Users, TrendingUp, Shield, MessageCircle, Bookmark } from "lucide-react";
import { Link } from "react-router";

const Services = () => {
    const services = [
        {
            id: 1,
            icon: <BookOpen className="w-8 h-8" />,
            title: "Create & Share Lessons",
            description: "Document your valuable life experiences and insights. Share your wisdom with the world or keep it private for personal reflection.",
            color: "from-violet-500 to-purple-600",
            iconBg: "bg-violet-500",
            link: "/dashboard/add-lessons"
        },
        {
            id: 2,
            icon: <Users className="w-8 h-8" />,
            title: "Community Learning",
            description: "Connect with a global community of learners. Discover diverse perspectives and real-world experiences from people across different backgrounds.",
            color: "from-blue-500 to-indigo-600",
            iconBg: "bg-blue-500",
            link: "/public-lessons"
        },
        {
            id: 3,
            icon: <Bookmark className="w-8 h-8" />,
            title: "Save Favorites",
            description: "Bookmark lessons that resonate with you. Build your personal library of wisdom and revisit insights whenever you need guidance.",
            color: "from-pink-500 to-rose-600",
            iconBg: "bg-pink-500",
            link: "/dashboard/my-favorites"
        },
        {
            id: 4,
            icon: <MessageCircle className="w-8 h-8" />,
            title: "Engage & Discuss",
            description: "Join meaningful conversations through comments and reactions. Share your thoughts, ask questions, and learn from others' perspectives.",
            color: "from-emerald-500 to-green-600",
            iconBg: "bg-emerald-500",
            link: "/public-lessons"
        },
        {
            id: 5,
            icon: <TrendingUp className="w-8 h-8" />,
            title: "Track Progress",
            description: "Monitor your personal growth journey with analytics. See how your lessons impact others and track your learning milestones.",
            color: "from-orange-500 to-amber-600",
            iconBg: "bg-orange-500",
            link: "/dashboard"
        },
        {
            id: 6,
            icon: <Shield className="w-8 h-8" />,
            title: "Premium Content",
            description: "Access exclusive premium lessons from top contributors. Upgrade to unlock advanced insights and specialized knowledge.",
            color: "from-yellow-500 to-amber-500",
            iconBg: "bg-yellow-500",
            link: "/be-premium"
        }
    ];

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
                        WHAT WE OFFER
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Everything You Need to Grow
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        A comprehensive platform designed to help you capture, share, and learn from life's most valuable lessons.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className="group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-transparent overflow-hidden"
                            style={{
                                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                            }}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                            
                            <div className="relative z-10">
                                <div className={`w-16 h-16 rounded-xl ${service.iconBg} flex items-center justify-center mb-6 text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                                    {service.icon}
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-white transition-colors duration-500">
                                    {service.title}
                                </h3>

                                <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-white/90 transition-colors duration-500">
                                    {service.description}
                                </p>

                                <Link 
                                    to={service.link}
                                    className="inline-flex items-center text-purple-600 font-semibold group-hover:text-white transition-colors duration-500"
                                >
                                    Learn More
                                    <svg 
                                        className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-500" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </section>
    );
};

export default Services;