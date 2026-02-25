import React from 'react'
export const metadata = {
  title: "Create Account • Pruthatek Sign Up for SaaS & ERP Platform",
  description:
    "Register for a new Pruthatek account to access SaaS products, ERP modules, and business automation tools built for enterprises and startups.",
  keywords: [
    "pruthatek signup",
    "register account",
    "create pruthatek account",
    "saas registration",
    "erp software trial",
    "business automation tools",
  ],
  alternates: {
    canonical: "https://pruthatek.info/register",
  },
  openGraph: {
    title: "Sign Up • Pruthatek Account Registration",
    description:
      "Join Pruthatek today — create your account to explore our SaaS and ERP products built for modern businesses.",
    url: "https://pruthatek.info/register",
    siteName: "Pruthatek",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://pruthatek.info/web-app-manifest-192x192.png",
        width: 1200,
        height: 630,
        alt: "Pruthatek Sign Up Page",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Create Your Pruthatek Account",
    description:
      "Sign up for Pruthatek SaaS and ERP platform to experience enterprise-grade tools for automation and growth.",
    images: ["https://pruthatek.info/web-app-manifest-192x192.png"],
  },
  robots: { index: false, follow: false },
  category: "Authentication",
};

export default function layout({children}) {
  return (
    <>
     {children} 
    </>
  )
}
