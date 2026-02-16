import Link from 'next/link';
import { useState } from 'react';
import axios from 'axios';
import { Heart, Search } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';

// --- BAGIAN SSG (Server-Side Generation) ---
// Data diambil di server sebelum halaman dikirim ke user
export async function getStaticProps() {
  try {
    // Mengambil data skincare dari API Publik (Syarat 3a)
    const res = await axios.get('https://dummyjson.com/products/category/skin-care');
    return {
      props: {
        products: res.data.products,
      },
    };
  } catch (error) {
    return { props: { products: [] } };
  }
}

// --- BAGIAN TAMPILAN (Frontend) ---
export default function Home({ products }) {
  // State untuk pencarian (Syarat CSR & Local State)
  const [search, setSearch] = useState(''); 
  const { wishlist, toggleWishlist } = useWishlist();

  // Logika filter produk
  const filteredProducts = products.filter(p => 
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-glow-50 p-6 font-sans text-gray-800">
      {/* Header */}
      <header className="flex flex-col items-center mb-10 pt-10">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-glow-600 to-purple-500 mb-2">
          ✨ GlowGuide
        </h1>
        <p className="text-gray-500 mb-6">Library Skincare & Analisis Kandungan</p>
        
        {/* Kolom Pencarian Interaktif */}
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-3 text-glow-400" size={20} />
          <input 
            type="text" 
            placeholder="Cari serum, moisturizer..." 
            className="w-full pl-10 pr-4 py-3 rounded-full border-2 border-glow-100 focus:border-glow-500 focus:outline-none shadow-sm transition-all"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        
        <div className="mt-4 text-sm text-glow-600 font-medium">
          ❤️ Wishlist Anda: {wishlist.length} item
        </div>
      </header>

      {/* Grid Produk */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-glow-50 overflow-hidden relative group">
            
            {/* Gambar */}
            <div className="bg-glow-100 h-56 flex items-center justify-center p-4">
              <img src={product.thumbnail} alt={product.title} className="max-h-full object-contain drop-shadow-md group-hover:scale-110 transition-transform" />
            </div>

            {/* Tombol Wishlist */}
            <button 
              onClick={() => toggleWishlist(product)}
              className="absolute top-3 right-3 p-2 bg-white/80 rounded-full hover:bg-white shadow-sm transition z-10"
            >
              <Heart className={`w-5 h-5 ${wishlist.some(w => w.id === product.id) ? 'fill-glow-500 text-glow-500' : 'text-gray-400'}`} />
            </button>

            {/* Info */}
            <div className="p-5">
              <div className="text-xs font-bold text-glow-500 tracking-wider uppercase mb-1">{product.brand || "Generic"}</div>
              <h2 className="font-bold text-gray-800 text-lg truncate">{product.title}</h2>
              <div className="flex justify-between items-center mt-4">
                <span className="text-xl font-bold text-slate-800">${product.price}</span>
                <Link href={`/product/${product.id}`} className="px-4 py-2 bg-glow-500 text-white text-sm font-medium rounded-lg hover:bg-glow-600 transition shadow-lg shadow-glow-200">
                  Lihat Detail
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}