import Image from "next/image";
import RenderingBadge from "./RenderingBadge";
import { ArrowRight } from "lucide-react";

async function getProducts() {
    // We use absolute URL for server-side fetching
    // In production this needs to be the actual domain, but for localhost:
    // We can't easily guess localhost port from here without env var.
    // BUT, since we are in the same Next.js app, we can just import the logic if we want,
    // OR we use a full URL. Next.js server components fetch needs full URL.
    // I will assume localhost:3000 for development.
    try {
        const res = await fetch("http://localhost:3000/api/products?category=star", {
            next: { revalidate: 60 },
        });
        if (!res.ok) throw new Error("Failed to fetch products");
        return res.json();
    } catch (e) {
        console.error(e);
        return [];
    }
}

export default async function StarProducts() {
    const products = await getProducts();

    return (
        <section className="py-20 bg-white relative">
            <RenderingBadge mode="ISR" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-4">
                            Our Star <span className="text-brand-pink">Products</span>
                        </h2>
                        <p className="text-gray-500 max-w-md">
                            Discover our award-winning formulations loved by thousands.
                        </p>
                    </div>
                    <div className="hidden md:flex space-x-2">
                        <button className="p-2 border rounded-full hover:bg-gray-100 transition-colors">←</button>
                        <button className="p-2 bg-brand-pink text-white rounded-full hover:bg-pink-600 transition-colors">→</button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <div key={product.id} className="group relative bg-pink-50/30 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-pink-100">
                            <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded text-xs font-bold text-gray-900 shadow-sm">
                                ${product.price}
                            </div>
                            <div className="relative h-64 w-full mb-6 transform group-hover:scale-105 transition-transform duration-500">
                                {/* Placeholder for product images */}
                                <div className="w-full h-full bg-white rounded-xl shadow-inner flex items-center justify-center text-gray-300">
                                    <span className="text-4xl">🧴</span>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-1 font-serif">{product.name}</h3>
                            <p className="text-gray-500 text-sm mb-4 line-clamp-2">{product.description}</p>
                            <button className="text-brand-pink font-semibold flex items-center group-hover:underline">
                                Buy Now <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
