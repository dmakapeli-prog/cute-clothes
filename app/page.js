'use client'

import { useState, useEffect, useRef } from 'react'

const PRODUCTS = [
  {
    id: 1,
    name: "Kemeja Floral Cute",
    price: 45000,
    condition: "Kondisi: Baik",
    size: "M",
    description: "Kemeja floral motif bunga, warna pastel. Cocok untuk daily look.",
    image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=400",
    badge: "READY"
  },
  {
    id: 2,
    name: "Dress Pink Kawaii",
    price: 65000,
    condition: "Kondisi: Sangat Baik",
    size: "S-M",
    description: "Dress pink lucu dengan detail renda. Perfect untuk acara casual.",
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400",
    badge: "READY"
  },
  {
    id: 3,
    name: "Blouse Putih Aesthetic",
    price: 35000,
    condition: "Kondisi: Baik",
    size: "M-L",
    description: "Blouse putih bersih dengan detail manis. Versatile untuk mix and match.",
    image: "https://images.unsplash.com/photo-1551489186-cf8726f514f8?w=400",
    badge: "READY"
  },
  {
    id: 4,
    name: "Cardigan Pastel",
    price: 55000,
    condition: "Kondisi: Baik",
    size: "M",
    description: "Cardigan warna pastel hangat dan nyaman. Cocok untuk layering outfit.",
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400",
    badge: "READY"
  },
  {
    id: 5,
    name: "Rok Mini Flare",
    price: 40000,
    condition: "Kondisi: Sangat Baik",
    size: "S",
    description: "Rok mini flare cute, cocok untuk tampilan feminine dan playful.",
    image: "https://images.unsplash.com/photo-1577900232427-18219b9166a0?w=400",
    badge: "READY"
  },
  {
    id: 6,
    name: "Set Casual Cute",
    price: 85000,
    condition: "Kondisi: Baik",
    size: "M",
    description: "Set baju casual terdiri dari atasan dan bawahan. Serasi dan lucu.",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400",
    badge: "READY"
  }
]

const TESTIMONIALS = [
  {
    stars: 5,
    text: "Bajunya bagus banget! Kondisinya kayak baru, harga juga murah. Puas banget!",
    name: "Kak Rini",
    location: "Sukabumi"
  },
  {
    stars: 5,
    text: "COD-nya gampang, barangnya sesuai foto. Udah order 3x dan ga pernah kecewa!",
    name: "Teh Sari",
    location: "Cibadak"
  },
  {
    stars: 5,
    text: "Seller ramah, respon cepat. Bajunya lucu-lucu semua. Recommended!",
    name: "Dini",
    location: "Sukabumi"
  }
]

const ADVANTAGES = [
  {
    icon: "🎀",
    title: "Kurasi Ketat",
    desc: "Setiap item dipilih dengan teliti. Hanya yang berkualitas baik yang kami jual."
  },
  {
    icon: "💰",
    title: "Harga Terjangkau",
    desc: "Preloved bukan berarti murahan. Kualitas bagus dengan harga yang ramah di kantong."
  },
  {
    icon: "🚚",
    title: "COD Sukabumi",
    desc: "Bayar di tempat, lihat dulu kondisi barangnya. Aman dan terpercaya."
  }
]

const ORDER_STEPS = [
  { icon: "📱", title: "Pilih produk yang kamu suka" },
  { icon: "💬", title: "Chat WhatsApp kami" },
  { icon: "🚚", title: "Bayar & tunggu dikirim / COD" }
]

function formatPrice(price) {
  return new Intl.NumberFormat('id-ID').format(price)
}

function generateWaLink(product) {
  const message = encodeURIComponent(
    `Halo cute.clothes, saya mau tanya/pesan ${product.name} harga Rp ${formatPrice(product.price)}. Apakah masih available? 🎀`
  )
  return `https://wa.me/6285721125067?text=${message}`
}

/* ==================== COMPONENTS ==================== */

function AnnouncementBar() {
  return (
    <div className="bg-[#F472B6] text-white py-2 overflow-hidden relative">
      <div className="animate-marquee whitespace-nowrap flex gap-8">
        {[...Array(4)].map((_, i) => (
          <span key={i} className="inline-block text-sm font-medium tracking-wide">
            🎀 Free Ongkir area Sukabumi! &nbsp;&nbsp; 🎀 COD Available! &nbsp;&nbsp; 🎀 Preloved & Thrift Quality! &nbsp;&nbsp;
          </span>
        ))}
      </div>
    </div>
  )
}

