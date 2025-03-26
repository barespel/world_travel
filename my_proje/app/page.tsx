"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

interface Destination {
  id: number;
  title: string;
  image: string;
  rating: number;
  link: string;
}

export default function TravelWebsite() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const destinations: Destination[] = [
    {
      id: 1,
      title: "Buddha Temple, Thailand",
      image: "/thailand-temple.jpg",
      rating: 5,
      link: "/destinations/thailand"
    },
    {
      id: 2,
      title: "Broken Beach, Bali",
      image: "/bali-beach.jpg",
      rating: 5,
      link: "/destinations/bali"
    },
    {
      id: 3,
      title: "Kerala",
      image: "/kerala.jpg",
      rating: 5,
      link: "/destinations/kerala"
    },
  ];

  return (
    <main className="relative min-h-screen">
      {/* Background Image */}
      <div className="fixed inset-0 w-full h-full z-0">
        <Image
          src="/thailand-temple.jpg"
          alt="Thailand Temple Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-blue-900/40 backdrop-blur-[2px]" />
      </div>

      {/* Content - z-index ile içeriği arka planın üzerine getiriyoruz */}
      <div className="relative z-10">
        {/* Header */}
        <nav className="absolute top-0 w-full z-50 p-6 flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="Foxico"
              width={40}
              height={40}
              className="mr-2"
            />
            <span className="text-white text-2xl font-bold">Foxico</span>
          </div>
          
          <div className="flex items-center space-x-8 text-white">
            <a href="#" className="hover:text-blue-200">News</a>
            <a href="#" className="hover:text-blue-200">Destinations</a>
            <a href="#" className="hover:text-blue-200">Blog</a>
            <a href="#" className="hover:text-blue-200">Contact</a>
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-white" />
              <span className="ml-2">Hello, Anney!</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative h-screen px-12 flex items-center">
          <div className="w-1/2">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-8xl font-bold text-white mb-6"
            >
              INDONESIA
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-gray-100 text-lg mb-8 max-w-2xl"
            >
              As the largest archipelago country in the world, Indonesia is blessed with so many different people, cultures, customs, traditions, artworks, food, animals, plants, landscapes, and everything that makes it special like no other.
            </motion.p>
            <motion.button 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition-colors flex items-center"
            >
              Explore
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>

          {/* Destination Cards */}
          <div className="absolute right-12 flex space-x-6">
            {destinations.map((dest, index) => (
              <motion.div
                key={dest.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 * index }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className="w-72 h-96 bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden cursor-pointer shadow-lg"
                onClick={() => window.location.href = dest.link}
              >
                <div className="relative h-full group">
                  <Image
                    src={dest.image}
                    alt={dest.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 p-4 w-full bg-gradient-to-t from-black/60">
                    <h3 className="text-white font-semibold">{dest.title}</h3>
                    <div className="flex mt-2">
                      {[...Array(dest.rating)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white text-sm bg-white/20 px-3 py-1 rounded-full">
                        Detayları Gör →
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="absolute left-12 top-1/2 -translate-y-1/2 space-y-4">
            {[0, 1, 2, 3].map((dot) => (
              <div
                key={dot}
                className={`w-2 h-2 rounded-full ${
                  currentSlide === dot ? "bg-white" : "bg-white/50"
                } cursor-pointer`}
                onClick={() => setCurrentSlide(dot)}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
} 
