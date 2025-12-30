"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sparkles, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
            ? "bg-slate-950/70 backdrop-blur-md border-b border-white/10 py-3 shadow-lg"
            : "bg-transparent py-5"
          }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative flex items-center justify-center p-2 rounded-xl bg-gradient-to-tr from-violet-600 to-indigo-600 group-hover:rotate-6 transition-transform">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 group-hover:to-white transition-all">
                MemoAI
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <div className="flex items-center gap-6">
                {["Services", "How it works", "Testimonials", "Pricing", "FAQ"].map((item) => (
                  <Link
                    key={item}
                    href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-500 transition-all group-hover:w-full" />
                  </Link>
                ))}
              </div>

              <Button asChild className="bg-white text-slate-950 hover:bg-slate-200 border-none rounded-full px-6 font-semibold transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]">
                <Link href="/download">Download</Link>
              </Button>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden text-slate-300 hover:text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-xl pt-24 px-6 md:hidden animate-in slide-in-from-right">
          <div className="flex flex-col gap-6 text-center">
            {["Services", "How it works", "Testimonials", "Pricing", "FAQ"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-2xl font-semibold text-slate-300 hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <Button asChild size="lg" className="mt-4 bg-violet-600 hover:bg-violet-700 text-white w-full rounded-full">
              <Link href="/download" onClick={() => setMobileMenuOpen(false)}>Download Now</Link>
            </Button>
          </div>
        </div>
      )}
    </>
  )
}
