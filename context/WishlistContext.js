import { createContext, useContext, useState, useEffect } from 'react';

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState([]);

  // Load data dari browser saat aplikasi dibuka (CSR Logic)
  useEffect(() => {
    const saved = localStorage.getItem('glowWishlist');
    if (saved) setWishlist(JSON.parse(saved));
  }, []);

  // Simpan data otomatis saat wishlist berubah
  useEffect(() => {
    localStorage.setItem('glowWishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  // Fungsi Tambah/Hapus Wishlist
  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) return prev.filter((item) => item.id !== product.id);
      return [...prev, product];
    });
  };

  return (
    <WishlistContext.Provider value={{ wishlist, toggleWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
}

export const useWishlist = () => useContext(WishlistContext);