import { Navbar } from "@/components/navbar"
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechCorp",
      content: "MemoAI has completely transformed how I work. I&apos;ve saved over 15 hours per week! The automation features are intuitive and the support team is incredibly responsive.",
      rating: 5,
      image: "SJ"
    },
    {
      name: "Michael Chen",
      role: "CEO",
      company: "TechStart",
      content: "The best investment we&apos;ve made. Our team productivity has increased by 40%. The ROI was evident within the first month.",
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

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold">Loved by People Worldwide</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See what our customers are saying about their experience with MemoAI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    {testimonial.image}
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardDescription className="text-base leading-relaxed">
                  &quot;{testimonial.content}&quot;
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <h2 className="text-2xl font-bold">Join Our Happy Customers</h2>
              <CardDescription className="text-base">
                Start your journey with MemoAI today and see the difference it makes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/download" className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-8 py-2 text-sm font-medium hover:bg-primary/90">
                  Get Started Free
                </a>
                <a href="/pricing" className="inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-2 text-sm font-medium hover:bg-accent">
                  View Plans
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

