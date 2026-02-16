"use client";

import { useState } from "react";
import RenderingBadge from "./RenderingBadge";
import { Send, Sparkles } from "lucide-react";

export default function Newsletter() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState("idle"); // idle, loading, success

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus("loading");
        // Simulate API call
        setTimeout(() => {
            setStatus("success");
            setEmail("");
        }, 1500);
    };

    return (
        <section className="py-20 relative overflow-hidden bg-gradient-to-r from-gray-900 to-gray-800 text-white">
            <RenderingBadge mode="CSR" />

            {/* Decorative Sparkles */}
            <div className="absolute top-10 left-10 text-yellow-300 opacity-20 animate-pulse">
                <Sparkles className="w-12 h-12" />
            </div>
            <div className="absolute bottom-10 right-10 text-pink-300 opacity-20 animate-pulse delay-700">
                <Sparkles className="w-8 h-8" />
            </div>

            <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
                <h2 className="text-3xl lg:text-5xl font-serif font-bold mb-6">
                    Stay Glowing with <span className="text-brand-pink">ILLUME</span>
                </h2>
                <p className="text-gray-300 mb-10 text-lg max-w-xl mx-auto">
                    Join our community for exclusive tips, early access to new drops, and 10% off your first order.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-pink transition-all backdrop-blur-sm"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        disabled={status === "loading" || status === "success"}
                    />
                    <button
                        type="submit"
                        disabled={status === "loading" || status === "success"}
                        className={`px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105 flex items-center justify-center ${status === "success"
                                ? "bg-green-500 text-white"
                                : "bg-brand-pink text-white hover:bg-pink-600 shadow-lg shadow-pink-500/30"
                            }`}
                    >
                        {status === "loading" ? (
                            <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        ) : status === "success" ? (
                            "Subscribed!"
                        ) : (
                            <>
                                Subscribe <Send className="w-4 h-4 ml-2" />
                            </>
                        )}
                    </button>
                </form>

                {status === "success" && (
                    <p className="mt-4 text-green-300 text-sm animate-fade-in">
                        Thank you for subscribing! Check your inbox for your code.
                    </p>
                )}
            </div>
        </section>
    );
}
