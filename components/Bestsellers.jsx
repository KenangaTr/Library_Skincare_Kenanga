import Link from "next/link";
import RenderingBadge from "./RenderingBadge";
import { ArrowRight } from "lucide-react";

async function getBestsellers() {
    // SSG behavior: force-cache is default, but explicit here for clarity
    try {
        const res = await fetch("http://localhost:3000/api/products?category=bestseller", {
            cache: "force-cache",
        });
        if (!res.ok) throw new Error("Failed to fetch bestsellers");
        return res.json();
    } catch (e) {
        console.warn("Bestsellers fetch failed, using fallback");
        return [];
    }
}

export default async function Bestsellers() {
    const products = await getBestsellers();

    return (
        <section className="py-20 bg-gray-50 relative">
            <RenderingBadge mode="SSG" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-4">
                        Explore Our <span className="text-brand-pink">Bestsellers</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        These fan-favorites are flying off the shelves. See what everyone is raving about.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                            <div className="relative h-80 bg-gray-100 flex items-center justify-center">
                                <div className="text-6xl text-gray-300">🧴</div>
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors"></div>
                                <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all bg-white text-gray-900 px-6 py-2 rounded-full font-semibold shadow-lg">
                                    Quick View
                                </button>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-serif font-bold text-lg text-gray-900">{product.name}</h3>
                                    <span className="font-bold text-brand-pink">${product.price}</span>
                                </div>
                                <div className="flex text-yellow-400 text-xs mb-3">
                                    {"★".repeat(Math.round(product.rating))}
                                    <span className="text-gray-300">{"★".repeat(5 - Math.round(product.rating))}</span>
                                    <span className="text-gray-400 ml-2">({product.reviews})</span>
                                </div>
                                <button className="w-full py-2 border border-brand-pink text-brand-pink rounded hover:bg-brand-pink hover:text-white transition-colors font-medium">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Link href="#" className="inline-flex items-center text-gray-600 hover:text-brand-pink font-semibold border-b-2 border-transparent hover:border-brand-pink transition-all pb-1">
                        View All Products <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
