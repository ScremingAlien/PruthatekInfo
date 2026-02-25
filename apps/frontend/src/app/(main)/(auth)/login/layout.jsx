import React from 'react'
export const metadata = {
  title: "Login • Pruthatek Account Access",
  description:
    "Securely sign in to your Pruthatek account to access your SaaS dashboard, ERP data, or cloud-based tools.",
  keywords: [
    "pruthatek login",
    "saas login",
    "erp portal access",
    "customer login",
    "account authentication",
    "secure sign in",
  ],
  alternates: {
    canonical: "https://pruthatek.info/login",
  },
  openGraph: {
    title: "Login • Pruthatek",
    description:
      "Access your Pruthatek ERP or SaaS account securely. Manage your data and services with ease.",
    url: "https://pruthatek.info/login",
    siteName: "Pruthatek",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://pruthatek.info/og-login.jpg",
        width: 1200,
        height: 630,
        alt: "Pruthatek Login Page",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Login to Pruthatek Dashboard",
    description:
      "Access your Pruthatek ERP and SaaS platform securely. Manage your business efficiently.",
    images: ["https://pruthatek.info/og-login.jpg"],
  },
  robots: { index: false, follow: false }, // Prevents search engines from indexing login page
  category: "Authentication",
};

export default function layout({children}) {
  return (
    <>
     {children} 
    </>
  )
}
