import { Raleway } from "next/font/google";
import "./globals.scss";
import Topper from "./components/topper";
import Footer from "./components/footer";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap", // improves performance
  weight: ["400", "500", "600", "700", "800", "900"], // choose what you actually use
});

// app/layout.js

export const metadata = {
  metadataBase: new URL("https://freelancejordan.com"),

  title: {
    default: "Freelance Jordan — Web Design & SEO That Converts",
    template: "%s | Freelance Jordan",
  },

  description:
    "Freelance Jordan builds high-performing websites and SEO strategies for businesses that want to grow fast, rank higher, and convert more leads.",

  keywords: [
    "web design",
    "SEO",
    "freelance web designer",
    "SEO strategist",
    "lead funnels",
    "Next.js websites",
    "digital marketing",
    "Freelance Jordan",
  ],

  authors: [{ name: "Jordan Moureau", url: "https://freelancejordan.com" }],
  creator: "Freelance Jordan",
  publisher: "Freelance Jordan",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://freelancejordan.com",
    siteName: "Freelance Jordan",
    title: "Freelance Jordan — Web Design & SEO That Converts",
    description:
      "Freelance Jordan builds high-performing websites and SEO strategies for businesses that want to grow fast, rank higher, and convert more leads.",
    images: [
      {
        url: "/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Freelance Jordan logo on a minimalist white and black design background",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Freelance Jordan — Web Design & SEO That Converts",
    description:
      "High-performing websites. Smart SEO. Real results. Work with Freelance Jordan to grow your business online.",
    creator: "@freelancejordan",
    images: ["/og-default.jpg"],
  },

  alternates: {
    canonical: "https://freelancejordan.com",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://use.typekit.net" />
        <link rel="stylesheet" href="https://use.typekit.net/lyg1iex.css" />
      </head>
      <body className={`${raleway.variable}`}>
        <Topper />
        {children} <Footer />
      </body>
    </html>
  );
}
