import { ChevronDown, HelpCircle } from "lucide-react";
import { useState } from "react";

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            id: 1,
            question: "What is Digital Life Lessons?",
            answer: "Digital Life Lessons is a platform where users can create, store, and share meaningful life lessons, personal growth insights, and wisdom. It helps preserve personal experiences and allows you to learn from a global community of contributors."
        },
        {
            id: 2,
            question: "What's the difference between Free and Premium plans?",
            answer: "Free users can create up to 5 lessons per month and access all free public lessons. Premium users get unlimited lesson creation, can create premium-only content, enjoy an ad-free experience, and access exclusive premium lessons from other users for just ৳1500 lifetime."
        },
        {
            id: 3,
            question: "How do I upgrade to Premium?",
            answer: "Simply navigate to the Pricing/Upgrade page from the navbar, click on 'Upgrade to Premium', and complete the one-time payment of ৳1500 through our secure Stripe checkout. You'll get lifetime premium access with no recurring fees."
        },
        {
            id: 4,
            question: "Can I make my lessons private?",
            answer: "Yes! When creating a lesson, you can choose between Public (visible to everyone) or Private (visible only to you). You also control the access level - Free (anyone can view) or Premium (only premium users can access)."
        },
        {
            id: 5,
            question: "How does the favorites feature work?",
            answer: "While browsing public lessons, you can save any lesson to your Favorites by clicking the bookmark icon. All your saved lessons are accessible from your Dashboard > My Favorites, where you can organize and revisit them anytime."
        },
        {
            id: 6,
            question: "Can I edit or delete my lessons?",
            answer: "Absolutely! Go to Dashboard > My Lessons to see all your created lessons. From there, you can edit any lesson details, change visibility settings, update access levels, or delete lessons permanently."
        },
        {
            id: 7,
            question: "What categories can I use for my lessons?",
            answer: "You can categorize your lessons into Personal Growth, Career, Relationships, Mindset, Mistakes Learned, and more. You can also set an emotional tone like Motivational, Sad, Realization, or Gratitude to help others find relevant content."
        },
        {
            id: 8,
            question: "How do comments and reactions work?",
            answer: "Logged-in users can like lessons and leave comments on any public lesson detail page. This creates meaningful conversations and allows the community to engage with shared wisdom. You must be logged in to interact."
        },
        {
            id: 9,
            question: "What happens if I report a lesson?",
            answer: "When you report a lesson, you'll select a reason (inappropriate content, spam, etc.) and it will be sent to our admin team for review. Admins can view all reported lessons in their dashboard and take appropriate action."
        },
        {
            id: 10,
            question: "Is my payment information secure?",
            answer: "Yes! We use Stripe, a trusted and secure payment processor. We never store your credit card information on our servers. All payments are processed through Stripe's encrypted checkout system."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-6">
                        <HelpCircle className="w-8 h-8 text-purple-600" />
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Everything you need to know about Digital Life Lessons. Can't find what you're looking for? Contact our support team.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={faq.id}
                            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden"
                            style={{
                                animation: `fadeInUp 0.4s ease-out ${index * 0.05}s both`
                            }}
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
                            >
                                <span className="font-semibold text-gray-900 pr-4">
                                    {faq.question}
                                </span>
                                <ChevronDown 
                                    className={`w-5 h-5 text-purple-600 flex-shrink-0 transition-transform duration-300 ${
                                        openIndex === index ? 'rotate-180' : ''
                                    }`}
                                />
                            </button>
                            
                            <div 
                                className={`transition-all duration-300 ease-in-out ${
                                    openIndex === index 
                                        ? 'max-h-96 opacity-100' 
                                        : 'max-h-0 opacity-0'
                                }`}
                            >
                                <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Still have questions?
                    </h3>
                    <p className="text-gray-600 mb-6">
                        Our support team is here to help you get the most out of Digital Life Lessons.
                    </p>
                    <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                        Contact Support
                    </button>
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
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

export default FAQ;