function Navbar({ cartCount, onCartClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { label: 'Beranda', href: '#' },
    { label: 'Produk', href: '#produk' },
    { label: 'Tentang', href: '#tentang' },
    { label: 'Kontak', href: '#kontak' },
  ]

  return (
    <nav
      className={`bg-white sticky top-0 z-50 transition-shadow duration-300 ${
        scrolled ? 'shadow-md' : 'shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex flex-col leading-tight">
              <span
                className="text-2xl font-extrabold text-[#DB2777]"
                style={{ fontFamily: "'Plus Jakarta Sans', cursive" }}
              >
                cute.clothes
              </span>
              <span className="text-[10px] text-[#F472B6] tracking-wider -mt-1">
                prelovedbyr
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-gray-600 hover:text-[#DB2777] transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#DB2777] transition-all duration-300 group-hover:w-full rounded-full"></span>
              </a>
            ))}
          </div>

          {/* Cart + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              id="cart-button"
              onClick={onCartClick}
              className="relative p-2 rounded-full hover:bg-pink-50 transition-colors duration-200"
              aria-label="Keranjang"
            >
              <svg className="w-6 h-6 text-[#DB2777]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#F472B6] text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full animate-pulse-glow">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-pink-50 transition-colors"
              aria-label="Menu"
            >
              <svg className="w-6 h-6 text-[#DB2777]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-pink-100 mt-2 pt-3">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 px-3 text-sm font-medium text-gray-600 hover:text-[#DB2777] hover:bg-pink-50 rounded-lg transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

function CartDrawer({ cart, products, onClose, onUpdateCart }) {
  const cartItems = Object.entries(cart)
    .filter(([, qty]) => qty > 0)
    .map(([id, qty]) => ({
      product: products.find((p) => p.id === parseInt(id)),
      qty,
    }))

  const total = cartItems.reduce((sum, item) => sum + item.product.price * item.qty, 0)

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
        onClick={onClose}
      />
      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl cart-drawer-enter flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-pink-100">
          <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
            🛒 Keranjang
          </h2>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-pink-50 transition-colors"
            aria-label="Tutup"
          >
            <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-400">
              <span className="text-5xl mb-3">🛒</span>
              <p className="text-sm">Keranjang masih kosong</p>
              <p className="text-xs mt-1">Yuk pilih item favoritmu! 🎀</p>
            </div>
          ) : (
            cartItems.map(({ product, qty }) => (
              <div
                key={product.id}
                className="flex gap-3 bg-pink-50/50 rounded-xl p-3 border border-pink-100"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-gray-800 truncate">{product.name}</h3>
                  <p className="text-xs text-[#DB2777] font-bold">Rp {formatPrice(product.price)}</p>
                  <div className="flex items-center gap-2 mt-1.5">
                    <button
                      onClick={() => onUpdateCart(product.id, Math.max(0, qty - 1))}
                      className="w-6 h-6 flex items-center justify-center rounded-full bg-pink-100 text-[#DB2777] text-xs font-bold hover:bg-pink-200 transition-colors"
                    >
                      −
                    </button>
                    <span className="text-sm font-semibold text-gray-700 w-5 text-center">{qty}</span>
                    <button
                      onClick={() => onUpdateCart(product.id, qty + 1)}
                      className="w-6 h-6 flex items-center justify-center rounded-full bg-pink-100 text-[#DB2777] text-xs font-bold hover:bg-pink-200 transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="text-sm font-bold text-[#DB2777] self-center">
                  Rp {formatPrice(product.price * qty)}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t border-pink-100 p-5 space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-600">Total</span>
              <span className="text-xl font-extrabold text-[#DB2777]">Rp {formatPrice(total)}</span>
            </div>
            <a
              href={`https://wa.me/6285721125067?text=${encodeURIComponent(
                `Halo cute.clothes! Saya mau order:\n${cartItems
                  .map((item) => `- ${item.product.name} (x${item.qty}) Rp ${formatPrice(item.product.price * item.qty)}`)
                  .join('\n')}\n\nTotal: Rp ${formatPrice(total)}\n\nMohon dikonfirmasi ya 🎀`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-[#25D366] text-white py-3 rounded-full font-semibold text-sm hover:bg-[#20bd5a] transition-colors shadow-lg"
            >
              💬 Checkout via WhatsApp
            </a>
          </div>
        )}
      </div>
    </>
  )
}

