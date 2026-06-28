"use client";

import React from "react";
import Image from "next/image";

export default function EcommerceDemo() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800 pb-16 md:pb-0 overflow-x-hidden">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />

      {/* 1. TOP BAR */}
      <div className="bg-[#DB2777] text-white text-xs md:text-sm py-2 px-4 flex justify-between items-center z-50 relative">
        <a href="/demo" className="flex items-center gap-1 hover:text-gray-200 transition-colors">
          <span className="material-symbols-outlined text-[16px]">arrow_back</span>
          <span>Kembali ke Template</span>
        </a>
        <a 
          href="https://wa.me/6285721125067?text=Halo DiCode, saya tertarik template E-Commerce" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:text-gray-200 transition-colors font-medium"
        >
          <span>Pesan Template Ini</span>
          <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
        </a>
      </div>

      {/* 2. PROMO BAR */}
      <div className="bg-[#F97316] text-white py-2 overflow-hidden whitespace-nowrap z-40 relative text-sm md:text-base font-medium">
        <div className="animate-marquee inline-block">
          🎉 GRATIS ONGKIR min. Rp 100.000 &nbsp; | &nbsp; ⚡ Promo Kilat setiap hari &nbsp; | &nbsp; 🎁 Kupon anggota baru Rp 50.000 &nbsp; | &nbsp; 🔒 Transaksi 100% Aman &nbsp; &nbsp; &nbsp; &nbsp;
          🎉 GRATIS ONGKIR min. Rp 100.000 &nbsp; | &nbsp; ⚡ Promo Kilat setiap hari &nbsp; | &nbsp; 🎁 Kupon anggota baru Rp 50.000 &nbsp; | &nbsp; 🔒 Transaksi 100% Aman
        </div>
      </div>

      {/* 3. NAVBAR */}
      <nav className="bg-white sticky top-0 z-30 shadow-sm px-4 py-3">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-4">
          <div className="flex items-center gap-2 text-[#DB2777] flex-shrink-0 w-full md:w-auto justify-between md:justify-start">
            <div className="flex items-center gap-2 cursor-pointer">
              <span className="material-symbols-outlined text-3xl">shopping_bag</span>
              <span className="text-2xl font-extrabold tracking-tight">cute.clothes</span>
            </div>
            <div className="flex md:hidden items-center gap-4">
              <button className="text-gray-600">
                <span className="material-symbols-outlined">favorite</span>
              </button>
              <button className="relative text-gray-600">
                <span className="material-symbols-outlined">shopping_cart</span>
                <span className="absolute -top-1.5 -right-1.5 bg-[#F97316] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">3</span>
              </button>
            </div>
          </div>

          <div className="flex-grow w-full">
            <div className="flex w-full relative">
              <input 
                type="text" 
                placeholder="Cari produk, merek, kategori..." 
                className="w-full border border-gray-300 rounded-l-full py-2.5 pl-5 pr-4 focus:outline-none focus:border-[#DB2777] focus:ring-1 focus:ring-[#DB2777] bg-gray-50"
              />
              <button className="bg-[#DB2777] text-white px-6 rounded-r-full hover:bg-[#DB2777] transition-colors flex items-center justify-center shadow-md">
                <span className="material-symbols-outlined">search</span>
              </button>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-5 flex-shrink-0">
            <button className="text-gray-600 hover:text-[#DB2777] transition-colors flex items-center justify-center">
              <span className="material-symbols-outlined text-[28px]">favorite</span>
            </button>
            <button className="text-gray-600 hover:text-[#DB2777] transition-colors relative flex items-center justify-center">
              <span className="material-symbols-outlined text-[28px]">shopping_cart</span>
              <span className="absolute -top-1.5 -right-1.5 bg-[#F97316] text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">3</span>
            </button>
            <div className="h-6 w-px bg-gray-300 mx-1"></div>
            <button className="border-2 border-[#DB2777] text-[#DB2777] font-semibold px-6 py-2 rounded-full hover:bg-[#DB2777] hover:text-white transition-all shadow-sm">
              Masuk
            </button>
          </div>
        </div>
      </nav>

      {/* 4. HERO */}
      <section className="bg-gradient-to-br from-[#DB2777] to-[#1E1040] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-20 lg:h-[500px] flex flex-col lg:flex-row items-center">
          
          <div className="w-full lg:w-[60%] text-white z-20 flex flex-col items-start gap-6">
            <div className="bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-medium px-4 py-1.5 rounded-full inline-block">
              ✨ Koleksi Terbaru 2026
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Belanja Lebih Mudah,<br className="hidden md:block"/> Hemat & Terpercaya
            </h1>
            <p className="text-gray-300 text-base md:text-lg max-w-xl leading-relaxed">
              Temukan ribuan produk pilihan berkualitas dengan harga terbaik. Pengiriman cepat ke seluruh Indonesia!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-2">
              <button className="bg-[#F97316] hover:bg-[#ea580c] text-white font-bold py-3.5 px-8 rounded-full shadow-lg shadow-orange-500/30 transition-transform hover:-translate-y-1 flex items-center justify-center gap-2">
                Belanja Sekarang <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </button>
              <button className="bg-transparent hover:bg-white/10 border-2 border-white text-white font-bold py-3.5 px-8 rounded-full transition-colors flex items-center justify-center">
                Lihat Katalog
              </button>
            </div>
            <div className="flex flex-wrap gap-4 mt-6 text-sm text-gray-200 font-medium">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-green-400 text-[18px]">check_circle</span> 10.000+ Produk
              </div>
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-green-400 text-[18px]">check_circle</span> Pengiriman Cepat
              </div>
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-green-400 text-[18px]">check_circle</span> Garansi Asli
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[40%] relative mt-16 lg:mt-0 h-[300px] lg:h-full hidden md:block">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
            
            <div className="absolute z-10 top-10 right-20 lg:right-32 -rotate-6 shadow-2xl rounded-2xl bg-white p-2 w-48 transition-transform hover:rotate-0 duration-300">
              <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80" alt="Jam Tangan" className="w-full h-40 object-cover rounded-xl" />
              <div className="p-2">
                <p className="text-gray-800 font-bold text-sm truncate">Jam Tangan Pria</p>
                <div className="flex justify-between items-center mt-1">
                  <p className="text-[#DB2777] font-bold">Rp 299.000</p>
                  <p className="text-yellow-400 text-xs font-bold flex items-center">⭐ 4.9</p>
                </div>
              </div>
            </div>

            <div className="absolute z-20 top-32 right-0 lg:-right-4 rotate-3 shadow-2xl rounded-2xl bg-white p-2 w-48 transition-transform hover:rotate-0 duration-300">
              <img src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&q=80" alt="Perawatan Kulit" className="w-full h-40 object-cover rounded-xl" />
              <div className="p-2">
                <p className="text-gray-800 font-bold text-sm truncate">Paket Perawatan</p>
                <div className="flex justify-between items-center mt-1">
                  <p className="text-[#DB2777] font-bold">Rp 210.000</p>
                  <p className="text-yellow-400 text-xs font-bold flex items-center">⭐ 4.8</p>
                </div>
              </div>
            </div>

            <div className="absolute z-30 bottom-4 right-16 lg:right-24 rotate-[-2deg] shadow-2xl rounded-2xl bg-white p-2 w-48 transition-transform hover:rotate-0 duration-300">
              <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80" alt="Sepatu" className="w-full h-40 object-cover rounded-xl" />
              <div className="p-2">
                <p className="text-gray-800 font-bold text-sm truncate">Sepatu Kasual</p>
                <div className="flex justify-between items-center mt-1">
                  <p className="text-[#DB2777] font-bold">Rp 389.000</p>
                  <p className="text-yellow-400 text-xs font-bold flex items-center">⭐ 4.7</p>
                </div>
              </div>
            </div>

            <div className="absolute z-40 top-0 right-5 lg:-right-10 rotate-[15deg] bg-[#F97316] text-white font-extrabold px-4 py-2 rounded-lg shadow-xl border-2 border-white animate-bounce">
              DISKON 50%
            </div>
          </div>
        </div>
      </section>

      {/* 5. KATEGORI */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Kategori Populer</h2>
          <div className="flex overflow-x-auto hide-scrollbar gap-4 pb-4">
            {[
              { name: 'Pakaian', icon: '👗', bg: 'bg-pink-100', text: 'text-pink-700' },
              { name: 'Kecantikan', icon: '💄', bg: 'bg-pink-100', text: 'text-pink-700' },
              { name: 'Rumah & Dekorasi', icon: '🏠', bg: 'bg-blue-100', text: 'text-blue-700' },
              { name: 'Elektronik', icon: '📱', bg: 'bg-green-100', text: 'text-green-700' },
              { name: 'Makanan & Minuman', icon: '☕', bg: 'bg-orange-100', text: 'text-orange-700' },
              { name: 'Tas & Aksesoris', icon: '🎒', bg: 'bg-yellow-100', text: 'text-yellow-700' },
            ].map((cat, i) => (
              <button key={i} className={`flex-shrink-0 flex items-center gap-3 ${cat.bg} ${cat.text} px-6 py-3.5 rounded-2xl hover:scale-105 transition-transform shadow-sm cursor-pointer border border-transparent hover:border-current`}>
                <span className="text-2xl">{cat.icon}</span>
                <span className="font-bold">{cat.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PRODUK TERLARIS */}
      <section className="bg-[#F9FAFB] py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              🔥 Produk Terlaris
            </h2>
            <a href="#" className="text-[#DB2777] font-semibold hover:underline flex items-center gap-1">
              Lihat Semua <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              {
                img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80",
                badge: "TERLARIS", badgeColor: "bg-[#F97316]",
                name: "Jam Tangan Premium Pria", price: "Rp 299.000", oldPrice: "Rp 450.000", stars: "4.9", sold: "128"
              },
              {
                img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&q=80",
                badge: "DISKON 40%", badgeColor: "bg-red-500",
                name: "Paket Perawatan Kulit Bersinar", price: "Rp 210.000", oldPrice: "Rp 350.000", stars: "4.8", sold: "256"
              },
              {
                img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80",
                badge: "BARU", badgeColor: "bg-green-500",
                name: "Sepatu Kasual Pria", price: "Rp 389.000", oldPrice: null, stars: "4.7", sold: "89"
              },
              {
                img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80",
                badge: "TERLARIS", badgeColor: "bg-[#F97316]",
                name: "Tas Ransel Laptop Anti Air", price: "Rp 349.000", oldPrice: "Rp 500.000", stars: "4.9", sold: "312"
              }
            ].map((prod, i) => (
              <div key={i} className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col border border-gray-100 relative">
                <div className="absolute top-3 left-3 z-10">
                  <span className={`${prod.badgeColor} text-white text-[10px] md:text-xs font-bold px-2.5 py-1 rounded-full shadow-sm`}>{prod.badge}</span>
                </div>
                <div className="overflow-hidden aspect-square relative bg-gray-100">
                  <img src={prod.img} alt={prod.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="font-medium text-gray-800 text-sm md:text-base line-clamp-2 h-10 md:h-12 mb-1 group-hover:text-[#DB2777] transition-colors">{prod.name}</h3>
                  <div className="flex items-center gap-1 mb-2">
                    <div className="flex text-yellow-400 text-[12px] md:text-[14px]">
                      ⭐⭐⭐⭐⭐
                    </div>
                    <span className="text-gray-500 text-xs">{prod.stars} ({prod.sold} terjual)</span>
                  </div>
                  <div className="mt-auto">
                    {prod.oldPrice && (
                      <p className="text-gray-400 text-xs line-through">{prod.oldPrice}</p>
                    )}
                    <p className="text-[#DB2777] font-extrabold text-base md:text-lg mb-4">{prod.price}</p>
                    <button className="w-full bg-pink-50 hover:bg-[#DB2777] text-[#DB2777] hover:text-white border border-[#DB2777] font-semibold py-2 rounded-xl transition-colors flex items-center justify-center gap-2">
                      <span className="material-symbols-outlined text-[18px]">shopping_cart</span> Tambah
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. DOUBLE PROMO BANNER */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-6">
          <div className="flex-1 bg-gradient-to-r from-[#F97316] to-[#ea580c] rounded-3xl p-8 text-white relative overflow-hidden shadow-lg group">
            <div className="absolute right-[-20%] top-[-20%] w-64 h-64 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
            <p className="font-bold text-orange-200 mb-1 flex items-center gap-2"><span className="material-symbols-outlined">bolt</span> Promo Kilat!</p>
            <h3 className="text-3xl font-extrabold mb-4">Diskon Hingga 70%</h3>
            <div className="flex gap-2 mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 text-center border border-white/30">
                <p className="text-2xl font-bold">06</p>
                <p className="text-[10px] uppercase font-semibold">Jam</p>
              </div>
              <div className="flex items-center text-xl font-bold">:</div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 text-center border border-white/30">
                <p className="text-2xl font-bold">23</p>
                <p className="text-[10px] uppercase font-semibold">Menit</p>
              </div>
              <div className="flex items-center text-xl font-bold">:</div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 text-center border border-white/30">
                <p className="text-2xl font-bold">45</p>
                <p className="text-[10px] uppercase font-semibold">Detik</p>
              </div>
            </div>
            <button className="bg-white text-[#F97316] font-bold py-2.5 px-6 rounded-full hover:bg-gray-50 transition-colors shadow-md inline-flex items-center gap-2">
              Lihat Promo Kilat <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>

          <div className="flex-1 bg-gradient-to-r from-[#DB2777] to-[#BE185D] rounded-3xl p-8 text-white relative overflow-hidden shadow-lg group">
            <div className="absolute right-[-20%] bottom-[-20%] w-64 h-64 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
            <p className="font-bold text-pink-200 mb-1 flex items-center gap-2"><span className="material-symbols-outlined">card_giftcard</span> Anggota Baru</p>
            <h3 className="text-3xl font-extrabold mb-2">Kupon Rp 50.000</h3>
            <p className="mb-6 text-pink-100">Gratis untuk pendaftar baru!</p>
            <button className="bg-white text-[#DB2777] font-bold py-2.5 px-6 rounded-full hover:bg-gray-50 transition-colors shadow-md inline-flex items-center gap-2 mt-auto">
              Daftar Gratis <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>

      {/* 8. PRODUK BARU */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              🆕 Baru Masuk
            </h2>
            <a href="#" className="text-[#DB2777] font-semibold hover:underline flex items-center gap-1">
              Lihat Semua <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              {
                img: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400&q=80",
                badge: "BARU", badgeColor: "bg-green-500",
                name: "Kemeja Batik Modern", price: "Rp 185.000"
              },
              {
                img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80",
                badge: "LOKAL", badgeColor: "bg-[#8B4513]",
                name: "Kopi Premium Nusantara", price: "Rp 125.000"
              },
              {
                img: "https://images.unsplash.com/photo-1513506003901-1e6a35749a86?w=400&q=80",
                badge: "UNIK", badgeColor: "bg-blue-500",
                name: "Lampu Dekorasi LED", price: "Rp 89.000"
              },
              {
                img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80",
                badge: "LARIS", badgeColor: "bg-red-500",
                name: "Headset Nirkabel Pro", price: "Rp 259.000"
              }
            ].map((prod, i) => (
              <div key={i} className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col border border-gray-100 relative">
                <div className="absolute top-3 left-3 z-10">
                  <span className={`${prod.badgeColor} text-white text-[10px] md:text-xs font-bold px-2.5 py-1 rounded-full shadow-sm`}>{prod.badge}</span>
                </div>
                <div className="overflow-hidden aspect-square relative bg-gray-100">
                  <img src={prod.img} alt={prod.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="font-medium text-gray-800 text-sm md:text-base line-clamp-2 h-10 md:h-12 mb-3 group-hover:text-[#DB2777] transition-colors">{prod.name}</h3>
                  <div className="mt-auto">
                    <p className="text-[#DB2777] font-extrabold text-base md:text-lg mb-4">{prod.price}</p>
                    <button className="w-full bg-pink-50 hover:bg-[#DB2777] text-[#DB2777] hover:text-white border border-[#DB2777] font-semibold py-2 rounded-xl transition-colors flex items-center justify-center gap-2">
                      <span className="material-symbols-outlined text-[18px]">shopping_cart</span> Tambah
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. KEUNGGULAN BELANJA */}
      <section className="bg-[#FDF2F8] py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: 'local_shipping', title: 'Gratis Ongkir', desc: 'Min. pembelian Rp 100.000' },
              { icon: 'sync', title: 'Pengembalian Mudah', desc: '7 hari garansi pengembalian' },
              { icon: 'security', title: 'Transaksi Aman', desc: 'SSL & gerbang pembayaran terpercaya' },
              { icon: 'support_agent', title: 'Layanan 24 Jam', desc: 'Siap membantu kapan saja' },
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center text-[#DB2777] flex-shrink-0">
                  <span className="material-symbols-outlined text-[28px]">{feature.icon}</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">{feature.title}</h4>
                  <p className="text-sm text-gray-500">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. TESTIMONI */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center flex items-center justify-center gap-2">
            ⭐ Kata Pembeli Kami
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Rina S",
                initial: "R",
                color: "bg-pink-500",
                text: "Produknya bagus banget! Sesuai foto, pengiriman super cepat. Packing aman dan rapi. Pasti beli lagi disini!"
              },
              {
                name: "Budi W",
                initial: "B",
                color: "bg-blue-500",
                text: "Kualitas premium tapi harga terjangkau. Sudah order lebih dari 5 kali, tidak pernah kecewa. Sangat direkomendasikan!"
              },
              {
                name: "Sari A",
                initial: "S",
                color: "bg-pink-500",
                text: "Layanan pelanggannya ramah dan responsif. Produk asli semua. Jadi langganan tetap disini!"
              }
            ].map((review, i) => (
              <div key={i} className="bg-[#F9FAFB] p-6 rounded-3xl border border-gray-100 hover:border-[#DB2777] hover:shadow-lg transition-all">
                <div className="flex text-yellow-400 mb-4 text-lg">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-600 italic mb-6 leading-relaxed">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${review.color} text-white flex items-center justify-center font-bold text-lg`}>
                    {review.initial}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{review.name}</h4>
                    <div className="flex items-center gap-1 text-green-600 text-xs font-semibold">
                      <span className="material-symbols-outlined text-[14px]">verified</span>
                      Pembeli Terverifikasi
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. FOOTER */}
      <footer className="bg-[#111827] text-white pt-16 pb-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 text-white">
                <span className="material-symbols-outlined text-3xl text-[#DB2777]">shopping_bag</span>
                <span className="text-2xl font-extrabold tracking-tight">cute.clothes</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Belanja mudah, hemat, dan terpercaya untuk semua kebutuhan Anda.
              </p>
              <div className="flex items-center gap-4 mt-2">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#DB2777] transition-colors">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#DB2777] transition-colors">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#DB2777] transition-colors">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.597 1.323-1.325V1.325C24 .597 23.403 0 22.675 0z"/></svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4 text-white">Layanan</h4>
              <ul className="flex flex-col gap-3 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-[#DB2777] transition-colors">Tentang Kami</a></li>
                <li><a href="#" className="hover:text-[#DB2777] transition-colors">Cara Belanja</a></li>
                <li><a href="#" className="hover:text-[#DB2777] transition-colors">Lacak Pesanan</a></li>
                <li><a href="#" className="hover:text-[#DB2777] transition-colors">Pengembalian Barang</a></li>
                <li><a href="#" className="hover:text-[#DB2777] transition-colors">Hubungi Kami</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4 text-white">Kategori</h4>
              <ul className="flex flex-col gap-3 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-[#DB2777] transition-colors">Pakaian</a></li>
                <li><a href="#" className="hover:text-[#DB2777] transition-colors">Kecantikan</a></li>
                <li><a href="#" className="hover:text-[#DB2777] transition-colors">Elektronik</a></li>
                <li><a href="#" className="hover:text-[#DB2777] transition-colors">Rumah & Dekorasi</a></li>
                <li><a href="#" className="hover:text-[#DB2777] transition-colors">Makanan & Minuman</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4 text-white">Metode Pembayaran</h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {['BCA', 'Mandiri', 'BRI', 'GoPay', 'OVO', 'Dana'].map((pay, i) => (
                  <div key={i} className="bg-white/10 px-3 py-1.5 rounded-lg text-xs font-bold text-gray-300 border border-white/5">{pay}</div>
                ))}
              </div>
              <h4 className="font-bold text-lg mb-4 text-white">Pengiriman:</h4>
              <div className="flex flex-wrap gap-2">
                {['JNE', 'J&T', 'SiCepat', 'Pos Indonesia'].map((ship, i) => (
                  <div key={i} className="bg-white/10 px-3 py-1.5 rounded-lg text-xs font-bold text-gray-300 border border-white/5">{ship}</div>
                ))}
              </div>
            </div>
            
          </div>

          <div className="border-t border-gray-800 pt-6 flex justify-center items-center text-sm text-gray-500 text-center">
            <p>© 2026 cute.clothes | Website by <a href="https://dicode-website-pied.vercel.app" target="_blank" rel="noopener noreferrer" className="text-[#F97316] font-bold hover:underline">DiCode</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
