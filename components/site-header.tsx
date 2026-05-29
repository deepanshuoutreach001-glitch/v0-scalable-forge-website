"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const BOOKING_URL = "https://calendly.com/hello-scalableforge/30min"

const NAV_LINKS = [
  { href: "#capabilities", label: "Capabilities" },
  { href: "#principles", label: "Principles" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
] as const

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-40 transition-[background-color,border-color,backdrop-filter] duration-300",
        scrolled
          ? "border-b border-border/60 bg-background/90 backdrop-blur-md"
          : "border-b border-transparent bg-background/70 backdrop-blur-sm",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-6 md:px-12 lg:px-20">
        <Link
          href="#"
          className="text-sm font-medium tracking-[0.12em] text-foreground md:text-base"
        >
          SCALABLE FORGE
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-foreground/75 transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button size="sm" className="hidden md:inline-flex" asChild>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
              Book a Call
            </a>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="md:hidden"
                aria-label="Open menu"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="border-border/60">
              <SheetHeader>
                <SheetTitle className="text-left text-sm font-medium tracking-[0.12em]">
                  SCALABLE FORGE
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-8 flex flex-col gap-6" aria-label="Mobile">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-base text-foreground/80 transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                ))}
                <Button className="mt-4 w-full" asChild>
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                  >
                    Book a Call
                  </a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

export { BOOKING_URL }
