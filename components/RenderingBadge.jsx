export default function RenderingBadge({ mode }) {
    const colors = {
        ISR: "bg-blue-100 text-blue-800 border-blue-200",
        SSG: "bg-green-100 text-green-800 border-green-200",
        SSR: "bg-purple-100 text-purple-800 border-purple-200",
        CSR: "bg-orange-100 text-orange-800 border-orange-200",
        Static: "bg-gray-100 text-gray-800 border-gray-200",
    };

    return (
        <span
            className={`absolute top-4 right-4 z-20 px-3 py-1 rounded-full text-xs font-semibold border ${colors[mode] || colors.Static} shadow-sm backdrop-blur-sm`}
        >
            Mode: {mode}
        </span>
    );
}
