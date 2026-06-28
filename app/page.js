'use client'

import { useState, useEffect } from 'react'

/* ================================================================
   DATA
   ================================================================ */

const PRODUCTS = [
  {
    id: 1,
    name: "Kemeja Floral Cute",
    price: 45000,
    originalPrice: 80000,
    rating: 4.9,
    sold: 128,
    badge: "TERLARIS",
    size: "M",
    image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=400&q=80"
  },
  {
    id: 2,
    name: "Dress Pink Kawaii",
    price: 65000,
    originalPrice: 120000,
    rating: 4.8,
    sold: 256,
    badge: "DISKON 46%",
    size: "S-M",
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&q=80"
  },
  {
    id: 3,
    name: "Blouse Putih Aesthetic",
    price: 35000,
    originalPrice: null,
    rating: 4.7,
    sold: 89,
    badge: "BARU",
    size: "M-L",
    image: "https://images.unsplash.com/photo-1551489186-cf8726f514f8?w=400&q=80"
  },
  {
    id: 4,
    name: "Cardigan Pastel",
    price: 55000,
    originalPrice: 95000,
    rating: 4.9,
    sold: 312,
    badge: "TERLARIS",
    size: "M",
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&q=80"
  }
]

const NEW_PRODUCTS = [
  { id: 101, name: "Rok Mini Flare", price: 40000, originalPrice: null, rating: 4.6, sold: 34, badge: "BARU", size: "S", image: "https://images.unsplash.com/photo-1577900232427-18219b9166a0?w=400&q=80" },
  { id: 102, name: "Set Casual Cute", price: 85000, originalPrice: null, rating: 4.8, sold: 67, badge: "LARIS", size: "M", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80" },
  { id: 103, name: "Outer Knit Manis", price: 70000, originalPrice: null, rating: 4.7, sold: 45, badge: "UNIK", size: "All Size", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80" },
  { id: 104, name: "Celana Kulot Lucu", price: 50000, originalPrice: null, rating: 4.5, sold: 52, badge: "LOKAL", size: "M-L", image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400&q=80" }
]

const CATEGORIES = [
  { emoji: "👗", name: "Atasan" },
  { emoji: "👗", name: "Dress" },
  { emoji: "🧥", name: "Outer" },
  { emoji: "👖", name: "Bawahan" },
  { emoji: "👜", name: "Tas & Aksesoris" },
  { emoji: "🎀", name: "Set & Couple" }
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

function rp(n) { return 'Rp ' + n.toLocaleString('id-ID') }

/* ================================================================
   ANNOUNCEMENT BAR
   ================================================================ */
function AnnouncementBar() {
  const msg = "🎀 GRATIS ONGKIR area Sukabumi min. Rp 50.000 \u00A0\u00A0|\u00A0\u00A0 💕 COD Available! \u00A0\u00A0|\u00A0\u00A0 🎁 Preloved berkualitas pilihan \u00A0\u00A0|\u00A0\u00A0 🔒 Transaksi Aman \u00A0\u00A0\u00A0\u00A0\u00A0"
  return (
    <div className="bg-[#F472B6] text-white py-2 overflow-hidden relative select-none">
      <div className="animate-marquee whitespace-nowrap flex">
        {[0,1,2,3].map(i => <span key={i} className="inline-block text-xs sm:text-sm font-medium tracking-wide mr-12">{msg}</span>)}
      </div>
    </div>
  )
}

/* ================================================================
   NAVBAR
   ================================================================ */
function Navbar({ totalItems, onCartOpen }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])

  const links = [
    { label: 'Beranda', href: '#' },
    { label: 'Produk', href: '#produk' },
    { label: 'Kategori', href: '#kategori' },
    { label: 'Kontak', href: '#kontak' },
  ]

  return (
    <nav className={`bg-white sticky top-0 z-50 transition-shadow duration-300 ${scrolled ? 'shadow-md' : 'shadow-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex flex-col leading-tight">
            <span className="text-xl sm:text-2xl font-extrabold text-[#DB2777]">cute.clothes</span>
            <span className="text-[10px] text-[#F472B6] tracking-widest -mt-0.5">prelovedbyr</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-7">
            {links.map(l => (
              <a key={l.label} href={l.href} className="text-sm font-medium text-gray-600 hover:text-[#DB2777] transition-colors relative group">
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#DB2777] rounded-full transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center gap-2">
            {/* Wishlist */}
            <button className="p-2 rounded-full hover:bg-pink-50 transition-colors" aria-label="Wishlist">
              <svg className="w-5 h-5 text-[#DB2777]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
            {/* Cart */}
            <button onClick={onCartOpen} className="relative p-2 rounded-full hover:bg-pink-50 transition-colors" aria-label="Keranjang">
              <svg className="w-5 h-5 text-[#DB2777]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-[#F472B6] text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full pulse-glow">{totalItems}</span>
              )}
            </button>
            {/* Mobile toggle */}
            <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 rounded-lg hover:bg-pink-50 transition-colors" aria-label="Menu">
              <svg className="w-5 h-5 text-[#DB2777]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                {mobileOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 border-t border-pink-100 mt-1 pt-2 space-y-1">
            {links.map(l => (
              <a key={l.label} href={l.href} onClick={() => setMobileOpen(false)} className="block py-2 px-3 text-sm font-medium text-gray-600 hover:text-[#DB2777] hover:bg-pink-50 rounded-lg transition-colors">{l.label}</a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

/* ================================================================
   HERO
   ================================================================ */
function HeroSection() {
  const miniCards = [
    { img: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=100&q=80", name: "Kemeja Floral", price: "Rp 45.000", stars: 4.9 },
    { img: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=100&q=80", name: "Dress Pink", price: "Rp 65.000", stars: 4.8 },
    { img: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=100&q=80", name: "Cardigan Pastel", price: "Rp 55.000", stars: 4.9 },
  ]

  return (
    <section className="bg-gradient-to-b from-pink-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left */}
          <div className="space-y-6 fade-in-up">
            <span className="inline-block bg-pink-100 text-[#DB2777] text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full border border-pink-200">✨ Koleksi Terbaru 2026</span>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-gray-800 leading-tight">
              Fashion Cute,<br />
              <span className="text-[#DB2777] italic">Harga Bersahabat.</span>
            </h1>
            <p className="text-gray-500 text-base sm:text-lg max-w-md leading-relaxed">
              Temukan koleksi preloved dan thrift pilihan berkualitas. Kondisi bagus, harga terjangkau, siap COD area Sukabumi!
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#produk" className="bg-[#F472B6] text-white rounded-full px-8 py-3 font-semibold text-sm hover:bg-[#DB2777] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 pulse-glow">
                Belanja Sekarang →
              </a>
              <a href="#kategori" className="border border-pink-300 text-pink-600 rounded-full px-8 py-3 font-semibold text-sm hover:bg-pink-50 hover:border-[#DB2777] transition-all duration-300">
                Lihat Katalog
              </a>
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-2 pt-1">
              {["50+ Item Ready", "COD Sukabumi", "Kondisi Terjamin"].map(t => (
                <span key={t} className="flex items-center gap-1.5 text-sm text-gray-500">
                  <svg className="w-4 h-4 text-[#F472B6]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Decorative blobs */}
            <div className="absolute -top-10 -right-10 w-56 h-56 bg-pink-200 rounded-full opacity-25 blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-pink-300 rounded-full opacity-20 blur-2xl" />
            {/* Sparkles */}
            <span className="absolute top-2 left-6 text-2xl animate-sparkle" style={{ animationDelay: '0s' }}>✨</span>
            <span className="absolute bottom-10 right-2 text-xl animate-sparkle" style={{ animationDelay: '1s' }}>💕</span>

            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=600&q=80"
                alt="Fashion collection cute.clothes"
                className="rounded-2xl shadow-xl w-full object-cover border-4 border-white"
                style={{ height: '400px' }}
              />

              {/* Mini floating cards */}
              {miniCards.map((c, i) => {
                const positions = [
                  { className: 'absolute -left-6 top-6 sm:-left-10', delay: '0s' },
                  { className: 'absolute -right-4 top-1/2 -translate-y-1/2 sm:-right-8', delay: '0.5s' },
                  { className: 'absolute -left-4 bottom-8 sm:-left-8', delay: '1s' },
                ]
                return (
                  <div key={i} className={`${positions[i].className} hidden sm:flex bg-white rounded-xl shadow-lg p-2 items-center gap-2 animate-float`} style={{ animationDelay: positions[i].delay, width: '170px' }}>
                    <img src={c.img} alt={c.name} className="w-10 h-10 rounded-lg object-cover" />
                    <div className="min-w-0">
                      <p className="text-[11px] font-semibold text-gray-700 truncate">{c.name}</p>
                      <p className="text-[10px] font-bold text-[#DB2777]">{c.price}</p>
                      <p className="text-[9px] text-yellow-500">{'⭐'.repeat(Math.floor(c.stars))} {c.stars}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ================================================================
   KATEGORI
   ================================================================ */
function KategoriSection() {
  return (
    <section id="kategori" className="py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800 text-center mb-8">Kategori Populer</h2>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
          {CATEGORIES.map((c, i) => (
            <button key={i} className="flex flex-col items-center gap-2 bg-pink-50 hover:bg-pink-100 rounded-2xl py-5 px-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-md border border-pink-100 hover:border-pink-200 group">
              <span className="text-3xl group-hover:scale-110 transition-transform duration-300">{c.emoji}</span>
              <span className="text-xs sm:text-sm font-semibold text-gray-700">{c.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ================================================================
   PRODUCT CARD (shared)
   ================================================================ */
function ProductCard({ product, onAdd }) {
  const [liked, setLiked] = useState(false)

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100 hover:border-pink-200 hover:-translate-y-1">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img src={product.image} alt={product.name} className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500" />
        {/* Badge */}
        <span className="absolute top-2.5 left-2.5 bg-[#F472B6] text-white text-[10px] font-bold px-2.5 py-1 rounded">{product.badge}</span>
        {/* Wishlist heart */}
        <button
          onClick={() => setLiked(!liked)}
          className="absolute top-2.5 right-2.5 w-8 h-8 bg-white/80 backdrop-blur rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-sm"
          aria-label="Wishlist"
        >
          <svg className={`w-4 h-4 transition-colors ${liked ? 'text-red-500 fill-red-500' : 'text-gray-400'}`} fill={liked ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Info */}
      <div className="p-3.5 space-y-2">
        <h3 className="font-bold text-gray-800 text-sm leading-snug">{product.name}</h3>
        {/* Rating + sold */}
        <div className="flex items-center gap-1.5">
          <span className="text-yellow-400 text-xs">⭐</span>
          <span className="text-xs text-gray-500 font-medium">{product.rating}</span>
          <span className="text-gray-300 text-xs">|</span>
          <span className="text-xs text-gray-400">{product.sold} terjual</span>
        </div>
        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-[#DB2777] font-extrabold text-base">{rp(product.price)}</span>
          {product.originalPrice && (
            <span className="text-gray-400 text-xs line-through">{rp(product.originalPrice)}</span>
          )}
        </div>
        {/* Button */}
        <button
          onClick={() => onAdd(product)}
          className="w-full bg-[#F472B6] text-white py-2 rounded-full text-sm font-semibold hover:bg-[#DB2777] transition-all duration-300 flex items-center justify-center gap-1.5 mt-1 shadow-sm hover:shadow-md"
        >
          🛒 Tambah
        </button>
      </div>
    </div>
  )
}

/* ================================================================
   PRODUK TERLARIS
   ================================================================ */
function ProdukTerlaris({ onAdd }) {
  return (
    <section id="produk" className="py-12 lg:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800">🔥 Produk Terlaris</h2>
          <a href="#" className="text-sm font-semibold text-[#DB2777] hover:underline">Lihat Semua →</a>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {PRODUCTS.map(p => <ProductCard key={p.id} product={p} onAdd={onAdd} />)}
        </div>
      </div>
    </section>
  )
}

/* ================================================================
   PROMO BANNER
   ================================================================ */
function PromoBanner() {
  const [timeLeft, setTimeLeft] = useState({ h: 23, m: 59, s: 59 })

  useEffect(() => {
    const end = Date.now() + 24 * 60 * 60 * 1000
    const tick = () => {
      const diff = Math.max(0, end - Date.now())
      const h = Math.floor(diff / 3600000)
      const m = Math.floor((diff % 3600000) / 60000)
      const s = Math.floor((diff % 60000) / 1000)
      setTimeLeft({ h, m, s })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  const pad = n => String(n).padStart(2, '0')

  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-5">
          {/* Promo Kilat */}
          <div className="bg-gradient-to-br from-[#F472B6] to-[#DB2777] rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden">
            <div className="absolute -top-8 -right-8 w-36 h-36 bg-white/10 rounded-full" />
            <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-white/5 rounded-full" />
            <div className="relative z-10">
              <span className="text-2xl sm:text-3xl">⚡</span>
              <p className="text-white/80 text-sm font-medium mt-1">Promo Kilat!</p>
              <h3 className="text-2xl sm:text-3xl font-extrabold mt-1">Diskon Hingga 70%</h3>
              {/* Countdown */}
              <div className="flex gap-2 mt-4">
                {[
                  { val: pad(timeLeft.h), label: 'Jam' },
                  { val: pad(timeLeft.m), label: 'Menit' },
                  { val: pad(timeLeft.s), label: 'Detik' }
                ].map((t, i) => (
                  <div key={i} className="bg-white/20 backdrop-blur rounded-lg px-3 py-2 text-center min-w-[52px]">
                    <div className="text-xl sm:text-2xl font-extrabold flip-in" key={t.val}>{t.val}</div>
                    <div className="text-[10px] text-white/70 font-medium">{t.label}</div>
                  </div>
                ))}
              </div>
              <a href="#produk" className="inline-block mt-5 bg-white text-[#DB2777] px-6 py-2.5 rounded-full text-sm font-bold hover:bg-pink-50 transition-colors shadow-md">
                Lihat Promo →
              </a>
            </div>
          </div>

          {/* Member Baru */}
          <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-6 sm:p-8 relative overflow-hidden border border-pink-200">
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-pink-200/40 rounded-full" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-pink-200/30 rounded-full" />
            <div className="relative z-10">
              <span className="text-2xl sm:text-3xl">🎀</span>
              <p className="text-[#DB2777] text-sm font-medium mt-1">Member Baru</p>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mt-1">Diskon 20% Pertama</h3>
              <p className="text-gray-500 text-sm mt-2">Gratis untuk pembeli pertama!</p>
              <a
                href="https://wa.me/6285721125067"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-5 bg-[#F472B6] text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-[#DB2777] transition-colors shadow-md"
              >
                Chat WA →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ================================================================
   PRODUK BARU MASUK
   ================================================================ */
function ProdukBaru({ onAdd }) {
  return (
    <section className="py-12 lg:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800">🆕 Baru Masuk</h2>
          <a href="#" className="text-sm font-semibold text-[#DB2777] hover:underline">Lihat Semua →</a>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {NEW_PRODUCTS.map(p => <ProductCard key={p.id} product={p} onAdd={onAdd} />)}
        </div>
      </div>
    </section>
  )
}

/* ================================================================
   KEUNGGULAN
   ================================================================ */
function KeunggulanSection() {
  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {ADVANTAGES.map((a, i) => (
            <div key={i} className="bg-pink-50 rounded-2xl p-5 sm:p-6 text-center group hover:bg-pink-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-md border border-pink-100">
              <span className="text-3xl sm:text-4xl block mb-3 group-hover:scale-110 transition-transform duration-300">{a.icon}</span>
              <h3 className="text-sm sm:text-base font-bold text-gray-800 mb-1">{a.title}</h3>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ================================================================
   TESTIMONI
   ================================================================ */
function TestimoniSection() {
  return (
    <section className="py-12 lg:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800 text-center mb-8">⭐ Kata Pembeli Kami</h2>
        <div className="grid md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-sm hover:shadow-lg p-6 border border-gray-100 hover:border-pink-200 transition-all duration-300 hover:-translate-y-1 relative">
              <span className="absolute top-4 right-5 text-4xl text-pink-100 font-serif leading-none select-none">"</span>
              <div className="text-yellow-400 text-sm mb-3 flex gap-0.5">{[...Array(t.stars)].map((_, j) => <span key={j}>⭐</span>)}</div>
              <p className="text-gray-600 text-sm leading-relaxed mb-5 italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">{t.initial}</div>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">{t.name}</p>
                  <p className="text-[11px] text-gray-400">{t.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ================================================================
   FOOTER
   ================================================================ */
function Footer() {
  return (
    <footer id="kontak" className="bg-[#1F2937] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-xl font-extrabold mb-2">cute.clothes 🎀</h3>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">Preloved & Thrift Fashion Sukabumi</p>
            <div className="flex gap-3">
              {/* Instagram */}
              <a href="https://instagram.com/cuteclothessly" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-gray-700 hover:bg-[#F472B6] rounded-full flex items-center justify-center transition-colors" aria-label="Instagram">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
              </a>
              {/* WhatsApp */}
              <a href="https://wa.me/6285721125067" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-gray-700 hover:bg-[#25D366] rounded-full flex items-center justify-center transition-colors" aria-label="WhatsApp">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              </a>
              {/* TikTok */}
              <a href="#" className="w-9 h-9 bg-gray-700 hover:bg-[#F472B6] rounded-full flex items-center justify-center transition-colors" aria-label="TikTok">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.48V13a8.28 8.28 0 005.58 2.15v-3.44a4.85 4.85 0 01-3-.97v.01l.01-4.06h-.01z" /></svg>
              </a>
            </div>
          </div>

          {/* Layanan */}
          <div>
            <h4 className="font-bold text-sm mb-4 text-white">Layanan</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              {["Tentang Kami", "Cara Order", "COD Info", "Hubungi Kami"].map(l => (
                <li key={l}><a href="#" className="hover:text-[#F472B6] transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Kategori */}
          <div>
            <h4 className="font-bold text-sm mb-4 text-white">Kategori</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              {["Atasan", "Dress", "Outer", "Bawahan", "Aksesoris"].map(l => (
                <li key={l}><a href="#" className="hover:text-[#F472B6] transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Pembayaran & Pengiriman */}
          <div>
            <h4 className="font-bold text-sm mb-4 text-white">Metode Pembayaran</h4>
            <div className="flex flex-wrap gap-2 mb-5">
              {["BCA", "BRI", "GoPay", "OVO", "Dana"].map(p => (
                <span key={p} className="bg-gray-700 text-gray-300 text-[10px] font-semibold px-2.5 py-1 rounded">{p}</span>
              ))}
            </div>
            <h4 className="font-bold text-sm mb-3 text-white">Pengiriman</h4>
            <div className="flex flex-wrap gap-2">
              {["JNE", "J&T", "SiCepat"].map(p => (
                <span key={p} className="bg-gray-700 text-gray-300 text-[10px] font-semibold px-2.5 py-1 rounded">{p}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-gray-500 text-xs">© 2026 cute.clothes. All rights reserved.</p>
          <p className="text-gray-600 text-xs">Website by <span className="text-[#F472B6] font-semibold">DiCode</span></p>
        </div>
      </div>
    </footer>
  )
}

/* ================================================================
   CART DRAWER
   ================================================================ */
function CartDrawer({ cart, onClose, onUpdate, onRemove, totalHarga, pesanWA }) {
  return (
    <>
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50" onClick={onClose} />
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-pink-100">
          <h2 className="text-lg font-bold text-gray-800">🛒 Keranjang Belanja</h2>
          <button onClick={onClose} className="p-1.5 rounded-full hover:bg-pink-50 transition-colors" aria-label="Tutup">
            <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-5 space-y-3">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-400">
              <span className="text-5xl mb-3">🛒</span>
              <p className="text-sm font-medium">Keranjang masih kosong 🎀</p>
              <p className="text-xs mt-1 text-gray-300">Yuk, pilih item favoritmu!</p>
            </div>
          ) : (
            cart.map(item => (
              <div key={item.id} className="flex gap-3 bg-pink-50/60 rounded-xl p-3 border border-pink-100">
                <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg object-cover shrink-0" />
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-gray-800 truncate">{item.name}</h3>
                  <p className="text-xs text-gray-400">Size: {item.size || '?'}</p>
                  <p className="text-xs text-[#DB2777] font-bold mt-0.5">{rp(item.price)}</p>
                  <div className="flex items-center gap-2 mt-1.5">
                    <button onClick={() => onUpdate(item.id, item.qty - 1)} className="w-6 h-6 flex items-center justify-center rounded-full bg-pink-100 text-[#DB2777] text-xs font-bold hover:bg-pink-200 transition-colors">−</button>
                    <span className="text-sm font-semibold text-gray-700 w-5 text-center">{item.qty}</span>
                    <button onClick={() => onUpdate(item.id, item.qty + 1)} className="w-6 h-6 flex items-center justify-center rounded-full bg-pink-100 text-[#DB2777] text-xs font-bold hover:bg-pink-200 transition-colors">+</button>
                  </div>
                </div>
                <div className="flex flex-col items-end justify-between">
                  <button onClick={() => onRemove(item.id)} className="text-gray-300 hover:text-red-400 transition-colors p-0.5" aria-label="Hapus">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                  <span className="text-sm font-bold text-[#DB2777]">{rp(item.price * item.qty)}</span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="border-t border-pink-100 p-5 space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-500">Total</span>
              <span className="text-xl font-extrabold text-[#DB2777]">{rp(totalHarga)}</span>
            </div>
            <button
              onClick={pesanWA}
              className="w-full bg-[#25D366] text-white py-3 rounded-full font-semibold text-sm hover:bg-[#20bd5a] transition-colors shadow-lg flex items-center justify-center gap-2"
            >
              💬 Chat WA untuk Order
            </button>
          </div>
        )}
      </div>
    </>
  )
}

/* ================================================================
   MAIN PAGE
   ================================================================ */
export default function Home() {
  const [cart, setCart] = useState([])
  const [cartOpen, setCartOpen] = useState(false)

  const totalItems = cart.reduce((a, b) => a + b.qty, 0)
  const totalHarga = cart.reduce((a, b) => a + b.price * b.qty, 0)

  function addToCart(product) {
    setCart(prev => {
      const exists = prev.find(i => i.id === product.id)
      if (exists) {
        return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i)
      }
      return [...prev, { ...product, qty: 1 }]
    })
  }

  function removeFromCart(id) {
    setCart(prev => prev.filter(i => i.id !== id))
  }

  function updateQty(id, qty) {
    if (qty <= 0) return removeFromCart(id)
    setCart(prev => prev.map(i => i.id === id ? { ...i, qty } : i))
  }

  function pesanWA() {
    const pesan =
      "Halo cute.clothes! Saya mau order:\n" +
      cart.map(i => `- ${i.name} (Size: ${i.size || '?'}) x${i.qty} = Rp ${(i.price * i.qty).toLocaleString('id-ID')}`).join('\n') +
      `\n\nTotal: Rp ${totalHarga.toLocaleString('id-ID')}\n\nMohon konfirmasi ketersediaan ya kak 🎀`
    window.open('https://wa.me/6285721125067?text=' + encodeURIComponent(pesan))
  }

  return (
    <main className="flex-1">
      <AnnouncementBar />
      <Navbar totalItems={totalItems} onCartOpen={() => setCartOpen(true)} />
      <HeroSection />
      <KategoriSection />
      <ProdukTerlaris onAdd={addToCart} />
      <PromoBanner />
      <ProdukBaru onAdd={addToCart} />
      <KeunggulanSection />
      <TestimoniSection />
      <Footer />

      {cartOpen && (
        <CartDrawer
          cart={cart}
          onClose={() => setCartOpen(false)}
          onUpdate={updateQty}
          onRemove={removeFromCart}
          totalHarga={totalHarga}
          pesanWA={pesanWA}
        />
      )}
    </main>
  )
}
