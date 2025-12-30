"use client"

import { Navbar } from "@/components/navbar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Check, Monitor, Laptop, Server } from "lucide-react"

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold">Download MemoAI</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get started with MemoAI in minutes. Available for all major platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          <Card className="text-center">
            <CardHeader>
              <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Monitor className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl">Windows</CardTitle>
              <CardDescription>
                Windows 10 or later
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                className="w-full"
                size="lg"
                onClick={() => {
                  const link = document.createElement('a')
                  link.href = '/memoai-windows.zip'
                  link.download = 'memoai-windows.zip'
                  document.body.appendChild(link)
                  link.click()
                  document.body.removeChild(link)
                }}
              >
                <Download className="mr-2 h-5 w-5" />
                Download for Windows
              </Button>
              <p className="text-xs text-muted-foreground mt-2">Version 2.1.0 • 45 MB</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Laptop className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl">macOS</CardTitle>
              <CardDescription>
                macOS 11.0 or later
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                className="w-full"
                size="lg"
                onClick={() => {
                  const link = document.createElement('a')
                  link.href = '/memoai-macos.zip'
                  link.download = 'memoai-macos.zip'
                  document.body.appendChild(link)
                  link.click()
                  document.body.removeChild(link)
                }}
              >
                <Download className="mr-2 h-5 w-5" />
                Download for macOS
              </Button>
              <p className="text-xs text-muted-foreground mt-2">Version 2.1.0 • 52 MB</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Server className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl">Linux</CardTitle>
              <CardDescription>
                Ubuntu 20.04 or later
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                className="w-full"
                size="lg"
                onClick={() => {
                  const link = document.createElement('a')
                  link.href = '/memoai-linux.zip'
                  link.download = 'memoai-linux.zip'
                  document.body.appendChild(link)
                  link.click()
                  document.body.removeChild(link)
                }}
              >
                <Download className="mr-2 h-5 w-5" />
                Download for Linux
              </Button>
              <p className="text-xs text-muted-foreground mt-2">Version 2.1.0 • 48 MB</p>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">System Requirements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Minimum Requirements</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>2GB RAM</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>500MB free disk space</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>Internet connection (for setup)</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Recommended</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>4GB RAM or more</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>1GB free disk space</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>SSD storage for best performance</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">What&apos;s Next?</CardTitle>
              <CardDescription>
                After downloading, here&apos;s what to expect
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Install the Application</h4>
                    <p className="text-sm text-muted-foreground">Run the installer and follow the setup wizard. Installation takes less than 2 minutes.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Create Your Account</h4>
                    <p className="text-sm text-muted-foreground">Sign up for a free account or start your 14-day trial. No credit card required.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Start Automating</h4>
                    <p className="text-sm text-muted-foreground">Connect your tools and create your first automation. Our guided setup makes it easy.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Need Help?</CardTitle>
                <CardDescription>
                  Check out our installation guide or contact support
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="outline" asChild>
                    <a href="/how-it-works">View Installation Guide</a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="/faq">Visit FAQ</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

