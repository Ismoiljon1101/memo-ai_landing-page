"use client"
import { Globe } from "@/components/ui/globe";
import { Navbar } from "@/components/navbar"
import { TrustedCompanies } from "@/components/trusted-companies"
import { TestimonialsCarousel } from "@/components/testimonials-carousel"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import {
  Check,
  Sparkles,
  Shield,
  Download,
  Play,
  Monitor,
  Code2,
  Calendar
} from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen font-sans selection:bg-violet-500/30">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Ambient Background Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-violet-600/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Hero Content */}
            <div className="space-y-8 text-center lg:text-left animate-in slide-in-from-bottom-10 fade-in duration-700">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/50 border border-violet-500/30 text-violet-200 text-sm backdrop-blur-sm">
                <span className="flex h-2 w-2 rounded-full bg-violet-400 animate-pulse"></span>
                v1.0 is now available for macOS
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
                Your Meetings, <br />
                <span className="text-gradient-primary">Fully Mastered.</span>
              </h1>

              <p className="text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                The privacy-first desktop workspace. Record audio, take live notes, and generate AI transcripts—all synced directly to your Calendar.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <Button
                  size="lg"
                  className="h-14 px-8 text-lg bg-white text-slate-950 hover:bg-slate-200 font-bold rounded-full transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.15)] group"
                  onClick={() => {
                    const link = document.createElement('a')
                    link.href = '/memoai-macos.zip'
                    link.download = 'memoai-macos.zip'
                    document.body.appendChild(link)
                    link.click()
                    document.body.removeChild(link)
                  }}
                >
                  <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Download Now
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-white/20 hover:bg-white/5 text-white rounded-full backdrop-blur-sm transition-all hover:border-white/40">
                  <Play className="mr-2 h-5 w-5 fill-current" />
                  Watch Demo
                </Button>
              </div>

              <div className="pt-8 flex items-center justify-center lg:justify-start gap-4 text-sm text-slate-500">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-950 bg-slate-800 flex items-center justify-center text-xs font-medium text-white">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <p>Trusted by 10,000+ professionals</p>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative h-[500px] lg:h-[700px] w-full flex items-center justify-center perspective-[1000px]">
              <div className="absolute inset-0 z-0 opacity-40">
                <Globe
                  className="w-full h-full max-w-[750px]"
                  config={{
                    width: 800,
                    height: 800,
                    phi: 0,
                    theta: 0.3,
                    dark: 1,
                    diffuse: 1.2,
                    mapSamples: 16000,
                    mapBrightness: 6,
                    baseColor: [1, 1, 1],
                    markerColor: [0.1, 0.8, 1],
                    glowColor: [1, 1, 1],
                    markers: [
                      { location: [37.7595, -122.4367], size: 0.03 },
                      { location: [40.7128, -74.0060], size: 0.03 },
                      { location: [51.5074, -0.1278], size: 0.03 },
                      { location: [1.3521, 103.8198], size: 0.03 },
                      { location: [35.6762, 139.6503], size: 0.03 },
                    ],
                    onRender: () => { },
                    devicePixelRatio: 2,
                  }}
                />
              </div>



              {/* Floating UI Elements */}
              <div className="relative z-10 w-full max-w-md animate-float">
                <div className="glass-panel p-6 rounded-2xl border-t border-white/20 relative">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-amber-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <div className="px-3 py-1 rounded-full bg-white/5 text-xs text-white/60">04:23</div>
                  </div>

                  <div className="space-y-3 font-mono text-sm leading-relaxed text-slate-300">
                    <div className="flex gap-3">
                      <span className="text-violet-400 font-bold">Alex:</span>
                      <span>Let&apos;s review the quarterly targets for Q4.</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-cyan-400 font-bold">Sarah:</span>
                      <span>Revenue is up 40% from the optimized workflow.</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-violet-400 font-bold">Alex:</span>
                      <span>Great, let&apos;s sync that with the calendar events.</span>
                    </div>
                  </div>

                  <div className="mt-4 p-3 rounded bg-slate-950/50 border border-white/5 text-xs text-green-400">
                    &gt; Action Item: Schedule review with Marketing team
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -right-8 -bottom-8 glass-card p-4 rounded-xl flex items-center gap-3 animate-[float_8s_ease-in-out_infinite_reverse]">
                <div className="h-10 w-10 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Calendar Sync</p>
                  <p className="text-xs text-slate-400">Active</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustedCompanies />

      {/* Benefits - Bento Grid */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-3xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500">
            Engineered for Velocity
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Everything you need to accelerate your daily tasks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          {/* Card 1 - Large */}
          <div className="md:col-span-2 row-span-2 bento-card group relative overflow-hidden flex flex-col justify-end p-8">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[80px] -mr-20 -mt-20 group-hover:bg-violet-600/20 transition-all duration-500"></div>

            <div className="absolute top-8 right-8 p-4 glass-card rounded-2xl transform group-hover:-translate-y-2 transition-transform duration-500">
              <Sparkles className="h-8 w-8 text-violet-400" />
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-3 text-white">Live AI Transcription</h3>
              <p className="text-slate-400 max-w-md text-lg">
                Powered by AssemblyAI. Get accurate, real-time transcripts and summaries for every meeting, instantly searchable.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bento-card group flex flex-col justify-center items-center text-center p-8 bg-gradient-to-br from-slate-900 via-slate-900 to-violet-950/30">
            <div className="h-14 w-14 rounded-2xl bg-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-violet-500/10">
              <Shield className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Privacy First</h3>
            <p className="text-sm text-slate-400">All data stored locally on your Mac. No cloud leaks.</p>
          </div>

          {/* Card 3 */}
          <div className="bento-card group p-8 bg-gradient-to-bl from-slate-900 via-slate-900 to-cyan-950/30">
            <div className="h-14 w-14 rounded-2xl bg-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/10">
              <Monitor className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Floating Widget</h3>
            <p className="text-sm text-slate-400">Control recordings without leaving your workflow.</p>
          </div>

          {/* Card 4 - Wide */}
          <div className="md:col-span-2 bento-card flex items-center justify-between p-8 group">
            <div className="max-w-xs">
              <div className="h-14 w-14 rounded-2xl bg-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-indigo-500/10">
                <Calendar className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Smart Calendar Sync</h3>
              <p className="text-sm text-slate-400">
                Automatically matches recordings to your scheduled meetings. One-click export to macOS Calendar.
              </p>
            </div>
            <div className="hidden sm:block relative">
              {/* Simplified visual for calendar sync */}
              <div className="h-32 w-48 rounded-lg bg-slate-900/50 border border-slate-800 p-3 space-y-2">
                <div className="h-2 w-12 bg-indigo-500/20 rounded" />
                <div className="h-8 w-full bg-indigo-500/20 rounded border border-indigo-500/30 flex items-center px-2">
                  <div className="h-2 w-20 bg-indigo-400 rounded" />
                </div>
                <div className="h-8 w-full bg-slate-800/50 rounded flex items-center px-2">
                  <div className="h-2 w-16 bg-slate-700 rounded" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-32 relative bg-slate-950/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Seamless Integration</h2>
            <p className="text-slate-400">Up and running in less than 2 minutes.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

            {[
              { icon: Download, title: "1. Download", desc: "Get the lightweight client for your OS." },
              { icon: Code2, title: "2. Connect", desc: "Link your favorite tools securely." },
              { icon: Sparkles, title: "3. Automate", desc: "Let AI handle the rest." },
            ].map((step, i) => (
              <div key={i} className="relative flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center mb-6 relative z-10 group-hover:border-violet-500/50 transition-colors shadow-[0_0_30px_rgba(0,0,0,0.3)]">
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-slate-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-5xl font-bold mb-6">Simple, Transparent Pricing</h2>
          <p className="text-lg text-slate-400">Start with our 14-day free trial. No credit card required.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Starter */}
          <Card className="glass-card border-white/5 bg-slate-900/40 hover:bg-slate-900/60">
            <CardHeader>
              <CardTitle className="text-xl text-slate-200">Starter</CardTitle>
              <div className="my-4">
                <span className="text-4xl font-bold text-white">$29</span>
                <span className="text-slate-500">/mo</span>
              </div>
              <CardDescription className="text-slate-400">For individuals exploring automation.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 text-sm text-slate-300">
                {[1, 2, 3].map(i => (
                  <li key={i} className="flex gap-3">
                    <Check className="w-5 h-5 text-violet-500 shrink-0" />
                    <span>Basic automation workflows</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-slate-800 hover:bg-slate-700 text-white border border-white/5">Get Started</Button>
            </CardFooter>
          </Card>

          {/* Pro */}
          <Card className="relative glass-card border-violet-500/30 bg-slate-900/60 shadow-[0_0_40px_rgba(124,58,237,0.1)] scale-105 z-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-violet-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">Most Popular</div>
            <CardHeader>
              <CardTitle className="text-xl text-white">Pro</CardTitle>
              <div className="my-4">
                <span className="text-5xl font-bold text-white">$79</span>
                <span className="text-slate-500">/mo</span>
              </div>
              <CardDescription className="text-violet-200">For power users and small teams.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 text-sm text-slate-300">
                <li className="flex gap-3 font-semibold text-white">
                  <Check className="w-5 h-5 text-violet-400 shrink-0" />
                  <span>Everything in Starter</span>
                </li>
                {[1, 2, 3, 4].map(i => (
                  <li key={i} className="flex gap-3">
                    <Check className="w-5 h-5 text-violet-500 shrink-0" />
                    <span>Advanced neural engine</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-violet-600 hover:bg-violet-700 text-white shadow-lg shadow-violet-500/25">Start Free Trial</Button>
            </CardFooter>
          </Card>

          {/* Advanced */}
          <Card className="glass-card border-white/5 bg-slate-900/40 hover:bg-slate-900/60">
            <CardHeader>
              <CardTitle className="text-xl text-slate-200">Enterprise</CardTitle>
              <div className="my-4">
                <span className="text-4xl font-bold text-white">$199</span>
                <span className="text-slate-500">/mo</span>
              </div>
              <CardDescription className="text-slate-400">Custom solutions for large orgs.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 text-sm text-slate-300">
                <li className="flex gap-3 font-semibold text-white">
                  <Check className="w-5 h-5 text-violet-400 shrink-0" />
                  <span>Everything in Pro</span>
                </li>
                {[1, 2, 3].map(i => (
                  <li key={i} className="flex gap-3">
                    <Check className="w-5 h-5 text-violet-500 shrink-0" />
                    <span>Examples of enterprise features</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-slate-800 hover:bg-slate-700 text-white border border-white/5">Contact Sales</Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsCarousel />

      {/* FAQ */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-32 max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="space-y-4">
          {["What platforms are supported?", "Is my data secure?", "Can I use it offline?", "How does the trial work?"].map((q, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border border-white/10 rounded-lg px-4 bg-white/5 data-[state=open]:bg-white/10 transition-all">
              <AccordionTrigger className="hover:no-underline text-lg font-medium">{q}</AccordionTrigger>
              <AccordionContent className="text-slate-400 text-base">
                Yes, absolutely. We support all major platforms and your data never leaves your device without explicit permission.
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-slate-950/50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-2">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <Sparkles className="h-6 w-6 text-violet-500" />
                <span className="text-xl font-bold text-white">MemoAI</span>
              </Link>
              <p className="text-slate-400 max-w-sm">
                The intelligent automation platform for forward-thinking teams. Reclaim your time today.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-violet-400 transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-violet-400 transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-violet-400 transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-violet-400 transition-colors">Changelog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-violet-400 transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-violet-400 transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-violet-400 transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-slate-500 text-sm">
            © 2024 MemoAI Inc. All rights reserved.
          </div>
        </div>
      </footer>
    </div >
  )
}
