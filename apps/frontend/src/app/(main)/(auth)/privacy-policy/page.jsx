// app/privacy/page.jsx
import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Privacy Policy • Pruthatek — Data Protection & Compliance (DPDPA, GDPR, CCPA)",
  description:
    "Read Pruthatek’s Privacy Policy detailing how we collect, process, and protect your personal data under India’s DPDPA 2023, GDPR, and global privacy standards.",
  keywords: [
    "Pruthatek privacy policy",
    "DPDPA 2023 compliance",
    "GDPR India",
    "CCPA privacy rights",
    "data protection policy",
    "data security",
    "Pruthatek legal policy",
    "privacy statement",
    "data retention policy",
    "user rights",
    "grievance officer"
  ],
  authors: [{ name: "Pruthatek Legal Team", url: "https://pruthatek.info" }],
  creator: "Prutha TechnoMarket Pvt Ltd",
  publisher: "Pruthatek",
  alternates: {
    canonical: "https://pruthatek.info/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy • Pruthatek — How We Protect Your Data",
    description:
      "Learn how Pruthatek collects, stores, and protects user data in compliance with India’s DPDPA 2023, GDPR, and global privacy laws.",
    url: "https://pruthatek.info/privacy-policy",
    siteName: "Pruthatek",
    type: "article",
    locale: "en_IN",
    publishedTime: "2025-11-03T00:00:00+05:30",
    modifiedTime: "2025-11-03T00:00:00+05:30",
    authors: ["https://pruthatek.info"],
    images: [
      {
        url: "https://pruthatek.info/og-privacy.jpg",
        width: 1200,
        height: 630,
        alt: "Pruthatek Privacy Policy - Data Protection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy • Pruthatek — Data Protection & User Rights",
    description:
      "See how Pruthatek ensures compliance with DPDPA, GDPR, and other international data protection laws.",
    creator: "@pruthatek",
    images: ["https://pruthatek.info/og-privacy.jpg"],
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
  category: "Legal",
};

export default function PrivacyPage() {
  const effective = "03/11/2025";

  return (

    <>
      <Script
        id="structured-data-privacy"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "PrivacyPolicy",
            name: "Pruthatek Privacy Policy",
            url: "https://pruthatek.info/privacy-policy",
            description:
              "This Privacy Policy explains how Pruthatek collects, uses, and safeguards personal information in accordance with DPDPA 2023, GDPR, and other applicable privacy laws.",
            publisher: {
              "@type": "Organization",
              name: "Prutha TechnoMarket Pvt Ltd",
              url: "https://pruthatek.info",
              logo: "https://pruthatek.info/web-app-manifest-192x192.png",
            },
            datePublished: "2025-11-03",
            dateModified: "2025-11-03",
            inLanguage: "en-IN",
            potentialAction: {
              "@type": "ContactAction",
              target: "mailto:info@pruthatek.com",
              name: "Contact Data Protection Officer",
            },
          }),
        }}
      />

      <main className=" font-inter min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">
        <header className="border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
          <div className="mx-auto max-w-4xl px-6 py-6 flex items-center justify-between">
            <Link href="/" className="font-semibold tracking-tight hover:opacity-80">
              Pruthatek
            </Link>
            <nav className="text-sm">
              <ul className="flex items-center gap-4">
                <li>
                  <Link href="/terms-and-conditions" className="text-slate-600 hover:underline">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="font-semibold text-slate-900">
                    Privacy
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <section className="mx-auto max-w-4xl px-6 pt-10 pb-20">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
              Privacy Policy
            </h1>
            <p className="mt-2 text-sm text-slate-600">
              Effective date: <time dateTime={effective}>{effective}</time>
            </p>
          </div>

          <article className="prose prose-slate max-w-none">
            <p>
              <strong>Who we are:</strong> Prutha TechnoMarket Pvt Ltd, operating{" "}
              <strong>pruthatek.info</strong> and related apps/services. This Policy reflects India’s{" "}
              <strong>DPDPA 2023</strong>, the <strong>IT Act 2000 &amp; SPDI Rules</strong>, and—where
              applicable—principles from <strong>GDPR</strong> (EU/UK) and{" "}
              <strong>CCPA/CPRA</strong> (California).
            </p>

            <h2 id="scope">1) Scope</h2>
            <ul>
              <li>Visitors to <strong>pruthatek.info</strong></li>
              <li>Customers and authorized users of Pruthatek Services</li>
              <li>Individuals whose personal data our customers upload (processed on their behalf)</li>
            </ul>

            <h2 id="roles">2) Roles</h2>
            <ul>
              <li>
                <strong>You / Customer:</strong> Data Fiduciary/Controller for personal data you input
                or upload.
              </li>
              <li>
                <strong>Pruthatek:</strong> Data Processor/Service Provider for Customer Data;
                Controller for our own business data (billing, support, marketing).
              </li>
            </ul>

            <h2 id="data-we-collect">3) Data We Collect</h2>
            <h3>3.1 Data you provide</h3>
            <ul>
              <li>Account/profile info (name, email, phone, organization, role)</li>
              <li>Business/billing info (address, GST, contact persons)</li>
              <li>
                Content uploaded/entered (e.g., patient/clinic records, documents, images, audio/video,
                templates)
              </li>
              <li>Support requests, survey responses</li>
            </ul>

            <h3>3.2 Data collected automatically</h3>
            <ul>
              <li>Device and log data (IP, browser, OS, timestamps, pages viewed, referral URLs)</li>
              <li>Usage/telemetry (feature use, performance metrics, crash reports)</li>
              <li>
                Cookies or similar tech (see <a href="#cookies">Cookies</a>)
              </li>
            </ul>

            <h3>3.3 Data from third parties</h3>
            <ul>
              <li>Identity, payment, messaging, analytics, or verification providers</li>
              <li>Public or partner sources as permitted by law</li>
            </ul>

            <h3>3.4 Sensitive Personal Data (if applicable)</h3>
            <p>
              Where customers process health information or other sensitive categories, we process it
              only under the customer’s instructions and applicable law. Customers must ensure valid
              legal basis/consent and provide notices to data principals.
            </p>

            <h2 id="purposes">4) How We Use Data (Purposes)</h2>
            <ul>
              <li>Provide and operate the Services (auth, workflows, storage, search, messaging)</li>
              <li>Improve, secure, troubleshoot (analytics, monitoring, diagnostics, anti-abuse)</li>
              <li>Customer support, training, and service communications</li>
              <li>Billing, payments, and account management</li>
              <li>Legal compliance, fraud prevention, and enforcing Terms</li>
              <li>With consent: marketing communications and testimonials (opt-out anytime)</li>
            </ul>
            <p>
              <em>Legal bases (GDPR-style where applicable):</em> contract performance, legitimate
              interests, legal obligation, and consent when required.
            </p>

            <h3>3.5 Google Sign-In &amp; Pruthatek Accounts</h3>
            <p>
              We offer an optional <strong>&quot;Sign in with Google&quot;</strong> feature to help you
              quickly create and log in to your Pruthatek account.
              When you choose to use Google Sign-In, Google shares limited profile information with us,
              such as:
            </p>
            <ul>
              <li>Your name</li>
              <li>Your email address</li>
              <li>Profile picture (if available)</li>
              <li>A unique Google account identifier</li>
            </ul>
            <p>
              We use this information only to:
            </p>
            <ul>
              <li>Create and maintain your Pruthatek account</li>
              <li>Authenticate you and keep you logged in securely</li>
              <li>
                Enable logged-in features such as <strong>liking</strong> and{" "}
                <strong>bookmarking</strong> blogs and syncing these preferences across sessions/devices
              </li>
            </ul>
            <p>
              We do <strong>not</strong> access your Gmail, Google Drive, Calendar, Contacts, or any
              other Google data beyond the basic profile information described above.
              We do not sell your Google account data or share it with third-party advertisers.
            </p>
            <p>
              You can revoke Pruthatek&apos;s access to your Google account at any time from your{" "}
              Google Account settings (e.g., &quot;Security&quot; → &quot;Third-party access&quot;),
              and you may also contact us at{" "}
              <a href="mailto:info@pruthatek.com">info@pruthatek.com</a> for assistance with account
              deletion or data requests.
            </p>


            <h2 id="cookies">5) Cookies &amp; Similar Technologies</h2>
            <p>
              We use essential cookies for log-in and security, and (where enabled) analytics/marketing
              cookies. You can manage preferences via your browser and (if present) our cookie banner.
              Blocking certain cookies may impact features.
            </p>

            <h2 id="sharing">6) Data Sharing</h2>
            <ul>
              <li>
                <strong>Processors/Sub-processors:</strong> hosting, storage/CDN, analytics, email/SMS/
                WhatsApp providers, payment gateways, error tracking, support tools.
              </li>
              <li>
                <strong>Business partners:</strong> only as instructed by you.
              </li>
              <li>
                <strong>Authorities:</strong> when required by law or to protect rights, safety, or
                security.
              </li>
              <li>
                <strong>Corporate transactions:</strong> merger, acquisition, or asset sale, subject to
                confidentiality.
              </li>
            </ul>
            <p>
              We do <strong>not</strong> sell personal data. For California users, we act as a “service
              provider/contractor” where applicable.
            </p>

            <h2 id="transfers">7) International Transfers</h2>
            <p>
              We may process data on servers located in or outside India. For international transfers,
              we apply appropriate safeguards (e.g., contractual clauses, encryption, minimization).
            </p>

            <h2 id="security">8) Security</h2>
            <p>
              We apply administrative, technical, and physical controls (access controls, encryption in
              transit/at rest where applicable, audit logging, least-privilege). No system is 100%
              secure; we maintain incident response procedures and will notify customers of material
              breaches as required by law/contract.
            </p>

            <h2 id="retention">9) Data Retention</h2>
            <ul>
              <li>
                <strong>Customer Data:</strong> retained for the subscription term and a limited export
                window after termination (default 30–90 days, configurable).
              </li>
              <li>
                <strong>Business records:</strong> retained as required by tax, accounting, and legal
                obligations.
              </li>
            </ul>

            <h2 id="rights">10) Your Rights</h2>
            <ul>
              <li>Access, correct, update</li>
              <li>Portability (copy of your data)</li>
              <li>Delete/erasure</li>
              <li>Withdraw consent and/or object to certain processing</li>
              <li>Opt-out of marketing</li>
              <li>Complain to a regulator</li>
            </ul>
            <p>
              End-users of our customers (e.g., patients): please contact your service provider (the
              controller). We will support them in fulfilling requests.
            </p>
            <p>
              Submit requests:{" "}
              <a href="mailto:info@pruthatek.com">info@pruthatek.com</a>. We may verify
              identity and will respond within statutory timelines.
            </p>

            <h2 id="children">11) Children’s Data</h2>
            <p>
              Our Services are for business use and not directed to children under 18. If you believe a
              child provided personal data, contact us to remove it.
            </p>

            <h2 id="third-party-links">12) Third-Party Links &amp; Integrations</h2>
            <p>
              Our site may link to third-party websites or integrations (e.g., WhatsApp/telephony
              gateways, payment processors). Their privacy practices are their own.
            </p>

            <h2 id="messaging">13) WhatsApp/Email/SMS (if enabled)</h2>
            <p>
              If you enable messaging features, you are responsible for obtaining consents and honoring
              opt-outs. We process message content and metadata as your processor, solely to deliver
              the messages and provide logs/analytics.
            </p>

            <h2 id="changes">14) Changes to this Policy</h2>
            <p>
              We may update this Policy. Material changes will be announced via the site/app or email,
              with a new effective date.
            </p>

            <h2 id="contact">15) Contact &amp; Grievance Officer (India)</h2>
            <p>
              <strong>Data Protection/Privacy Contact:</strong>
              <br />
              Email: <a href="mailto:info@pruthatek.com">info@pruthatek.com</a> · Phone:
              9909918930
            </p>
            {/* <p>
            <strong>Grievance Officer (per IT Act):</strong>
            <br />
            Name: [Full Name]
            <br />
            Email: <a href="mailto:grievance@pruthatek.info">grievance@pruthatek.info</a>
            <br />
            Address: [Postal Address]
            <br />
            We aim to acknowledge grievances within 24–72 hours and close them within 30 days, unless
            law requires otherwise.
          </p> */}

            <hr />
            <p className="text-sm text-slate-500">
              See also: <Link href="/terms-and-conditions">Terms &amp; Conditions</Link>
            </p>
          </article>

          <footer className="mt-16 border-t pt-6 text-sm text-slate-500">
            <p>© {new Date().getFullYear()} Prutha TechnoMarket Pvt Ltd. All rights reserved.</p>
          </footer>
        </section>
      </main>
    </>

  );
}