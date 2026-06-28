'use client'

import { useState, useEffect } from 'react'

const BESTSELLER = [
  { id: 1, name: "Kemeja Floral Cute", price: 45000, originalPrice: 80000, rating: 4.9, sold: 128, badge: "TERLARIS", image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=400&q=80" },
  { id: 2, name: "Dress Pink Kawaii", price: 65000, originalPrice: 120000, rating: 4.8, sold: 256, badge: "DISKON 46%", image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&q=80" },
  { id: 3, name: "Blouse Putih Aesthetic", price: 35000, originalPrice: null, rating: 4.7, sold: 89, badge: "BARU", image: "https://images.unsplash.com/photo-1551489186-cf8726f514f8?w=400&q=80" },
  { id: 4, name: "Cardigan Pastel", price: 55000, originalPrice: 95000, rating: 4.9, sold: 312, badge: "TERLARIS", image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&q=80" }
]

const NEW_PRODUCTS = [
  { id: 5, name: "Rok Mini Flare", price: 40000, badge: "BARU", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80" },
  { id: 6, name: "Set Casual Cute", price: 85000, badge: "LARIS", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80" },
  { id: 7, name: "Outer Knit Manis", price: 70000, badge: "UNIK", image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=80" },
  { id: 8, name: "Celana Kulot Lucu", price: 50000, badge: "LOKAL", image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400&q=80" }
]

const CATEGORIES = [
  { emoji: "👗", name: "Atasan", color: "bg-pink-100 text-pink-700 hover:bg-pink-200" },
  { emoji: "👗", name: "Dress", color: "bg-purple-100 text-purple-700 hover:bg-purple-200" },
  { emoji: "🧥", name: "Outer", color: "bg-blue-100 text-blue-700 hover:bg-blue-200" },
  { emoji: "👖", name: "Bawahan", color: "bg-green-100 text-green-700 hover:bg-green-200" },
  { emoji: "👜", name: "Tas & Aksesoris", color: "bg-yellow-100 text-yellow-700 hover:bg-yellow-200" },
  { emoji: "🎀", name: "Set & Couple", color: "bg-rose-100 text-rose-700 hover:bg-rose-200" }
]

const ADVANTAGES = [
  { icon: "🚚", title: "Gratis Ongkir", desc: "Min. pembelian Rp 50.000 area Sukabumi" },
  { icon: "🔄", title: "COD Available", desc: "Bayar di tempat, lihat dulu kondisinya" },
  { icon: "🔒", title: "Terjamin Aman", desc: "Semua item dicek kualitasnya sebelum dijual" },
  { icon: "💬", title: "Respon Cepat", desc: "Siap membantu kapan saja via WhatsApp" }
]

const TESTIMONIALS = [
  { stars: 5, text: "Bajunya bagus banget! Kondisinya kayak baru, harga murah. Packing rapi. Pasti beli lagi!", initial: "R", name: "Rina S", label: "Pembeli Terverifikasi" },
  { stars: 5, text: "COD-nya gampang, barangnya sesuai foto. Udah order 3x dan ga pernah kecewa. Recommended!", initial: "B", name: "Budi W", label: "Pembeli Terverifikasi" },
  { stars: 5, text: "Seller ramah dan responsif. Preloved tapi kualitasnya oke banget. Jadi langganan!", initial: "S", name: "Sari A", label: "Pembeli Terverifikasi" }
]

function formatRp(num) {
  return "Rp " + num.toLocaleString("id-ID")
}

export default function Home() {
  const [cart, setCart] = useState([])
  const [cartOpen, setCartOpen] = useState(false)
  const [wishlist, setWishlist] = useState([])
  const [countdown, setCountdown] = useState({ jam: 6, menit: 23, detik: 45 })
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        let { jam, menit, detik } = prev
        if (detik > 0) {
          detik -= 1
        } else {
          detik = 59
          if (menit > 0) {
            menit -= 1
          } else {
            menit = 59
            if (jam > 0) {
              jam -= 1
            } else {
              jam = 23
            }
          }
        }
        return { jam, menit, detik }
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  function addToCart(product) {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id)
      if (exists) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      } else {
        return [...prev, { ...product, qty: 1 }]
      }
    })
    setCartOpen(true)
  }

  function removeFromCart(id) {
    setCart((prev) => prev.filter((item) => item.id !== id))
  }

  function updateQty(id, delta) {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.qty + delta
            return newQty > 0 ? { ...item, qty: newQty } : null
          }
          return item
        })
        .filter(Boolean)
    )
  }

  function toggleWishlist(id) {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    )
  }

  const totalItems = cart.reduce((a, b) => a + b.qty, 0)
  const totalHarga = cart.reduce((a, b) => a + b.price * b.qty, 0)

  function handleOrderWA() {
    if (cart.length === 0) return
    const listBarang = cart
      .map((item) => `- ${item.name} x${item.qty} (${formatRp(item.price * item.qty)})`)
      .join("\n")
    const pesan = `Halo cute.clothes! Saya mau order:\n${listBarang}\nTotal: ${formatRp(totalHarga)}\nMohon konfirmasi ya kak 🎀`
    window.open(`https://wa.me/6285721125067?text=${encodeURIComponent(pesan)}`, "_blank")
  }

  const pad = (num) => String(num).padStart(2, "0")

  return (
    <div className="min-h-screen bg-white text-[#1F2937] flex flex-col font-sans">
      {/* ================= ANNOUNCEMENT BAR ================= */}
      <div className="bg-[#F472B6] text-white text-xs sm:text-sm py-2 overflow-hidden relative font-medium">
        <div className="animate-marquee whitespace-nowrap flex">
          {[1, 2, 3, 4].map((i) => (
            <span key={i} className="mx-4 inline-block">
              🎀 GRATIS ONGKIR area Sukabumi min. Rp 50.000 &nbsp;|&nbsp; 💕 COD Available! &nbsp;|&nbsp; 🎁 Preloved berkualitas &nbsp;|&nbsp; 🔒 Transaksi Aman &nbsp;&nbsp;&nbsp;&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* ================= NAVBAR ================= */}
      <header className="sticky top-0 z-40 bg-white shadow-sm border-b border-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#" className="flex flex-col shrink-0">
            <span className="text-xl sm:text-2xl font-extrabold text-[#DB2777] tracking-tight">cute.clothes</span>
            <span className="text-[10px] text-[#F472B6] font-semibold tracking-widest -mt-1">PRELOVED & THRIFT</span>
          </a>

          {/* Search Bar */}
          <div className="flex-1 max-w-md hidden sm:flex items-center relative">
            <input
              type="text"
              placeholder="Cari atasan, dress, atau outer..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-4 pr-24 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:border-[#F472B6] focus:bg-white transition-all"
            />
            <button className="absolute right-1 top-1 bottom-1 bg-[#F472B6] hover:bg-[#DB2777] text-white px-4 rounded-full text-xs font-semibold transition-colors">
              Cari
            </button>
          </div>

          {/* Icons & Action */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            <button className="relative p-2 text-gray-600 hover:text-[#DB2777] transition-colors">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              {wishlist.length > 0 && (
                <span className="absolute top-1 right-1 bg-[#DB2777] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </button>

            <button
              onClick={() => setCartOpen(true)}
              className="relative p-2 text-gray-600 hover:text-[#DB2777] transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
              </svg>
              {totalItems > 0 && (
                <span className="absolute top-1 right-1 bg-[#F472B6] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>

            <button className="border border-[#F472B6] text-[#DB2777] hover:bg-[#F472B6] hover:text-white px-4 py-1.5 rounded-full text-sm font-semibold transition-all">
              Masuk
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="sm:hidden px-4 pb-3">
          <div className="flex items-center relative">
            <input
              type="text"
              placeholder="Cari fashion preloved..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-4 pr-20 py-2 bg-gray-50 border border-gray-200 rounded-full text-xs focus:outline-none focus:border-[#F472B6]"
            />
            <button className="absolute right-1 top-1 bottom-1 bg-[#F472B6] text-white px-3 rounded-full text-xs font-semibold">
              Cari
            </button>
          </div>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-r from-[#9D174D] to-[#DB2777] text-white py-12 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Kiri */}
            <div className="space-y-6 z-10">
              <span className="inline-block bg-white/20 backdrop-blur-md text-white text-xs sm:text-sm px-4 py-1.5 rounded-full font-semibold border border-white/30">
                ✨ Koleksi Terbaru 2026
              </span>
              <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight">
                Fashion Cute, <br />
                <span className="text-amber-300 italic font-serif">Harga Bersahabat.</span>
              </h1>
              <p className="text-white/90 text-sm sm:text-lg max-w-lg leading-relaxed">
                Temukan koleksi preloved dan thrift pilihan berkualitas. COD area Sukabumi!
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="#produk"
                  className="bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold px-6 sm:px-8 py-3 sm:py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 text-sm sm:text-base"
                >
                  Belanja Sekarang →
                </a>
                <a
                  href="#kategori"
                  className="border-2 border-white hover:bg-white hover:text-[#DB2777] text-white font-bold px-6 sm:px-8 py-3 sm:py-3.5 rounded-full transition-all text-sm sm:text-base"
                >
                  Lihat Katalog
                </a>
              </div>

              <div className="pt-6 border-t border-white/20 flex flex-wrap gap-6 text-xs sm:text-sm font-medium">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-emerald-400 text-gray-900 flex items-center justify-center font-bold text-xs">✓</span>
                  50+ Item Ready
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-emerald-400 text-gray-900 flex items-center justify-center font-bold text-xs">✓</span>
                  COD Sukabumi
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-emerald-400 text-gray-900 flex items-center justify-center font-bold text-xs">✓</span>
                  Kondisi Terjamin
                </div>
              </div>
            </div>

            {/* Kanan */}
            <div className="relative flex justify-center items-center">
              {/* Badge Diskon */}
              <div className="absolute top-4 right-4 sm:-top-4 sm:right-4 z-20 bg-red-600 text-white font-black text-xs sm:text-sm px-4 py-2 rounded-full shadow-xl animate-bounce">
                DISKON 50%
              </div>

              {/* Main Photo */}
              <div className="relative w-72 sm:w-96 h-80 sm:h-[420px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
                <img
                  src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=600&q=80"
                  alt="Fashion Hero"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Card 1 */}
              <div className="absolute -left-2 sm:left-0 bottom-12 bg-white text-gray-800 p-3 rounded-2xl shadow-xl flex items-center gap-3 z-20 max-w-[200px] border border-pink-100">
                <img
                  src="https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=100&q=80"
                  alt="Kemeja Floral"
                  className="w-12 h-12 rounded-xl object-cover shrink-0"
                />
                <div>
                  <h4 className="font-bold text-xs truncate">Kemeja Floral</h4>
                  <p className="text-[#DB2777] font-extrabold text-xs">Rp 45.000</p>
                  <div className="text-[10px] text-yellow-500">★ 4.9</div>
                </div>
              </div>

              {/* Floating Card 2 */}
              <div className="absolute -right-2 sm:right-4 top-16 bg-white text-gray-800 p-3 rounded-2xl shadow-xl flex items-center gap-3 z-20 max-w-[200px] border border-pink-100">
                <img
                  src="https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=100&q=80"
                  alt="Dress Pink Kawaii"
                  className="w-12 h-12 rounded-xl object-cover shrink-0"
                />
                <div>
                  <h4 className="font-bold text-xs truncate">Dress Kawaii</h4>
                  <p className="text-[#DB2777] font-extrabold text-xs">Rp 65.000</p>
                  <div className="text-[10px] text-yellow-500">★ 4.8</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= KATEGORI POPULER ================= */}
      <section id="kategori" className="py-8 sm:py-12 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg sm:text-xl font-bold text-gray-800">Kategori Populer</h2>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.map((cat, idx) => (
              <button
                key={idx}
                className={`flex items-center gap-2 px-5 py-3 rounded-full font-bold text-xs sm:text-sm whitespace-nowrap shadow-sm transition-all transform hover:scale-105 ${cat.color}`}
              >
                <span className="text-base sm:text-lg">{cat.emoji}</span>
                <span>{cat.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PRODUK TERLARIS ================= */}
      <section id="produk" className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">🔥 Produk Terlaris</h2>
            <a href="#produk" className="text-sm font-bold text-[#DB2777] hover:underline flex items-center gap-1">
              Lihat Semua →
            </a>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {BESTSELLER.map((item) => {
              const isWishlisted = wishlist.includes(item.id)
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden group relative"
                >
                  {/* Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="bg-[#F472B6] text-white text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-full shadow-md">
                      {item.badge}
                    </span>
                  </div>

                  {/* Wishlist Button */}
                  <button
                    onClick={() => toggleWishlist(item.id)}
                    className="absolute top-3 right-3 z-10 w-8 h-8 bg-white/80 backdrop-blur rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 shadow-md transition-colors"
                  >
                    <svg className={`w-4 h-4 ${isWishlisted ? "text-red-500 fill-red-500" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>

                  {/* Image */}
                  <div className="relative aspect-square w-full overflow-hidden bg-gray-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4 flex flex-col flex-1 justify-between">
                    <div>
                      <h3 className="font-bold text-gray-800 text-sm sm:text-base line-clamp-1 group-hover:text-[#DB2777] transition-colors">
                        {item.name}
                      </h3>
                      
                      {/* Rating & Sold */}
                      <div className="flex items-center gap-1.5 mt-1 text-xs text-gray-500">
                        <span className="text-amber-400 font-bold">★</span>
                        <span className="font-semibold text-gray-700">{item.rating}</span>
                        <span>•</span>
                        <span>Terjual {item.sold}</span>
                      </div>

                      {/* Prices */}
                      <div className="mt-2 flex items-baseline gap-2">
                        <span className="text-base sm:text-lg font-black text-[#DB2777]">
                          {formatRp(item.price)}
                        </span>
                        {item.originalPrice && (
                          <span className="text-xs text-gray-400 line-through">
                            {formatRp(item.originalPrice)}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Add to Cart Button */}
                    <button
                      onClick={() => addToCart(item)}
                      className="mt-4 w-full bg-[#F472B6] hover:bg-[#DB2777] text-white font-bold py-2 sm:py-2.5 rounded-full text-xs sm:text-sm transition-all shadow-sm hover:shadow flex items-center justify-center gap-2"
                    >
                      <span>🛒</span> Tambah
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ================= PROMO BANNER ================= */}
      <section className="py-8 sm:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Kartu Kiri */}
            <div className="bg-[#F472B6] text-white rounded-3xl p-6 sm:p-8 shadow-lg flex flex-col justify-between relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-white/10 rounded-full blur-xl pointer-events-none" />
              <div>
                <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  ⚡ Promo Kilat!
                </span>
                <h3 className="text-3xl sm:text-4xl font-black mt-4 mb-2">
                  Diskon Hingga 70%
                </h3>
                <p className="text-white/90 text-sm mb-6">
                  Berlaku untuk item terpilih hari ini saja!
                </p>

                {/* Countdown Timer */}
                <div className="flex items-center gap-2 sm:gap-3 mb-6">
                  <div className="bg-white/20 backdrop-blur rounded-xl p-2.5 sm:p-3 text-center min-w-[54px]">
                    <div className="text-xl sm:text-2xl font-black">{pad(countdown.jam)}</div>
                    <div className="text-[10px] uppercase tracking-wider font-semibold">Jam</div>
                  </div>
                  <span className="text-xl font-bold">:</span>
                  <div className="bg-white/20 backdrop-blur rounded-xl p-2.5 sm:p-3 text-center min-w-[54px]">
                    <div className="text-xl sm:text-2xl font-black">{pad(countdown.menit)}</div>
                    <div className="text-[10px] uppercase tracking-wider font-semibold">Menit</div>
                  </div>
                  <span className="text-xl font-bold">:</span>
                  <div className="bg-white/20 backdrop-blur rounded-xl p-2.5 sm:p-3 text-center min-w-[54px]">
                    <div className="text-xl sm:text-2xl font-black">{pad(countdown.detik)}</div>
                    <div className="text-[10px] uppercase tracking-wider font-semibold">Detik</div>
                  </div>
                </div>
              </div>

              <div>
                <a
                  href="#produk"
                  className="inline-block border-2 border-white text-white hover:bg-white hover:text-[#F472B6] font-bold px-6 py-2.5 rounded-full text-sm transition-all"
                >
                  Lihat Promo Kilat →
                </a>
              </div>
            </div>

            {/* Kartu Kanan */}
            <div className="bg-[#DB2777] text-white rounded-3xl p-6 sm:p-8 shadow-lg flex flex-col justify-between relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-white/10 rounded-full blur-xl pointer-events-none" />
              <div>
                <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  🎀 Member Baru
                </span>
                <h3 className="text-3xl sm:text-4xl font-black mt-4 mb-2">
                  Diskon 20% Pertama
                </h3>
                <p className="text-white/90 text-sm sm:text-base mb-6">
                  Gratis untuk pembeli pertama! Dapatkan potongan langsung konsultasi ukuran & styling.
                </p>
              </div>

              <div>
                <a
                  href="https://wa.me/6285721125067"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border-2 border-white text-white hover:bg-white hover:text-[#DB2777] font-bold px-6 py-2.5 rounded-full text-sm transition-all"
                >
                  Chat WA →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BARU MASUK ================= */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">🆕 Baru Masuk</h2>
            <a href="#produk" className="text-sm font-bold text-[#DB2777] hover:underline flex items-center gap-1">
              Lihat Semua →
            </a>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {NEW_PRODUCTS.map((item) => {
              const isWishlisted = wishlist.includes(item.id)
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden group relative"
                >
                  {/* Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="bg-[#DB2777] text-white text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-full shadow-md">
                      {item.badge}
                    </span>
                  </div>

                  {/* Wishlist Button */}
                  <button
                    onClick={() => toggleWishlist(item.id)}
                    className="absolute top-3 right-3 z-10 w-8 h-8 bg-white/80 backdrop-blur rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 shadow-md transition-colors"
                  >
                    <svg className={`w-4 h-4 ${isWishlisted ? "text-red-500 fill-red-500" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>

                  {/* Image */}
                  <div className="relative aspect-square w-full overflow-hidden bg-gray-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4 flex flex-col flex-1 justify-between">
                    <div>
                      <h3 className="font-bold text-gray-800 text-sm sm:text-base line-clamp-1 group-hover:text-[#DB2777] transition-colors">
                        {item.name}
                      </h3>
                      <div className="mt-2">
                        <span className="text-base sm:text-lg font-black text-[#DB2777]">
                          {formatRp(item.price)}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => addToCart(item)}
                      className="mt-4 w-full bg-[#F472B6] hover:bg-[#DB2777] text-white font-bold py-2 sm:py-2.5 rounded-full text-xs sm:text-sm transition-all shadow-sm hover:shadow flex items-center justify-center gap-2"
                    >
                      <span>🛒</span> Tambah
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ================= KEUNGGULAN ================= */}
      <section className="py-12 bg-pink-50/50 border-y border-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ADVANTAGES.map((adv, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-pink-100 flex items-start gap-4">
                <div className="text-3xl shrink-0 p-3 bg-pink-50 rounded-2xl">{adv.icon}</div>
                <div>
                  <h4 className="font-extrabold text-gray-900 text-base mb-1">{adv.title}</h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{adv.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TESTIMONI ================= */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">⭐ Kata Pembeli Kami</h2>
            <p className="text-gray-500 text-sm sm:text-base">Kepercayaan dan kepuasan pelanggan adalah prioritas utama cute.clothes</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((testi, idx) => (
              <div key={idx} className="bg-gray-50 p-6 sm:p-8 rounded-3xl border border-gray-100 flex flex-col justify-between relative">
                <div>
                  <div className="text-amber-400 text-sm mb-4">
                    {"★".repeat(testi.stars)}
                  </div>
                  <p className="text-gray-700 italic text-sm sm:text-base leading-relaxed mb-6">
                    "{testi.text}"
                  </p>
                </div>
                
                <div className="flex items-center gap-3 pt-4 border-t border-gray-200/60">
                  <div className="w-10 h-10 rounded-full bg-[#F472B6] text-white font-bold flex items-center justify-center shrink-0 shadow-md">
                    {testi.initial}
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900 text-sm">{testi.name}</h5>
                    <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">
                      {testi.label}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#1F2937] text-white pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-gray-800">
            {/* Kolom 1 */}
            <div className="space-y-4">
              <a href="#" className="inline-block">
                <span className="text-2xl font-black text-[#F472B6]">cute.clothes 🎀</span>
              </a>
              <p className="text-gray-400 text-sm leading-relaxed">
                Preloved & Thrift Fashion Sukabumi. Kurasi baju wanita kondisi terbaik dengan harga terjangkau.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <a href="#" className="w-9 h-9 rounded-full bg-gray-800 hover:bg-[#F472B6] flex items-center justify-center transition-colors text-sm">
                  📱
                </a>
                <a href="https://instagram.com/cuteclothessly" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-gray-800 hover:bg-[#F472B6] flex items-center justify-center transition-colors text-sm">
                  📸
                </a>
                <a href="https://wa.me/6285721125067" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-gray-800 hover:bg-[#25D366] flex items-center justify-center transition-colors text-sm">
                  💬
                </a>
              </div>
            </div>

            {/* Kolom 2 */}
            <div>
              <h4 className="font-bold text-base mb-4 text-white">Layanan</h4>
              <ul className="space-y-2.5 text-sm text-gray-400">
                <li><a href="#" className="hover:text-[#F472B6] transition-colors">Tentang Kami</a></li>
                <li><a href="#" className="hover:text-[#F472B6] transition-colors">Cara Order</a></li>
                <li><a href="#" className="hover:text-[#F472B6] transition-colors">COD Info</a></li>
                <li><a href="#" className="hover:text-[#F472B6] transition-colors">Hubungi Kami</a></li>
              </ul>
            </div>

            {/* Kolom 3 */}
            <div>
              <h4 className="font-bold text-base mb-4 text-white">Kategori</h4>
              <ul className="space-y-2.5 text-sm text-gray-400">
                <li><a href="#kategori" className="hover:text-[#F472B6] transition-colors">Atasan</a></li>
                <li><a href="#kategori" className="hover:text-[#F472B6] transition-colors">Dress</a></li>
                <li><a href="#kategori" className="hover:text-[#F472B6] transition-colors">Outer</a></li>
                <li><a href="#kategori" className="hover:text-[#F472B6] transition-colors">Bawahan</a></li>
                <li><a href="#kategori" className="hover:text-[#F472B6] transition-colors">Aksesoris</a></li>
              </ul>
            </div>

            {/* Kolom 4 */}
            <div>
              <h4 className="font-bold text-base mb-4 text-white">Metode Pembayaran</h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {["BCA", "BRI", "GoPay", "OVO", "Dana"].map((bank) => (
                  <span key={bank} className="bg-gray-800 text-gray-300 font-semibold text-xs px-3 py-1.5 rounded-lg border border-gray-700">
                    {bank}
                  </span>
                ))}
              </div>

              <h4 className="font-bold text-base mb-3 text-white">Pengiriman</h4>
              <div className="flex flex-wrap gap-2">
                {["JNE", "J&T", "SiCepat"].map((kurir) => (
                  <span key={kurir} className="bg-gray-800 text-gray-300 font-semibold text-xs px-3 py-1.5 rounded-lg border border-gray-700">
                    {kurir}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
            <p>© 2026 cute.clothes | Semua hak dilindungi.</p>
            <p>Situs web dibuat oleh <span className="text-[#F472B6] font-bold">DiCode</span></p>
          </div>
        </div>
      </footer>

      {/* ================= SIDEBAR KERANJANG ================= */}
      {cartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Overlay */}
          <div
            onClick={() => setCartOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
          />

          {/* Drawer */}
          <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
              {/* Drawer Header */}
              <div className="p-5 bg-white border-b border-gray-100 flex items-center justify-between">
                <h3 className="font-extrabold text-lg text-gray-900 flex items-center gap-2">
                  <span>🛒</span> Keranjang Belanja
                </h3>
                <button
                  onClick={() => setCartOpen(false)}
                  className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors"
                >
                  ✕
                </button>
              </div>

              {/* Drawer Body / List */}
              <div className="flex-1 overflow-y-auto p-5 space-y-4">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center text-gray-400 space-y-3">
                    <div className="text-6xl">🛒</div>
                    <p className="font-bold text-base text-gray-600">Keranjang masih kosong 🎀</p>
                    <p className="text-xs">Yuk pilih baju preloved favoritmu sebelum kehabisan!</p>
                  </div>
                ) : (
                  cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-4 p-3 bg-gray-50 rounded-2xl border border-gray-100 items-center"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 rounded-xl object-cover shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-sm text-gray-800 truncate">{item.name}</h4>
                        <p className="text-[#DB2777] font-black text-xs mt-0.5">{formatRp(item.price)}</p>
                        
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() => updateQty(item.id, -1)}
                            className="w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center text-xs font-bold text-gray-600 hover:bg-gray-100"
                          >
                            -
                          </button>
                          <span className="text-xs font-bold w-4 text-center">{item.qty}</span>
                          <button
                            onClick={() => updateQty(item.id, 1)}
                            className="w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center text-xs font-bold text-gray-600 hover:bg-gray-100"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      
                      <div className="flex flex-col items-end justify-between h-16">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-gray-400 hover:text-red-500 text-xs transition-colors p-1"
                        >
                          🗑️
                        </button>
                        <span className="font-bold text-xs text-gray-800">
                          {formatRp(item.price * item.qty)}
                        </span>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Drawer Footer */}
              {cart.length > 0 && (
                <div className="p-5 bg-gray-50 border-t border-gray-100 space-y-4">
                  <div className="flex items-center justify-between text-base font-extrabold text-gray-900">
                    <span>Total Harga:</span>
                    <span className="text-[#DB2777] text-xl">{formatRp(totalHarga)}</span>
                  </div>
                  <button
                    onClick={handleOrderWA}
                    className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    <span>💬</span> Chat WA untuk Order
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
