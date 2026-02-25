// app/about/page.jsx
import Link from "next/link";
 
export const metadata = {
  title: "About Us • Pruthatek — Building Reliable ERP & Healthcare Software",
  description:
    "Pruthatek is an India-based software company building secure, offline-first, and elegant ERP and healthcare solutions. Learn more about our mission, vision, and technology behind our products.",
  keywords: [
    "Pruthatek",
    "About Pruthatek",
    "ERP software India",
    "Healthcare ERP",
    "Business management tools",
    "Hospital software",
    "Secure software solutions",
    "Offline-first apps",
    "SaaS development India",
    "Tech company Gujarat"
  ],
  authors: [{ name: "Pruthatek Team", url: "https://pruthatek.info" }],
  creator: "Pruthatek Technologies",
  publisher: "Pruthatek",
  alternates: {
    canonical: "https://pruthatek.info/about-us",
  },
  openGraph: {
    title: "About Pruthatek — Building Reliable ERP & Healthcare Software",
    description:
      "We’re an India-based team crafting ERP and healthcare tools that are simple, powerful, and secure. Learn about our story, mission, and what we stand for.",
    url: "https://pruthatek.info/about-us",
    siteName: "Pruthatek",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://pruthatek.info/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "Pruthatek - About Us",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Pruthatek — ERP & Healthcare Software Experts",
    description:
      "Discover how Pruthatek builds innovative, secure, and offline-first ERP solutions for hospitals and businesses.",
    creator: "@pruthatek", // if you have Twitter handle
    images: ["https://pruthatek.info/og-about.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxSnippet: -1,
      maxImagePreview: "large",
      maxVideoPreview: -1,
    },
  },
  category: "Technology",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen  font-inter bg-gradient-to-b from-white via-slate-50 to-white">
      {/* Top bar */}
      <header className="border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto max-w-6xl px-6 py-6 flex items-center justify-between">
          <Link href="/" className="font-semibold tracking-tight hover:opacity-80">
            Pruthatek
          </Link>
          <nav className="text-sm">
            <ul className="flex items-center gap-4">
              <li>
                <Link href="/about-us" className="font-semibold text-slate-900">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-slate-600 hover:underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="text-slate-600 hover:underline">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-slate-600 hover:underline">
                  Privacy
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-50 blur-3xl">
          <div className="mx-auto h-64 w-[80%] -translate-y-8 rounded-full bg-gradient-to-r from-indigo-200 via-sky-200 to-emerald-200" />
        </div>
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900">
          We design software that gets the job done—quietly and reliably.
          </h1>
          <p className="mt-4 max-w-2xl text-slate-600">
            Pruthatek is an India-based product team building offline-first, secure, and elegant
            ERP tools for hospitals and growing businesses. Our mission is simple: ship products
            that teams actually enjoy using.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <Link
              href="/contact-us"
              className="inline-flex items-center rounded-xl bg-slate-900 px-4 py-2.5 text-white hover:bg-slate-800 transition"
            >
              Talk to us
            </Link>
            <Link
              href="/privacy-policy"
              className="inline-flex items-center rounded-xl border px-4 py-2.5 text-slate-700 hover:bg-white transition"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="mx-auto max-w-6xl px-6 pb-6">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ["Built in India", "Headquartered in Gujarat, proudly serving global teams."],
            ["Elite Tech", "We boast a track record of satisfied customers who trusted us with their sophisticated software needs."],
            ["Communication in the Professional Environment", "We express our concerns, offer frequent updates, and solicit constructive input from our clients"],
          ].map(([title, body]) => (
            <div
              key={title}
              className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-600">{body}</p>
            </div>
          ))}
        </div>
        {/* <p className="mt-2 text-xs text-slate-500">*Where applicable in supported modules.</p> */}
      </section>

      {/* Story */}
      <section className="mx-auto max-w-4xl px-6 pt-6 pb-16">
        <article className="prose prose-slate max-w-none">
          {/* <h2>Our Story</h2> */}
          <p>
           Our focus is on assisting entrepreneurs in developing software that not only fulfils today's demands, but also predicts tomorrow's needs by creating solutions that are both creative and sustainable.
          </p>
          <h3 className="mt-4 mb-1">What we care about:</h3>
          <ul>
            <li><strong>Clarity:</strong> clean UI, predictable workflows, fewer clicks.</li>
            <li><strong>Reliability:</strong> stable releases, graceful offline behavior.</li>
            <li><strong>Security:</strong> least-privilege access, audit trails, data minimization.</li>
          </ul>
          <h3>Where we’re headed</h3>
          <p>
            We’re expanding our healthcare modules, deepening WhatsApp/telephony integrations, and
            shipping richer analytics. 
            {/* <Link href="/contact">drop us a note</Link>. */}
          </p>
        </article>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["99.9%", "Target uptime"],
            ["30–90 days", "Post-termination export window"],
            ["< 24 hrs", "Avg. first response"],
            ["∞", "Care for our users"],
          ].map(([k, v]) => (
            <div key={k} className="rounded-2xl border bg-white px-6 py-8 text-center shadow-sm">
              <div className="text-3xl font-semibold text-slate-900">{k}</div>
              <div className="mt-1 text-sm text-slate-600">{v}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t bg-white/80">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-slate-500">
          © {new Date().getFullYear()} [Pruthatek Legal Name]. All rights reserved.
        </div>
      </footer>
    </main>
  );
}