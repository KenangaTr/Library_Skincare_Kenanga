export default function Footer() {
    return (
        <footer className="bg-gray-50 py-12 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="font-serif text-2xl font-bold mb-4">ILLUME</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Clean, effective skincare designed to bring out your natural glow.
                            Ethically sourced and scientifically proven.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4 text-gray-900">Shop</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><a href="#" className="hover:text-brand-pink">All Products</a></li>
                            <li><a href="#" className="hover:text-brand-pink">Bestsellers</a></li>
                            <li><a href="#" className="hover:text-brand-pink">New Arrivals</a></li>
                            <li><a href="#" className="hover:text-brand-pink">Sets & Bundles</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4 text-gray-900">Support</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><a href="#" className="hover:text-brand-pink">FAQ</a></li>
                            <li><a href="#" className="hover:text-brand-pink">Shipping & Returns</a></li>
                            <li><a href="#" className="hover:text-brand-pink">Contact Us</a></li>
                            <li><a href="#" className="hover:text-brand-pink">Privacy Policy</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4 text-gray-900">Follow Us</h4>
                        <div className="flex space-x-4">
                            {/* Social Icons Placeholder */}
                            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-brand-pink hover:text-white transition-colors cursor-pointer">IG</div>
                            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-brand-pink hover:text-white transition-colors cursor-pointer">FB</div>
                            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-brand-pink hover:text-white transition-colors cursor-pointer">TT</div>
                        </div>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-gray-200 text-center text-sm text-gray-400">
                    © {new Date().getFullYear()} ILLUME Skincare. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
