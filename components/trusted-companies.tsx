"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const companies = [
  { id: 1, address: "/companies/apple.svg" },
  { id: 2, address: "/companies/google.svg" },
  { id: 3, address: "/companies/hyundai.svg" },
  { id: 4, address: "/companies/kia.svg" },
  { id: 5, address: "/companies/nvidia.svg" },
  { id: 6, address: "/companies/samsung.svg" },
  { id: 7, address: "/companies/tesla.svg" },
]

export function TrustedCompanies() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(2)

  useEffect(() => {
    const handleResize = () => {
      // 2 on mobile, 3 on tablet, 4 on desktop
      setItemsPerView(window.innerWidth >= 1024 ? 4 : window.innerWidth >= 768 ? 3 : 2)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const maxIndex = Math.max(0, companies.length - itemsPerView)
        // If we reach the end, loop back
        if (prev >= maxIndex) {
          return 0
        }
        return prev + 1
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [itemsPerView])

  return (
    <section className="py-20 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-violet-950/10 to-transparent pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm uppercase tracking-widest text-slate-500 text-center mb-10 font-medium">
          Trusted by industry leaders
        </p>
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`
              }}
            >
              {companies.map((company) => (
                <div
                  key={company.id}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <div className="flex items-center justify-center h-40">
                    <Image
                      src={company.address}
                      alt={`Logo of ${company.address.split("/").pop()?.split(".")[0]}`}
                      width={120}
                      height={100}
                      className="object-contain opacity-50 hover:opacity-100 transition-opacity duration-300 brightness-0 invert"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: Math.max(1, companies.length - itemsPerView + 1) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${currentIndex === index
                ? 'w-8 bg-primary'
                : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
