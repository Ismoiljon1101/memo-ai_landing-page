"use client"

import { useState, useEffect } from "react"
import { Card, CardDescription, CardHeader } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechCorp",
    content: "MemoAI has completely transformed how I work. I've saved over 15 hours per week! The automation features are intuitive and the support team is incredibly responsive.",
    rating: 5,
    image: "SJ"
  },
  {
    name: "Michael Chen",
    role: "CEO",
    company: "TechStart",
    content: "The best investment we've made. Our team productivity has increased by 40%. The ROI was evident within the first month.",
    rating: 5,
    image: "MC"
  },
  {
    name: "Emily Rodriguez",
    role: "Freelance Designer",
    company: "Independent",
    content: "Simple to use, powerful features. This is exactly what I needed for my workflow. The offline capability is a game-changer.",
    rating: 5,
    image: "ER"
  },
  {
    name: "David Kim",
    role: "Operations Director",
    company: "Global Solutions Inc",
    content: "MemoAI streamlined our entire operations. What used to take days now takes hours. The team collaboration features are outstanding.",
    rating: 5,
    image: "DK"
  },
  {
    name: "Lisa Anderson",
    role: "Marketing Lead",
    company: "Creative Agency",
    content: "The AI-powered suggestions have been incredibly helpful. It's like having an assistant that knows exactly what you need.",
    rating: 5,
    image: "LA"
  },
  {
    name: "James Wilson",
    role: "CTO",
    company: "StartupXYZ",
    content: "We've tried many automation tools, but MemoAI stands out. The security features give us peace of mind, and the performance is unmatched.",
    rating: 5,
    image: "JW"
  },
]

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [itemsPerView, setItemsPerView] = useState(1)

  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1)
    }

    // Initial check
    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.ceil(testimonials.length / itemsPerView))
    }, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, itemsPerView])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.ceil(testimonials.length / itemsPerView)) % Math.ceil(testimonials.length / itemsPerView))
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(testimonials.length / itemsPerView))
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-white">Loved by people worldwide</h2>
          <p className="text-lg text-slate-400">
            Join the community of productive professionals.
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-4"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <Card className="h-full glass-card border-white/5 bg-slate-900/40 hover:bg-slate-900/60 p-6 rounded-2xl">
                    <CardHeader className="p-0">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="h-12 w-12 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow-lg">
                          {testimonial.image}
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-lg text-white">{testimonial.name}</p>
                          <p className="text-sm text-slate-400">{testimonial.role}</p>
                        </div>
                      </div>
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <CardDescription className="text-base leading-relaxed text-slate-300">
                        &quot;{testimonial.content}&quot;
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-slate-900/80 border-slate-700 text-white hover:bg-slate-800 z-10 hidden sm:flex rounded-full h-12 w-12"
            onClick={goToPrevious}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-slate-900/80 border-slate-700 text-white hover:bg-slate-800 z-10 hidden sm:flex rounded-full h-12 w-12"
            onClick={goToNext}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: Math.ceil(testimonials.length / itemsPerView) }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${currentIndex === index ? 'w-8 bg-violet-500' : 'w-2 bg-slate-700 hover:bg-slate-600'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
