import Link from "next/link";
import { Search, ShoppingBag, User } from "lucide-react";

export default function Navbar() {
    return (
        <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="font-serif text-2xl font-bold tracking-wider text-gray-900">
                            ILLUME
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        <Link href="#" className="text-gray-600 hover:text-brand-pink transition-colors">Shop</Link>
                        <Link href="#" className="text-gray-600 hover:text-brand-pink transition-colors">About Us</Link>
                        <Link href="#" className="text-gray-600 hover:text-brand-pink transition-colors">Blog</Link>
                        <Link href="#" className="text-gray-600 hover:text-brand-pink transition-colors">Contact</Link>
                    </div>

                    {/* Icons */}
                    <div className="flex items-center space-x-6">
                        <button className="text-gray-600 hover:text-brand-pink">
                            <Search className="w-5 h-5" />
                        </button>
                        <button className="text-gray-600 hover:text-brand-pink">
                            <User className="w-5 h-5" />
                        </button>
                        <button className="text-gray-600 hover:text-brand-pink relative">
                            <ShoppingBag className="w-5 h-5" />
                            <span className="absolute -top-1 -right-1 bg-brand-pink text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                                2
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
