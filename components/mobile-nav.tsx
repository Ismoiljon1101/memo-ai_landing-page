"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Layers, Zap, CreditCard, HelpCircle } from "lucide-react"
import { cn } from "@/lib/utils"

export function MobileNav() {
    const pathname = usePathname()

    const links = [
        {
            href: "/",
            label: "Home",
            icon: Home,
        },
        {
            href: "/services",
            label: "Services",
            icon: Layers,
        },
        {
            href: "/how-it-works",
            label: "Works",
            icon: Zap,
        },
        {
            href: "/pricing",
            label: "Pricing",
            icon: CreditCard,
        },
        {
            href: "/faq",
            label: "FAQ",
            icon: HelpCircle,
        },
    ]

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
            <div className="bg-background/80 backdrop-blur-lg border-t pb-safe">
                <nav className="flex justify-around items-center h-16 px-2">
                    {links.map(({ href, label, icon: Icon }) => {
                        const isActive = pathname === href
                        return (
                            <Link
                                key={href}
                                href={href}
                                className={cn(
                                    "flex flex-col items-center justify-center w-full h-full space-y-1",
                                    isActive
                                        ? "text-primary"
                                        : "text-muted-foreground hover:text-foreground transition-colors"
                                )}
                            >
                                <Icon className="h-5 w-5" />
                                <span className="text-[10px] font-medium">{label}</span>
                            </Link>
                        )
                    })}
                </nav>
            </div>
        </div>
    )
}
