import React from 'react'
export const metadata = {
  title: "Contact Us • Pruthatek — Get in Touch for SaaS, ERP & IT Solutions",
  description:
    "Contact Pruthatek for inquiries, partnerships, or customer support regarding our SaaS, ERP, and digital solutions. We're here to help your business grow.",
  keywords: [
    "contact pruthatek",
    "support pruthatek",
    "pruthatek helpdesk",
    "business inquiries",
    "SaaS customer support",
    "ERP solutions India",
    "IT consultancy contact",
    "Ahmedabad software company",
  ],
  alternates: {
    canonical: "https://pruthatek.info/contact-us",
  },
  openGraph: {
    title: "Contact Pruthatek — Connect with Our SaaS Experts",
    description:
      "Reach out to Pruthatek for technical support, ERP inquiries, or partnership opportunities.",
    url: "https://pruthatek.info/contact-us",
    siteName: "Pruthatek",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://pruthatek.info/web-app-manifest-192x192.png",
        width: 1200,
        height: 630,
        alt: "Pruthatek Contact Page",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Pruthatek — We're Here to Help",
    description:
      "Have questions about Pruthatek SaaS or ERP solutions? Contact us for support or collaboration.",
    images: ["https://pruthatek.info/web-app-manifest-192x192.png"],
  },
  robots: { index: true, follow: true },
  category: "Contact",
};
export default function layout({children}) {
  return (
    <>
     {children} 
    </>
  )
}
