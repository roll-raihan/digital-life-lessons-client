import { Quote, Star } from "lucide-react";

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "Sarah Johnson",
            role: "Life Coach",
            image: "https://i.pravatar.cc/150?img=1",
            rating: 5,
            text: "Digital Life Lessons has transformed how I document my coaching journey. The ability to share wisdom with my clients and the community is invaluable. The premium features are worth every penny!",
            color: "from-purple-500 to-pink-500"
        },
        {
            id: 2,
            name: "Michael Chen",
            role: "Entrepreneur",
            image: "https://i.pravatar.cc/150?img=13",
            rating: 5,
            text: "As a startup founder, I've learned countless lessons the hard way. This platform helps me preserve those insights and share them with aspiring entrepreneurs. It's like having a personal wisdom vault.",
            color: "from-blue-500 to-cyan-500"
        },
        {
            id: 3,
            name: "Emily Rodriguez",
            role: "Teacher",
            image: "https://i.pravatar.cc/150?img=5",
            rating: 5,
            text: "I use this platform to reflect on my teaching experiences and learn from other educators worldwide. The community aspect is amazing, and I've discovered perspectives that have improved my classroom approach.",
            color: "from-emerald-500 to-green-500"
        },
        {
            id: 4,
            name: "David Thompson",
            role: "Mental Health Advocate",
            image: "https://i.pravatar.cc/150?img=12",
            rating: 5,
            text: "This platform has been therapeutic for me. Writing down life lessons helps me process my experiences, and reading others' stories reminds me I'm not alone in my journey. Truly life-changing.",
            color: "from-orange-500 to-amber-500"
        },
        {
            id: 5,
            name: "Priya Sharma",
            role: "Career Counselor",
            image: "https://i.pravatar.cc/150?img=9",
            rating: 5,
            text: "The categorization and emotional tone features make it easy to find exactly what I need. I recommend specific lessons to my clients, and they love the personalized approach to growth.",
            color: "from-rose-500 to-pink-500"
        },
        {
            id: 6,
            name: "James Wilson",
            role: "Writer",
            image: "https://i.pravatar.cc/150?img=14",
            rating: 5,
            text: "As a writer, I'm constantly seeking inspiration. This platform is a goldmine of real human experiences. The stories I've read here have influenced my work and enriched my understanding of life.",
            color: "from-indigo-500 to-purple-500"
        }
    ];

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
                        TESTIMONIALS
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        What Our Community Says
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Join thousands of people who are transforming their lives through shared wisdom and meaningful reflection.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={testimonial.id}
                            className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2"
                            style={{
                                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                            }}
                        >
                            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${testimonial.color} rounded-t-2xl`}></div>
                            
                            <div className="relative">
                                <div className={`w-12 h-12 bg-gradient-to-br ${testimonial.color} rounded-full flex items-center justify-center mb-6 opacity-10 absolute -top-4 -right-4`}>
                                    <Quote className="w-6 h-6 text-white" />
                                </div>

                                <div className="flex items-center mb-6">
                                    <img 
                                        src={testimonial.image} 
                                        alt={testimonial.name}
                                        className="w-16 h-16 rounded-full border-4 border-white shadow-md object-cover"
                                    />
                                    <div className="ml-4">
                                        <h3 className="text-lg font-bold text-gray-900">
                                            {testimonial.name}
                                        </h3>
                                        <p className="text-sm text-gray-500">
                                            {testimonial.role}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star 
                                            key={i} 
                                            className="w-5 h-5 fill-yellow-400 text-yellow-400"
                                        />
                                    ))}
                                </div>

                                <p className="text-gray-600 leading-relaxed italic">
                                    "{testimonial.text}"
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-50 to-pink-50 px-6 py-3 rounded-full">
                        <div className="flex -space-x-2">
                            {[1, 5, 9, 13].map((num) => (
                                <img 
                                    key={num}
                                    src={`https://i.pravatar.cc/40?img=${num}`} 
                                    alt="User"
                                    className="w-8 h-8 rounded-full border-2 border-white"
                                />
                            ))}
                        </div>
                        <p className="text-gray-700 font-semibold">
                            Join 10,000+ users sharing their wisdom
                        </p>
                    </div>
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

export default Testimonials;