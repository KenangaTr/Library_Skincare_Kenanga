import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import StarProducts from "@/components/StarProducts";
import Features from "@/components/Features";
import Bestsellers from "@/components/Bestsellers";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export const metadata = {
    title: "ILLUME | Transform Your Skin",
    description: "Premium skincare solutions for a natural glow.",
};

export default function Home() {
    return (
        <main className="min-h-screen bg-white selection:bg-brand-pink selection:text-white">
            <Navbar />
            <Hero />
            <StarProducts />
            <Features />
            <Bestsellers />
            <Testimonials />
            <Newsletter />
            <Footer />
        </main>
    );
}