function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-pink-100 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <div className="space-y-6 animate-fade-in-up">
            <span className="inline-block bg-pink-100 text-[#DB2777] text-sm font-semibold px-4 py-1.5 rounded-full border border-pink-200">
              🎀 Preloved & Thrift
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-800 leading-tight">
              Fashion Cute,
              <br />
              <span className="text-[#DB2777] italic">Harga Bersahabat.</span>
            </h1>
            <p className="text-gray-500 text-base sm:text-lg max-w-md leading-relaxed">
              Temukan koleksi baju preloved dan thrift pilihan berkualitas. Kondisi bagus, harga terjangkau, siap COD area Sukabumi!
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#produk"
                className="bg-[#F472B6] text-white px-7 py-3 rounded-full font-semibold text-sm hover:bg-[#DB2777] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 animate-pulse-glow"
              >
                Lihat Koleksi 🎀
              </a>
              <a
                href="#kontak"
                className="bg-white border-2 border-pink-300 text-pink-600 px-7 py-3 rounded-full font-semibold text-sm hover:bg-pink-50 hover:border-[#DB2777] transition-all duration-300"
              >
                Hubungi Kami
              </a>
            </div>
          </div>

          {/* Right - Image */}
          <div className="relative flex justify-center lg:justify-end animate-float">
            {/* Decorative blobs */}
            <div className="absolute -top-8 -right-8 w-48 h-48 bg-pink-200 rounded-full opacity-30 blur-3xl" />
            <div className="absolute -bottom-8 -left-8 w-36 h-36 bg-pink-300 rounded-full opacity-20 blur-2xl" />
            {/* Sparkles */}
            <span className="absolute top-4 left-8 text-2xl animate-sparkle" style={{ animationDelay: '0s' }}>✨</span>
            <span className="absolute bottom-8 right-4 text-xl animate-sparkle" style={{ animationDelay: '1s' }}>💕</span>
            <span className="absolute top-1/2 -left-2 text-lg animate-sparkle" style={{ animationDelay: '0.5s' }}>🎀</span>
            <img
              src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=600"
              alt="Fashion collection"
              className="rounded-2xl shadow-2xl w-full max-w-md object-cover aspect-[4/5] border-4 border-white relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function StatsBar() {
  return (
    <section className="bg-[#F472B6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-3 gap-4 text-center text-white">
          {[
            { value: '50+', label: 'Item Ready' },
            { value: '100%', label: 'Original' },
            { value: 'COD', label: 'Sukabumi' },
          ].map((stat) => (
            <div key={stat.label} className="space-y-1">
              <div className="text-2xl sm:text-3xl font-extrabold">{stat.value}</div>
              <div className="text-sm sm:text-base font-medium opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group border border-pink-50 hover:border-pink-200 hover:-translate-y-1">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute top-3 right-3 bg-[#F472B6] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
          {product.badge}
        </span>
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Info */}
      <div className="p-4 space-y-2.5">
        <h3 className="font-bold text-gray-800 text-base">{product.name}</h3>
        <p className="text-[#DB2777] font-extrabold text-xl">Rp {formatPrice(product.price)}</p>
        <div className="flex items-center gap-2">
          <span className="bg-pink-100 text-pink-600 text-xs font-medium px-2.5 py-0.5 rounded-full">
            {product.condition}
          </span>
          <span className="text-gray-400 text-sm">Size: {product.size}</span>
        </div>
        <p className="text-gray-500 text-sm leading-relaxed">{product.description}</p>

        <div className="flex gap-2 pt-1">
          <a
            href={generateWaLink(product)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-[#25D366] text-white py-2.5 rounded-full font-semibold text-sm text-center hover:bg-[#20bd5a] transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-1.5"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Pesan via WA
          </a>
          <button
            onClick={() => onAddToCart(product.id)}
            className="bg-pink-100 text-[#DB2777] p-2.5 rounded-full hover:bg-pink-200 transition-colors duration-200"
            aria-label="Tambah ke keranjang"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

function ProductsSection({ onAddToCart }) {
  return (
    <section id="produk" className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-3">Koleksi Terbaru 🎀</h2>
          <p className="text-gray-500 text-base max-w-lg mx-auto">
            Semua item preloved pilihan, kondisi bagus dan siap pakai.
          </p>
          <div className="w-20 h-1 bg-[#F472B6] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      </div>
    </section>
  )
}

function OrderSteps() {
  return (
    <section className="py-16 lg:py-20 bg-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-3">Cara Order 🛍️</h2>
          <div className="w-20 h-1 bg-[#F472B6] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {ORDER_STEPS.map((step, idx) => (
            <div key={idx} className="text-center group">
              <div className="w-20 h-20 mx-auto bg-white rounded-2xl shadow-lg flex items-center justify-center text-4xl mb-4 group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300 border border-pink-100">
                {step.icon}
              </div>
              <div className="text-sm font-bold text-[#DB2777] mb-1">Langkah {idx + 1}</div>
              <p className="text-gray-700 font-semibold">{step.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function AdvantagesSection() {
  return (
    <section id="tentang" className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-3">Kenapa cute.clothes? 🎀</h2>
          <div className="w-20 h-1 bg-[#F472B6] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ADVANTAGES.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl p-8 text-center group border border-pink-50 hover:border-pink-200 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  return (
    <section className="py-16 lg:py-20 bg-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-3">Kata Pembeli 💕</h2>
          <div className="w-20 h-1 bg-[#F472B6] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testi, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl p-6 border border-pink-50 hover:border-pink-200 transition-all duration-300 hover:-translate-y-1 relative"
            >
              {/* Quote mark */}
              <span className="absolute top-4 right-4 text-4xl text-pink-100 font-serif">"</span>
              <div className="text-yellow-400 text-lg mb-3 flex gap-0.5">
                {[...Array(testi.stars)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">"{testi.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-pink-300 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {testi.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">{testi.name}</p>
                  <p className="text-xs text-gray-400">{testi.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section id="kontak" className="py-16 lg:py-20 bg-gradient-to-r from-[#F472B6] to-[#DB2777] relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
          Yuk, Temukan Style-mu! 🎀
        </h2>
        <p className="text-white/90 text-base sm:text-lg mb-8 max-w-lg mx-auto">
          DM Instagram atau chat WhatsApp kami untuk info produk terbaru
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://wa.me/6285721125067"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-pink-600 px-8 py-3.5 rounded-full font-bold text-sm hover:bg-pink-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            💬 Chat WhatsApp
          </a>
          <a
            href="https://instagram.com/cuteclothessly"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent border-2 border-white text-white px-8 py-3.5 rounded-full font-bold text-sm hover:bg-white/10 transition-all duration-300"
          >
            📷 Instagram
          </a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-[#1F2937] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center space-y-4">
          <h3
            className="text-2xl font-extrabold"
            style={{ fontFamily: "'Plus Jakarta Sans', cursive" }}
          >
            cute.clothes 🎀
          </h3>
          <p className="text-gray-400 text-sm">Preloved & Thrift Fashion Sukabumi</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <a
              href="https://wa.me/6285721125067"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F472B6] transition-colors"
            >
              WA 085721125067
            </a>
            <span className="text-gray-600">|</span>
            <a
              href="https://instagram.com/cuteclothessly"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F472B6] transition-colors"
            >
              Instagram @cuteclothessly
            </a>
          </div>
          <div className="pt-4 border-t border-gray-700 mt-6">
            <p className="text-gray-500 text-xs">© 2026 cute.clothes. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ==================== MAIN PAGE ==================== */

export default function Home() {
  const [cart, setCart] = useState({})
  const [cartOpen, setCartOpen] = useState(false)

  const cartCount = Object.values(cart).reduce((sum, qty) => sum + qty, 0)

  function handleAddToCart(productId) {
    setCart((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1,
    }))
  }

  function handleUpdateCart(productId, qty) {
    setCart((prev) => {
      const next = { ...prev }
      if (qty <= 0) {
        delete next[productId]
      } else {
        next[productId] = qty
      }
      return next
    })
  }

  return (
    <main className="flex-1">
      <AnnouncementBar />
      <Navbar cartCount={cartCount} onCartClick={() => setCartOpen(true)} />
      <HeroSection />
      <StatsBar />
      <ProductsSection onAddToCart={handleAddToCart} />
      <OrderSteps />
      <AdvantagesSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />

      {cartOpen && (
        <CartDrawer
          cart={cart}
          products={PRODUCTS}
          onClose={() => setCartOpen(false)}
          onUpdateCart={handleUpdateCart}
        />
      )}
    </main>
  )
}
