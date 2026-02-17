"use client";

import { useState } from "react";
import RenderingBadge from "./RenderingBadge";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Newsletter() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState("idle");

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus("loading");
        setTimeout(() => {
            setStatus("success");
            setEmail("");
        }, 1500);
    };

    return (
        <section className="py-24 relative overflow-hidden bg-fabish-pink text-fabish-text rounded-xl mx-4 lg:mx-8 mb-8 my-8">
            <RenderingBadge mode="CSR" />

            {/* Background Image/Overlay */}
            <div className="absolute inset-0 bg-[url('/bg-texture.png')] opacity-10 mix-blend-overlay"></div>

            <div className="max-w-4xl mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="text-left md:w-1/2">
                    <h2 className="text-3xl lg:text-4xl font-serif font-medium mb-4 leading-tight">
                        Ready to Transform <br /> Your Skin?
                    </h2>
                    <p className="text-fabish-text/80 text-lg mb-8 font-light">
                        Personalized skincare solutions for verified results.
                        Find the answer to your skincare concerns.
                    </p>
                    <Link href="/shop" className="bg-[#F48FB1] text-[#0F2F18] px-8 py-3 rounded-full font-bold hover:bg-pink-400 transition-colors inline-block shadow-[0_4px_14px_0_rgb(255,255,255)]">
                        Shop Now
                    </Link>
                </div>

                {/* Image Placeholder */}
                <div className="md:w-1/2 relative h-full flex justify-center">
                    <div className="relative w-64 h-80 bg-gray-300 rounded-[3rem] overflow-hidden border-4 border-white/20 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                        <div className="absolute inset-0 bg-gray-200">
                            <Image
                                src="/MODEL5.png"
                                alt="Newsletter Model"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
