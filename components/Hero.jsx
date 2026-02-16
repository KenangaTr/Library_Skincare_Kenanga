import Image from "next/image";
import RenderingBadge from "./RenderingBadge";

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-pink-50 to-white">
            <RenderingBadge mode="Static" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="space-y-8 animate-fade-in-up">
                        <span className="text-brand-pink font-semibold tracking-widest uppercase text-sm">
                            New Collection
                        </span>
                        <h1 className="text-5xl lg:text-7xl font-serif font-bold text-gray-900 leading-tight">
                            Transform <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-pink-600">
                                Your Skin
                            </span>
                        </h1>
                        <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
                            Discover nature's most potent botanicals blended with distinct science
                            to reveal your inner glow.
                        </p>
                        <div className="flex space-x-4">
                            <button className="bg-brand-pink text-white px-8 py-3 rounded-full hover:bg-pink-600 transition-all shadow-lg hover:shadow-pink-200/50">
                                Shop Now
                            </button>
                            <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors px-6 py-3">
                                <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-md">
                                    ▶
                                </span>
                                <span>Watch Video</span>
                            </button>
                        </div>

                        <div className="pt-8 flex items-center space-x-8">
                            <div className="text-center">
                                <p className="font-bold text-2xl text-gray-900">100%</p>
                                <p className="text-xs text-gray-500 uppercase tracking-wide">Natural</p>
                            </div>
                            <div className="text-center">
                                <p className="font-bold text-2xl text-gray-900">High</p>
                                <p className="text-xs text-gray-500 uppercase tracking-wide">Quality</p>
                            </div>
                            <div className="text-center">
                                <p className="font-bold text-2xl text-gray-900">Cruelty</p>
                                <p className="text-xs text-gray-500 uppercase tracking-wide">Free</p>
                            </div>
                        </div>
                    </div>

                    {/* Hero Image */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-pink-200 rounded-full blur-3xl opacity-30 transform translate-y-10"></div>
                        {/* Using a placeholder for now until artifact generation completes and I can reference it,
                 But actually I can reference the artifact path if I knew it. 
                 I'll update this later or use a generic local path and user has to move it.
                 For now, I'll use a local path that I will ensure exists later. */}
                        <div className="relative z-10 transform hover:translate-y-2 transition-transform duration-500">
                            {/* Placeholder text or Image component if asset existed */}
                            <div className="w-full h-[500px] bg-gray-100 rounded-3xl flex items-center justify-center text-gray-400 relative overflow-hidden">
                                <Image
                                    src="/hero_skincare_product.svg"
                                    alt="ILLUME Serum"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>

                        {/* Floating Elements */}
                        <div className="absolute -bottom-10 -left-10 bg-white p-4 rounded-2xl shadow-xl z-20 animate-bounce-slow">
                            <div className="flex items-center space-x-2">
                                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                                <span className="text-sm font-semibold text-gray-800">Dermatologist Tested</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
