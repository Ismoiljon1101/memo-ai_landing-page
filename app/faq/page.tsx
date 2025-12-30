import { Navbar } from "@/components/navbar"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function FAQPage() {
  const faqs = [
    {
      question: "What platforms does MemoAI support?",
      answer: "MemoAI is available for Windows, macOS, and Linux. You can download the appropriate version for your operating system from our website. All versions include the same features and functionality."
    },
    {
      question: "Can I use MemoAI offline?",
      answer: "Yes! MemoAI is designed to work offline-first. All your data is stored locally, and it will sync automatically when you&apos;re back online. This ensures you can work uninterrupted even without an internet connection."
    },
    {
      question: "How does the free trial work?",
      answer: "All plans include a 14-day free trial. No credit card required. You&apos;ll have full access to all features during the trial period. You can cancel anytime during the trial without being charged."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Absolutely! You can cancel your subscription at any time from your account settings. There are no cancellation fees or long-term commitments. Your access will continue until the end of your current billing period."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers for enterprise plans. All payments are processed securely through our payment partners."
    },
    {
      question: "Is my data secure?",
      answer: "Yes, security is our top priority. We use end-to-end encryption, regular security audits, and comply with GDPR and other data protection regulations. Your data is never shared with third parties without your consent."
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes, we offer a 30-day money-back guarantee. If you&apos;re not satisfied with MemoAI within the first 30 days of your paid subscription, contact our support team for a full refund."
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer: "Yes, you can change your plan at any time. Upgrades take effect immediately, and downgrades take effect at the start of your next billing cycle. You&apos;ll receive a prorated credit for the difference."
    },
    {
      question: "What kind of support do you offer?",
      answer: "Support varies by plan: Starter includes email support, Pro includes priority email and chat support, and Advanced includes 24/7 phone support with a dedicated account manager. All plans have access to our knowledge base and video tutorials."
    },
    {
      question: "How do I get started?",
      answer: "Getting started is easy! Simply download MemoAI from our website, install it on your device, and follow the setup wizard. The wizard will guide you through connecting your tools and creating your first automation. If you need help, our support team is always available."
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold">Frequently Asked Questions</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about MemoAI
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-16">
          <Accordion type="single" defaultValue="item-1">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger value={`item-${index + 1}`}>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent value={`item-${index + 1}`}>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Still have questions?</CardTitle>
              <CardDescription className="text-base">
                Our support team is here to help. Get in touch and we&apos;ll respond within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="mailto:support@memoai.com">Contact Support</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="/download">Download Now</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

