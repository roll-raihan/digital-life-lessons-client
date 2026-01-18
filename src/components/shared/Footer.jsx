
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import { Link } from 'react-router';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-accent">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Brand Section */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <Link to='/' className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center btn btn-ghost text">
                                <span className="text-white font-bold text-xl">DL</span>
                            </Link>
                            <h3 className="text-2xl font-bold text-white">Digital Life Lessons</h3>
                        </div>
                        <p className="text-accent text-sm leading-relaxed">
                            Preserve your wisdom, share your insights, and grow together. A platform dedicated to meaningful life lessons and personal growth.
                        </p>
                        <div className="flex space-x-3">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 bg-slate-700 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                                aria-label="Facebook"
                            >
                                <FaFacebookF className="text-sm" />
                            </a>
                            <a
                                href="https://x.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 bg-slate-700 hover:bg-black rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                                aria-label="X (Twitter)"
                            >
                                <FaSquareXTwitter className="text-sm" />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 bg-slate-700 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedinIn className="text-sm" />
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 bg-slate-700 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                                aria-label="Instagram"
                            >
                                <FaInstagram className="text-sm" />
                            </a>
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 bg-slate-700 hover:bg-gray-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                                aria-label="GitHub"
                            >
                                <FaGithub className="text-sm" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold text-lg mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="hover:text-purple-400 transition-colors duration-200 text-sm">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/public-lessons" className="hover:text-purple-400 transition-colors duration-200 text-sm">
                                    Public Lessons
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard" className="hover:text-purple-400 transition-colors duration-200 text-sm">
                                    Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link to="/be-premium" className="hover:text-purple-400 transition-colors duration-200 text-sm">
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="hover:text-purple-400 transition-colors duration-200 text-sm">
                                    About Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal & Support */}
                    <div>
                        <h4 className="text-white font-semibold text-lg mb-4">Legal & Support</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/terms" className="hover:text-purple-400 transition-colors duration-200 text-sm">
                                    Terms & Conditions
                                </Link>
                            </li>
                            <li>
                                <Link to="/privacy" className="hover:text-purple-400 transition-colors duration-200 text-sm">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link to="/cookie-policy" className="hover:text-purple-400 transition-colors duration-200 text-sm">
                                    Cookie Policy
                                </Link>
                            </li>
                            <li>
                                <Link to="/help" className="hover:text-purple-400 transition-colors duration-200 text-sm">
                                    Help Center
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="hover:text-purple-400 transition-colors duration-200 text-sm">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-semibold text-lg mb-4">Contact Info</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start space-x-3">
                                <MdEmail className="text-purple-400 mt-1 flex-shrink-0" />
                                <div>
                                    <p className="text-sm">support@digitallifelessons.com</p>
                                </div>
                            </li>
                            <li className="flex items-start space-x-3">
                                <MdPhone className="text-purple-400 mt-1 flex-shrink-0" />
                                <div>
                                    <p className="text-sm">+880 1234-567890</p>
                                </div>
                            </li>
                            <li className="flex items-start space-x-3">
                                <MdLocationOn className="text-purple-400 mt-1 flex-shrink-0" />
                                <div>
                                    <p className="text-sm">Dhaka, Bangladesh</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-slate-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-sm text-gray-400 text-center md:text-left">
                            © {currentYear} Digital Life Lessons. All rights reserved.
                        </p>
                        <div className="flex items-center space-x-6 text-sm">
                            <Link to="/sitemap" className="hover:text-purple-400 transition-colors duration-200">
                                Sitemap
                            </Link>
                            <Link to="/accessibility" className="hover:text-purple-400 transition-colors duration-200">
                                Accessibility
                            </Link>
                            <Link to="/careers" className="hover:text-purple-400 transition-colors duration-200">
                                Careers
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;