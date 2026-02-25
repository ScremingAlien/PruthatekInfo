import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Terms & Conditions • Pruthatek — Legal Terms of Use & SaaS Policy",
  description:
    "Review Pruthatek’s Terms & Conditions governing the use of pruthatek.info and its SaaS/ERP solutions. Learn about subscriptions, data usage, liabilities, and compliance policies.",
  keywords: [
    "Pruthatek terms and conditions",
    "Pruthatek terms of use",
    "software as a service agreement",
    "SaaS terms",
    "ERP software terms",
    "legal agreement",
    "subscription policy",
    "data protection terms",
    "GDPR compliance",
    "DPDPA 2023 India"
  ],
  authors: [{ name: "Pruthatek Legal Team", url: "https://pruthatek.info" }],
  creator: "Prutha TechnoMarket Pvt Ltd",
  publisher: "Pruthatek",
  alternates: {
    canonical: "https://pruthatek.info/terms-and-conditions",
  },
  openGraph: {
    title: "Terms & Conditions • Pruthatek — Legal Terms of Use & SaaS Policy",
    description:
      "These Terms of Use define your legal rights and responsibilities when accessing Pruthatek’s products and SaaS/ERP solutions.",
    url: "https://pruthatek.info/terms-and-conditions",
    siteName: "Pruthatek",
    type: "article",
    locale: "en_IN",
    publishedTime: "2025-11-03T00:00:00+05:30",
    modifiedTime: "2025-11-03T00:00:00+05:30",
    authors: ["https://pruthatek.info"],
    images: [
      {
        url: "https://pruthatek.info/og-terms.jpg",
        width: 1200,
        height: 630,
        alt: "Pruthatek Terms & Conditions - Legal Policy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions • Pruthatek — SaaS/ERP Legal Policy",
    description:
      "Understand how Pruthatek governs service access, licensing, and user obligations under Indian and international law.",
    creator: "@pruthatek",
    images: ["https://pruthatek.info/og-terms.jpg"],
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

export default function TermsPage() {
  const effective = "03/11/2025";

  return (
    <>
      <Script
        id="structured-data-terms"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TermsOfService",
            name: "Pruthatek Terms & Conditions",
            url: "https://pruthatek.info/terms-and-conditions",
            description:
              "The Terms and Conditions outline the legal framework for using Pruthatek's SaaS/ERP services, including account policies, subscriptions, data processing, and user rights.",
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
              "@type": "AgreeAction",
              target: "https://pruthatek.info/terms-and-conditions",
              name: "Agree to Terms",
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
                  <Link href="/terms-and-conditions" className="font-semibold text-slate-900">
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

        <section className="mx-auto max-w-4xl px-6 pt-10 pb-20">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
              Terms &amp; Conditions (Terms of Use)
            </h1>
            <p className="mt-2 text-sm text-slate-600">
              Effective date: <time dateTime={effective}>{effective}</time>
            </p>
          </div>

          <article className="prose prose-slate max-w-none">
            <p>
              <strong>Legal entity:</strong> Prutha TechnoMarket Pvt Ltd, G 10 Parasamani Flats
              Nr. Karmachari Nagar
              Opp Rannapark
              Ghatlodia, Ahmedabad- 380061, Gujarat, India
              <br />
              <strong>Contact:</strong>{" "}
              <a href="mailto:info@pruthatek.com">info@pruthatek.com</a> · 9909918930
            </p>

            <h2 id="acceptance-of-terms">1) Acceptance of Terms</h2>
            <p>
              By accessing <strong>pruthatek.info</strong> or using any Pruthatek products, apps, or
              services (the “Services”), you agree to these Terms. If you use the Services on behalf
              of an organization, you represent that you have authority to bind that organization.
            </p>

            <h2 id="eligibility">2) Eligibility</h2>
            <p>
              You must be at least 18 years old (or the age of majority in your jurisdiction) and
              legally capable of entering into a contract.
            </p>

            <h2 id="accounts-security">3) Accounts &amp; Security</h2>
            <ul>
              <li>You are responsible for accurate account information and safeguarding credentials.</li>
              <li>Notify us immediately of unauthorized access or suspected compromise.</li>
              <li>We may suspend or terminate accounts that violate these Terms or pose security risks.</li>

              {/* NEW: Google Sign-In / SSO clarification */}
              <li>
                We may allow you to create or access an account using third-party single sign-on
                providers such as <strong>Google Sign-In</strong>. When you choose this option, you
                authorize Pruthatek to receive limited account information (for example, your name,
                email address, profile image, and a unique identifier) from that provider to
                authenticate you, create your account, and enable logged-in features such as liking
                and bookmarking blogs. You remain responsible for maintaining the security of your
                third-party account and for reviewing their terms and privacy policies.
              </li>
            </ul>

            <h2 id="subscriptions-payments">4) Subscriptions, Trials &amp; Payments</h2>
            <ul>
              <li>
                Some features require a paid subscription; pricing and billing cycles are shown at
                checkout or in your admin panel.
              </li>
              <li>Trials/promotions are time-limited; standard billing applies after expiry.</li>
              <li>
                Fees are due in advance and non-refundable unless required by law or stated otherwise
                in a written SLA or Order Form.
              </li>
              <li>Prices exclude applicable taxes (including GST), which you agree to pay.</li>
              <li>We may change pricing with reasonable prior notice for renewal terms.</li>
            </ul>

            <h2 id="permitted-use">5) Permitted Use &amp; Fair Usage</h2>
            <ul>
              <li>
                Use the Services solely for your internal business purposes and in accordance with
                documentation.
              </li>
              <li>
                Fair-usage limits (API calls, storage, bandwidth) may apply to protect system
                stability; we may throttle or charge overages per plan.
              </li>
            </ul>

            <h2 id="prohibited-conduct">6) Prohibited Conduct</h2>
            <ul>
              <li>Reverse engineering, decompiling, or attempting to access source code.</li>
              <li>
                Interfering with or disrupting the Services, bypassing security, or testing
                vulnerabilities without authorization.
              </li>
              <li>Uploading malicious code or infringing IP, privacy, or publicity rights.</li>
              <li>Unlawful processing, spam, deceptive practices, or abusive behavior.</li>
              <li>
                Processing prohibited/highly regulated data without prior written consent (e.g., raw
                card PANs outside PCI tools, government-classified data).
              </li>
            </ul>

            <h2 id="customer-data">7) Customer Data &amp; Confidentiality</h2>
            <p>
              “Customer Data” means data you or your users submit to the Services, including personal
              data and files. You retain all rights to your Customer Data. We process it only to
              provide, maintain, and improve the Services, as described in the{" "}
              {/* FIXED: correct path to Privacy Policy */}
              <Link href="/privacy-policy">Privacy Policy</Link> and any data processing addendum (DPA). Each
              party must protect the other’s confidential information using at least reasonable care.
            </p>

            <h3 id="healthcare">7.1 Healthcare/Medical Use (if applicable)</h3>
            <p>
              If you use Pruthatek for hospital/clinical workflows, you are the Data
              Fiduciary/Controller for patient data. You must obtain lawful basis/consents and
              configure access controls. Pruthatek is not a HIPAA-covered entity, but treats health
              data as sensitive personal data under Indian law and processes it per our DPA.
            </p>

            <h2 id="intellectual-property">8) Intellectual Property</h2>
            <p>
              The Services, software, UI/UX, and documentation are owned by Pruthatek or licensors. We
              grant you a limited, non-exclusive, non-transferable license to use the Services during
              an active subscription. Feedback may be used to improve the Services without obligation.
            </p>

            <h2 id="third-parties">9) Third-Party Services &amp; Integrations</h2>
            <p>
              Integrations (e.g., WhatsApp, email/SMS gateways, storage/CDN, analytics, payments,{" "}
              <strong>Google Sign-In</strong>, and other identity providers) are governed by the
              third party’s own terms and privacy policies. When you use such integrations, you may
              be subject to their separate contractual relationship. We are not responsible for
              third-party failures or for how those third parties handle your data outside our
              documented integration. For details on how we receive and use data from Google
              Sign-In, please see the{" "}
              <Link href="/privacy-policy">Privacy Policy</Link>.
            </p>

            <h2 id="beta">10) Beta/Preview Features</h2>
            <p>
              Beta features are provided “as is,” may change or end at any time, and may be less
              reliable than GA features.
            </p>

            <h2 id="availability">11) Availability, Support &amp; Changes</h2>
            <p>
              We aim for high uptime but do not guarantee uninterrupted Service. Maintenance or
              outages may occur. We may modify features, improve security, or discontinue components
              with reasonable notice when practical.
            </p>

            <h2 id="disclaimers">12) Warranties &amp; Disclaimers</h2>
            <p>
              The Services are provided “as is” and “as available.” To the maximum extent permitted by
              law, we disclaim all warranties (express, implied, or statutory), including
              merchantability, fitness for a particular purpose, and non-infringement.
            </p>

            <h2 id="liability">13) Limitation of Liability</h2>
            <ul>
              <li>
                <strong>Indirect damages excluded:</strong> No liability for lost profits, revenues,
                data, goodwill, or indirect/special/consequential damages.
              </li>
              <li>
                <strong>Cap:</strong> Our aggregate liability is limited to the fees you paid in the
                12 months preceding the event giving rise to the claim.
              </li>
            </ul>

            <h2 id="indemnity">14) Indemnification</h2>
            <p>
              You will indemnify and hold Pruthatek and its affiliates harmless from claims, damages,
              and costs arising from your unlawful use of the Services, your Customer Data, or your
              breach of these Terms.
            </p>

            <h2 id="termination">15) Term &amp; Termination</h2>
            <ul>
              <li>These Terms apply while you use the Services.</li>
              <li>
                We may suspend or terminate access for breach, legal risk, non-payment, or security
                reasons.
              </li>
              <li>
                Upon termination, your license ends and we will delete or return Customer Data per the
                Privacy Policy/DPA and retention schedules.
              </li>
            </ul>

            <h2 id="compliance">16) Compliance &amp; Data Protection</h2>
            <p>
              We process personal data under applicable law, including the Digital Personal Data
              Protection Act, 2023 (India) and IT Act 2000 + SPDI Rules. Where relevant, we
              incorporate GDPR/CCPA principles for international users—see the{" "}
              <Link href="/privacy-policy">Privacy Policy</Link>.
            </p>

            <h2 id="law">17) Governing Law &amp; Dispute Resolution</h2>
            <p>
              These Terms are governed by the laws of India. Courts at{" "}
              <strong>[Ahmedabad, Gujarat]</strong> have exclusive jurisdiction, subject to
              arbitration under the Arbitration and Conciliation Act, 1996 (seat: Ahmedabad;
              language: English).
            </p>

            <h2 id="changes">18) Changes to Terms</h2>
            <p>
              We may update these Terms periodically. Material changes will be notified via the
              site/app or email. Continued use means acceptance.
            </p>

            <h2 id="contact">19) Contact</h2>
            <p>
              <strong>Pruthatek</strong>
              <br />
              G 10 Parasamani Flats
              Nr. Karmachari Nagar
              Opp Rannapark
              Ghatlodia, Ahmedabad- 380061, Gujarat.
              <br />
              Email: <a href="mailto:info@pruthatek.com">info@pruthatek.com</a>
              <br />
              {/* Grievance Officer (India): [Name, Email, Contact, Address] */}
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
