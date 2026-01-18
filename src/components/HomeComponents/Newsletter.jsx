import { Mail, Send, CheckCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";

const Newsletter = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!email) {
            toast.error("Please enter your email address");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            toast.error("Please enter a valid email address");
            return;
        }

        toast.success("Successfully subscribed to our newsletter!");
        setEmail("");
    };

    const benefits = [
        "Weekly wisdom and curated life lessons",
        "Exclusive premium content and early access",
        "Personal growth tips from experts",
        "Community highlights and success stories"
    ];

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-600 via-pink-600 to-rose-600 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBoLTEydjEyaDEyVjMwem0wLTMwdjEyaC0xMlYwaDEyek0wIDMwaDEydjEySDBWMzB6bTAtMzB2MTJoMTJWMEgweiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
            
            <div className="max-w-4xl mx-auto relative z-10">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                        <Mail className="w-8 h-8 text-white" />
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Stay Inspired Weekly
                    </h2>
                    <p className="text-xl text-white/90 max-w-2xl mx-auto">
                        Get the best life lessons, growth tips, and community stories delivered straight to your inbox.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="mb-8">
                    <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
                        <div className="flex-1 relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email address"
                                className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-white/60 focus:outline-none focus:border-white/40 transition-all duration-300"
                            />
                        </div>
                        <button
                            type="submit"
                            className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2"
                        >
                            Subscribe
                            <Send className="w-5 h-5" />
                        </button>
                    </div>
                </form>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                    {benefits.map((benefit, index) => (
                        <div 
                            key={index}
                            className="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
                        >
                            <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0 mt-0.5" />
                            <p className="text-white/90 text-sm">{benefit}</p>
                        </div>
                    ))}
                </div>

                <p className="text-center text-white/70 text-sm mt-8">
                    Join 15,000+ subscribers. Unsubscribe anytime. No spam, ever.
                </p>
            </div>

            <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </section>
    );
};

export default Newsletter;