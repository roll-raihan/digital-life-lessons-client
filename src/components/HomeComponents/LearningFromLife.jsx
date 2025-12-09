import { FaBrain, FaChartLine, FaLightbulb, FaUsers } from "react-icons/fa6";
import { Link } from "react-router";


const LearningFromLife = () => {
    const benefits = [
        {
            id: 1,
            icon: <FaBrain className="text-4xl" />,
            title: "Preserve Your Wisdom",
            description: "Life lessons are valuable insights that often fade with time. Document your experiences and reflections to create a personal knowledge base that grows with you.",
            color: "from-purple-500 to-pink-500",
            bgColor: "bg-purple-50",
            iconBg: "bg-purple-100"
        },
        {
            id: 2,
            icon: <FaUsers className="text-4xl" />,
            title: "Learn from Others",
            description: "Access a diverse collection of real-world experiences shared by people from all walks of life. Gain perspective, avoid common mistakes, and accelerate your personal growth journey.",
            color: "from-blue-500 to-cyan-500",
            bgColor: "bg-blue-50",
            iconBg: "bg-blue-100"
        },
        {
            id: 3,
            icon: <FaLightbulb className="text-4xl" />,
            title: "Gain New Perspectives",
            description: "Every life lesson offers a unique viewpoint that can transform your thinking. Discover insights on career, relationships, mindset, and personal development that resonate with your journey.",
            color: "from-amber-500 to-orange-500",
            bgColor: "bg-amber-50",
            iconBg: "bg-amber-100"
        },
        {
            id: 4,
            icon: <FaChartLine className="text-4xl" />,
            title: "Track Your Growth",
            description: "Monitor your learning progress and reflect on how far you've come. Save favorite lessons, organize by category, and build a personalized library of wisdom that supports continuous improvement.",
            color: "from-green-500 to-emerald-500",
            bgColor: "bg-green-50",
            iconBg: "bg-green-100"
        }
    ];

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Why Learning From Life Matters
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Life's greatest teacher is experience. By capturing and sharing our lessons, we create a collective wisdom that empowers everyone to grow, adapt, and thrive.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {benefits.map((benefit) => (
                        <div
                            key={benefit.id}
                            className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:scale-105"
                        >
                            <div className={`h-1.5 bg-gradient-to-r ${benefit.color}`}></div>

                            <div className="p-6">
                                <div className={`w-16 h-16 ${benefit.iconBg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    <div className={`bg-gradient-to-br ${benefit.color} bg-clip-text text-transparent`}>
                                        {benefit.icon}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {benefit.title}
                                </h3>

                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {benefit.description}
                                </p>
                            </div>

                            <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <p className="text-gray-700 text-lg mb-6">
                        Ready to start your journey of continuous learning and growth?
                    </p>
                    <Link to='/public-lessons' className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                        Explore Public Lessons
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default LearningFromLife;