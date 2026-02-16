import RenderingBadge from "./RenderingBadge";

async function getTestimonials() {
    // SSR behavior: no-store forces dynamic fetch
    try {
        const res = await fetch("http://localhost:3000/api/testimonials", {
            cache: "no-store",
        });
        if (!res.ok) throw new Error("Failed to fetch testimonials");
        return res.json();
    } catch (e) {
        console.error(e);
        return [];
    }
}

export default async function Testimonials() {
    const testimonials = await getTestimonials();

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <RenderingBadge mode="SSR" />

            {/* Decorative Background */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-4">
                        What Our <span className="text-brand-pink">Customers</span> Say
                    </h2>
                    <p className="text-gray-500">Real stories from real users.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.05)] border border-gray-100 relative">
                            <div className="absolute top-6 right-8 text-6xl text-pink-100 font-serif leading-none">”</div>
                            <div className="flex items-center space-x-4 mb-6">
                                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                                    <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500 text-xs text-center p-1">User</div>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                                    <p className="text-xs text-brand-pink font-semibold uppercase">{testimonial.role}</p>
                                </div>
                            </div>
                            <p className="text-gray-600 italic leading-relaxed mb-4 relative z-10">
                                "{testimonial.content}"
                            </p>
                            <div className="flex text-yellow-400 text-sm">
                                {"★".repeat(testimonial.rating)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
