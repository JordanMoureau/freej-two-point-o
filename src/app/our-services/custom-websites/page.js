import JsonLd from "@/app/components/JsonLd";

import KeywordBubbles from "@/app/components/keywordbubbles";
import GetProposal from "@/app/components/getprop";
import Review from "@/app/components/review";
import DoubleImages from "@/app/components/doubleimages";
import ContactForm from "@/app/components/contactform";
import SideBar from "@/app/components/sidebar";
import NavBar from "@/app/components/nav";

export const metadata = {
  title: "Custom Websites — Fast, Clean, Conversion-Ready | Freelance Jordan",
  description:
    "Bespoke, performance-first sites on Next.js. Design systems, reusable components, analytics, and SEO baked in.",
  alternates: {
    canonical: "https://freelancejordan.com/services/custom-websites",
  },
  openGraph: {
    title: "Custom Websites — Fast, Clean, Conversion-Ready",
    description:
      "Next.js builds with design systems, Core Web Vitals, accessibility, and SEO foundations.",
    url: "https://freelancejordan.com/services/custom-websites",
    images: [{ url: "/og-custom-websites.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Websites — Fast, Clean, Conversion-Ready",
    description: "Bespoke Next.js builds with measurable results.",
    images: ["/og-custom-websites.jpg"],
  },
  keywords: [
    "custom websites",
    "Next.js web design",
    "performance web design",
    "Core Web Vitals",
    "accessible web design",
    "Freelance Jordan",
  ],
};

const bubbles = [
  { label: "SEO OPTIMIZED WEBSITES", href: "/our-services/seo-optimization" },
  { label: "BRANDING & LOGO DESIGN", href: "/our-services/logos-and-branding" },
  { label: "LOCAL PPC ADVERTISING", href: "/our-services/ppc-ad-services" },
  { label: "CUSTOM DESIGN & UX", href: "/our-services/custom-branding" },
  { label: "100% IDAHO BUILT", href: "/our-story" },
  { label: "REAL SMALL BUSINESS RESULTS", href: "/we-rank-sites/case-studies" },
];

const proposalPoints = [
  "How a custom site can double your qualified leads",
  "What speed & SEO improvements could mean for revenue",
  "Where your competitors are beating you—and how to win them back",
];

const images = [
  {
    src: "/thebookshelfofanSEOexpert.png",
    alt: "A Coeur d'Alene SEO agencies bookshelf",
  },
  {
    src: "/anSEOexpertsdesk.png",
    alt: "The desk of an SEO expert in Coeur D'Alene, Idaho",
  },
];

export default function CustomWebsites() {
  const site = "https://freelancejordan.com";

  // --- JSON-LD: Service ---
  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Custom Website Design & Build (Next.js)",
    serviceType: "Web Design",
    url: `${site}/services/custom-websites`,
    provider: { "@type": "Person", name: "Jordan Moureau" },
    areaServed: ["United States"],
    description:
      "Bespoke, performance-first websites on Next.js with reusable components, accessibility, analytics, and SEO foundations.",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Custom Website Packages",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Launch Site",
          description:
            "Up to 5 pages, design system starter, analytics, basic SEO.",
          // "priceSpecification": { "@type": "PriceSpecification", priceCurrency: "USD", price: "5000" }
        },
        {
          "@type": "Offer",
          name: "Growth Site",
          description:
            "10–15 pages, CMS, components library, performance & SEO pass.",
        },
        {
          "@type": "Offer",
          name: "Scale Site",
          description:
            "Complex IA, integrations, a11y audit, CRO setup, and SEO roadmap.",
        },
      ],
    },
    image: `${site}/og-custom-websites.jpg`,
  };

  // --- JSON-LD: FAQ (nice rich-result target) ---
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long does a custom site take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Typical builds run 4–8 weeks depending on scope, content readiness, and integrations.",
        },
      },
      {
        "@type": "Question",
        name: "Do you support WordPress or Shopify?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. I primarily ship Next.js, and I also audit/tune WordPress & Shopify for speed and SEO.",
        },
      },
      {
        "@type": "Question",
        name: "What about SEO and analytics?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Core Web Vitals, on-page SEO, structured data, and analytics/events are built in from day one.",
        },
      },
    ],
  };

  // --- JSON-LD: Breadcrumbs ---
  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${site}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Custom Websites",
        item: `${site}/services/custom-websites`,
      },
    ],
  };

  return (
    <main className="services custom-websites">
      <JsonLd json={service} />
      <JsonLd json={faq} />
      <JsonLd json={breadcrumbs} />

      <NavBar color={"black"} />
      <div className="main">
        <div className="column-one">
          <div className="text-block">
            <p>Custom Websites for Real Idaho Businesses</p>
            <h1>Websites that don’t just look good—they perform</h1>
            <h4>
              Every site we build is{" "}
              <strong>
                engineered for conversions, speed, and SEO visibility
              </strong>{" "}
              from the ground up.
            </h4>
            <p>
              We don’t use page builders or recycled templates. Each build is
              handcrafted for your business model, ideal customers, and search
              intent. From the sitemap to the copy—we design for Google and for
              humans equally.
            </p>
          </div>

          <KeywordBubbles items={bubbles} />

          <GetProposal
            image={"/journal.png"}
            header={"Get a free site proposal today"}
            alt={"Freelance Jordan custom website project preview"}
            list={proposalPoints}
          />

          <div className="text-block">
            <p>What makes our sites different?</p>
            <h1>Fast. Flexible. Future-proof.</h1>
            <h4>
              Built with <strong>Next.js</strong> for speed,{" "}
              <strong>on-page SEO</strong> for visibility, and{" "}
              <strong>UX strategy</strong> for real-world results.
            </h4>
            <p>
              Your website shouldn’t be a digital brochure—it should be your
              best salesperson. Our websites rank faster, load instantly, and
              turn visitors into loyal customers.
            </p>
            <ul>
              <li>Fully responsive mobile and desktop design</li>
              <li>SEO structure built-in from the first line of code</li>
              <li>Google Analytics and Search Console integration</li>
              <li>Conversion tracking and lead capture systems</li>
              <li>Clean, secure, and lightning-fast hosting setup</li>
            </ul>
            <p>
              Whether you’re in Spokane, Post Falls, or right here in Coeur
              d’Alene—our in-house builds give you the local advantage.
            </p>
          </div>

          <DoubleImages margin="-12rem" images={images}>
            <Review
              review={"I don't think I could have done this without you!"}
              author={"–Jena, N is for Nature Play"}
              link={"/testimonials"}
              where={"Testimonials"}
            />
          </DoubleImages>

          <div className="text-block">
            <p>Built local. Managed local. Supported local.</p>
            <h1>We’re not a template shop—we’re your web partner</h1>
            <h4>
              No outsourcing, no cookie-cutter sites—just custom web design that
              performs and lasts.
            </h4>
            <div className="callout">
              Every website includes integrated SEO foundations from day one.
            </div>
          </div>

          <ContactForm />
        </div>

        <div className="column-two">
          <SideBar />
        </div>
      </div>
    </main>
  );
}
