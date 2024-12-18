import { Metadata } from "next"
import Link from "next/link"

import { PatternGrid } from "@/components/pattern-grid"
import { SiteHeader } from "@/components/site-header"
import { buttonVariants } from "@/components/ui/button"
import { siteConfig } from "@/config/site"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

export default function IndexPage() {
  return (
    <div className="flex min-h-screen flex-col p-10">
      <SiteHeader />
      <main className="flex-1">
        <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
          <div className="flex max-w-[980px] flex-col items-start gap-2">
            <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
              Fresh and Illustrative User Interface Design Patterns & Exprimental Components
            </h1>
            <p className="max-w-[700px] text-lg text-muted-foreground">
              Explore a collection of modern UI design patterns to enhance your web applications.
              Each pattern is beautifully crafted and ready for implementation.
            </p>
          </div>
          <div className="flex gap-4">
            {/* <Link
              href={siteConfig.links.docs}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants()}
            >
              Documentation
            </Link> */}
            <Link
              target="_blank"
              rel="noreferrer"
              href={siteConfig.links.githubUi}
              className={buttonVariants({ variant: "outline" })}
            >
              GitHub
            </Link>
          </div>
        </section>
        <PatternGrid />
      </main>
    </div>
  )
}