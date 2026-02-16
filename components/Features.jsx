import RenderingBadge from "./RenderingBadge";
import { Leaf, ShieldCheck, Heart, Droplet } from "lucide-react";

export default function Features() {
    const features = [
        {
            icon: <Leaf className="w-6 h-6 text-green-600" />,
            title: "Vegan",
            desc: "100% plant-based and cruelty-free ingredients.",
        },
        {
            icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
            title: "Cruelty-Free",
            desc: "We never test on animals, ever.",
        },
        {
            icon: <Droplet className="w-6 h-6 text-cyan-500" />,
            title: "Safe Ingredients",
            desc: "Free from parabens, sulfates, and synthetic fragrances.",
        },
        {
            icon: <Heart className="w-6 h-6 text-red-500" />,
            title: "Clinically Proven",
            desc: "Formulas backed by science and dermatologists.",
        },
    ];

    return (
        <section className="py-16 bg-white border-y border-gray-100 relative">
            {/* Static usually doesn't need a badge, but user asked for labeling */}
            <div className="absolute top-4 right-4 z-20">
                {/* Could reuse RenderingBadge but forcing 'Static' mode */}
                <span className="px-3 py-1 rounded-full text-xs font-semibold border bg-gray-100 text-gray-800 border-gray-200 shadow-sm backdrop-blur-sm">
                    Mode: Static
                </span>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-serif font-bold text-gray-900">Why Choose <span className="text-brand-pink">ILLUME</span>?</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-gray-50 transition-colors">
                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4 shadow-sm">
                                {feature.icon}
                            </div>
                            <h3 className="font-bold text-lg text-gray-900 mb-2">{feature.title}</h3>
                            <p className="text-sm text-gray-500">{feature.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 bg-gray-50 rounded-2xl p-8 lg:p-12 flex flex-col md:flex-row items-center justify-between">
                    <div className="mb-6 md:mb-0 md:mr-8 text-center md:text-left">
                        <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">Trusted by Leading Brands</h3>
                        <p className="text-gray-500">Our products are used by professionals worldwide.</p>
                    </div>
                    <div className="flex space-x-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Logos placeholder */}
                        <span className="font-bold text-xl">VOGUE</span>
                        <span className="font-bold text-xl">ELLE</span>
                        <span className="font-bold text-xl">allure</span>
                        <span className="font-bold text-xl">Harper's BAZAAR</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
