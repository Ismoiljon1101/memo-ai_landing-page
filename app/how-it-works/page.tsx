import { Navbar } from "@/components/navbar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Settings, Zap } from "lucide-react"

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">How It Works</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get started with MemoAI in three simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="text-center">
            <CardHeader>
              <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Download className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl mb-2">Download</CardTitle>
              <CardDescription className="text-base">
                Download and install MemoAI on your device. Available for Windows, Mac, and Linux.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-left space-y-2 text-sm text-muted-foreground">
                <li>• Quick 2-minute installation</li>
                <li>• No admin rights required</li>
                <li>• Works offline immediately</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Settings className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl mb-2">Setup</CardTitle>
              <CardDescription className="text-base">
                Connect your tools and configure your workflows. Our intuitive wizard makes it easy.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-left space-y-2 text-sm text-muted-foreground">
                <li>• Guided setup wizard</li>
                <li>• Connect 100+ integrations</li>
                <li>• Customize to your needs</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl mb-2">Automate</CardTitle>
              <CardDescription className="text-base">
                Start automating tasks and watch your productivity soar. It&apos;s that simple!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-left space-y-2 text-sm text-muted-foreground">
                <li>• Start automating instantly</li>
                <li>• Monitor in real-time</li>
                <li>• Scale as you grow</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-20 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">Ready to Get Started?</CardTitle>
              <CardDescription className="text-base">
                Join thousands of users who are already saving hours every week
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/download" className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-8 py-2 text-sm font-medium hover:bg-primary/90">
                  Download Now
                </a>
                <a href="/pricing" className="inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-2 text-sm font-medium hover:bg-accent">
                  View Pricing
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

