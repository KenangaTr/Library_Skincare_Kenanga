import { NextResponse } from 'next/server';

const testimonials = [
    {
        id: 1,
        name: "Sarah M.",
        role: "Verified Buyer",
        content: "ILLUME transformed my skin in just 2 weeks! The serum is a game-changer.",
        rating: 5,
        avatar: "/avatars/sarah.jpg",
    },
    {
        id: 2,
        name: "Jessica K.",
        role: "Beauty Blogger",
        content: "I've tried everything, but nothing compares to the hydration of the Moisture Lock.",
        rating: 5,
        avatar: "/avatars/jessica.jpg",
    },
    {
        id: 3,
        name: "Emily R.",
        role: "Verified Buyer",
        content: "The packaging is beautiful and the product actually works. Highly recommend!",
        rating: 4,
        avatar: "/avatars/emily.jpg",
    },
];

export async function GET() {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 300));

    return NextResponse.json(testimonials);
}
