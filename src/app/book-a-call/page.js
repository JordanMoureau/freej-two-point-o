import JsonLd from "../components/JsonLd";
import BookCallQuiz from "../components/bookacallquiz";
import NavBar from "../components/nav";

export const metadata = {
  title: "Book a Call with Jordan | Freelance Jordan",
  description:
    "Frazzled by your website or marketing? Book a no-pressure clarity call with Jordan and get real guidance, not tech jargon.",
  alternates: { canonical: "https://freelancejordan.com/book-a-call" },
  openGraph: {
    title: "Book a Call with Jordan | Freelance Jordan",
    description:
      "Overwhelmed by your website, SEO, or marketing? Hop on a Zoom call with Jordan and get clear next steps.",
    url: "https://freelancejordan.com/book-a-call",
    images: [{ url: "/og-book-a-call.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Call with Jordan",
    description:
      "A calm, clear conversation about your website and marketing—no fluff, no shaming, no jargon.",
    images: ["/og-book-a-call.jpg"],
  },
  keywords: [
    "book a call",
    "website help",
    "SEO help",
    "marketing clarity call",
    "Freelance Jordan",
  ],
};

export default function BookACallPage() {
  const site = "https://freelancejordan.com";

  // --- JSON-LD: Service / Action / Breadcrumbs ---
  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Website & SEO Clarity Call",
    url: `${site}/book-a-call`,
    description:
      "A 30–45 minute Zoom call with Jordan to talk through your website, SEO, and marketing questions.",
    provider: {
      "@type": "Organization",
      name: "Freelance Jordan",
      url: site,
      logo: `${site}/logo.png`,
    },
    areaServed: {
      "@type": "Place",
      name: "United States",
    },
    audience: {
      "@type": "Audience",
      audienceType: "Small business owners, service providers, shop owners",
    },
  };

  const howTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Book a Clarity Call with Jordan",
    description:
      "Answer a few quick questions, share your contact info, and schedule a call that fits your calendar.",
    step: [
      {
        "@type": "HowToStep",
        name: "Answer a few quick questions",
        text: "Tell Jordan where you’re at, what’s stressing you out, and what kind of help you’re hoping for.",
      },
      {
        "@type": "HowToStep",
        name: "Share your contact info",
        text: "Add your name, business name, website (if you have one), and best email.",
      },
      {
        "@type": "HowToStep",
        name: "Pick a time that works",
        text: "Use the scheduler to pick a time for your Zoom call with Jordan.",
      },
    ],
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site },
      {
        "@type": "ListItem",
        position: 2,
        name: "Book a Call",
        item: `${site}/book-a-call`,
      },
    ],
  };

  return (
    <main className="book-a-call">
      <JsonLd json={service} />
      <JsonLd json={howTo} />
      <JsonLd json={breadcrumbs} />
      {/* Background hero / messaging if you want it under the overlay */}

      <BookCallQuiz />
    </main>
  );
}
