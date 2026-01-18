import { Calendar, Clock, ArrowRight, User } from "lucide-react";

const Blogs = () => {
    const blogs = [
        {
            id: 1,
            title: "The Power of Reflection: Why Documenting Life Lessons Matters",
            excerpt: "Discover how writing down your experiences can accelerate personal growth and create lasting change in your life journey.",
            image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80",
            author: "Sarah Mitchell",
            date: "Jan 15, 2026",
            readTime: "5 min read",
            category: "Personal Growth",
            color: "from-purple-500 to-pink-500"
        },
        {
            id: 2,
            title: "Learning from Failure: Turning Setbacks into Success",
            excerpt: "Explore how life's toughest moments can become your greatest teachers and the strategies to extract wisdom from adversity.",
            image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
            author: "Marcus Chen",
            date: "Jan 12, 2026",
            readTime: "7 min read",
            category: "Mindset",
            color: "from-blue-500 to-cyan-500"
        },
        {
            id: 3,
            title: "Building a Legacy: How to Share Wisdom That Lasts",
            excerpt: "Learn the art of crafting life lessons that resonate with others and create meaningful impact across generations.",
            image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&q=80",
            author: "Emily Parker",
            date: "Jan 10, 2026",
            readTime: "6 min read",
            category: "Community",
            color: "from-emerald-500 to-green-500"
        }
    ];

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
                        LATEST INSIGHTS
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        From Our Blog
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Explore articles, guides, and stories to help you on your personal growth journey.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog, index) => (
                        <article
                            key={blog.id}
                            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2"
                            style={{
                                animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`
                            }}
                        >
                            <div className="relative overflow-hidden h-56">
                                <img 
                                    src={blog.image} 
                                    alt={blog.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className={`absolute top-4 left-4 px-3 py-1 bg-gradient-to-r ${blog.color} text-white text-xs font-semibold rounded-full`}>
                                    {blog.category}
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                                    <div className="flex items-center gap-1">
                                        <User className="w-4 h-4" />
                                        <span>{blog.author}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Calendar className="w-4 h-4" />
                                        <span>{blog.date}</span>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300 line-clamp-2">
                                    {blog.title}
                                </h3>

                                <p className="text-gray-600 mb-4 line-clamp-3">
                                    {blog.excerpt}
                                </p>

                                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                    <div className="flex items-center gap-1 text-sm text-gray-500">
                                        <Clock className="w-4 h-4" />
                                        <span>{blog.readTime}</span>
                                    </div>
                                    
                                    <button className="flex items-center gap-2 text-purple-600 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                                        Read More
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                        View All Articles
                    </button>
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

export default Blogs;