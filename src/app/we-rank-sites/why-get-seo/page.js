import JsonLd from "../../components/JsonLd";

import KeywordBubbles from "@/app/components/keywordbubbles";
import GetProposal from "@/app/components/getprop";
import Review from "@/app/components/review";
import DoubleImages from "@/app/components/doubleimages";
import ContactForm from "@/app/components/contactform";
import SideBar from "@/app/components/sidebar";
import NavBar from "@/app/components/nav";

const bubbles = [
  { label: "SEO Agency • Coeur d'Alene", href: "/seo" },
  { label: "Local SEO (CDA & Spokane)", href: "/seo/local" },
  { label: "Affordable SEO Plans", href: "/our-services/seo-optimization" },
  { label: "In‑House Web Engineering", href: "/web" },
  { label: "Content & Link Strategy", href: "/content" },
  { label: "100% Idaho‑Based Team", href: "/about" },
];

const proposalBullets = [
  "Your current rankings in Coeur d'Alene, Post Falls, Hayden, Spokane",
  "What it would take to become the go‑to result for your services",
  "Timeline & ROI projections based on competitors and search volume",
];

const images = [
  {
    src: "/thebookshelfofanSEOexpert.png",
    alt: "SEO agency in Coeur d'Alene: research library and notebooks",
  },
  {
    src: "/anSEOexpertsdesk.png",
    alt: "Local SEO expert desk setup in Coeur d'Alene, Idaho",
  },
];

export const metadata = {
  title: "Why Get SEO — Make Google Work For You | Freelance Jordan",
  description:
    "SEO is the difference between being found and being forgotten. Discover why investing in SEO drives traffic, builds trust, and grows your business long-term.",
  alternates: {
    canonical: "https://freelancejordan.com/why-get-seo",
  },
  openGraph: {
    title: "Why Get SEO — Make Google Work For You",
    description:
      "Learn why SEO isn’t optional anymore. See how ranking higher on Google can multiply your leads, sales, and brand authority.",
    url: "https://freelancejordan.com/why-get-seo",
    images: [{ url: "/og-why-get-seo.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Get SEO — Make Google Work For You",
    description:
      "SEO is the difference between being found and being forgotten. Discover why it matters for your business.",
    images: ["/og-why-get-seo.jpg"],
  },
  keywords: [
    "why get SEO",
    "SEO benefits",
    "organic traffic growth",
    "Google rankings",
    "small business SEO",
    "Freelance Jordan",
  ],
};

export default function WhyGetSeo() {
  const site = "https://freelancejordan.com";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Why Get SEO — Make Google Work For You",
    description:
      "SEO is the difference between being found and being forgotten. Learn how strategic SEO increases visibility, trust, and conversions for your business.",
    image: `${site}/og-why-get-seo.jpg`,
    author: { "@type": "Person", name: "Jordan Moureau" },
    publisher: {
      "@type": "Organization",
      name: "Freelance Jordan",
      logo: {
        "@type": "ImageObject",
        url: `${site}/logo.png`,
      },
    },
    url: `${site}/why-get-seo`,
    datePublished: "2025-10-15", // update dynamically if needed
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is SEO really worth the investment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. SEO builds long-term visibility and trust. Unlike ads that stop when your budget runs out, SEO compounds over time, bringing in consistent leads.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to see SEO results?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Typically 3–6 months for initial growth, and 6–12 for sustained rankings. SEO is long-term growth, not overnight magic.",
        },
      },
      {
        "@type": "Question",
        name: "Can SEO replace paid ads?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Not exactly—but it reduces your reliance on them. Strong organic rankings mean you can spend less on ads and still attract consistent traffic.",
        },
      },
      {
        "@type": "Question",
        name: "Do you handle both SEO and website design?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. Freelance Jordan offers SEO, web design, and lead funnels so your entire digital presence works together to convert.",
        },
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
        name: "Why Get SEO",
        item: `${site}/why-get-seo`,
      },
    ],
  };

  return (
    <main className="whygetseo">
      <JsonLd json={articleSchema} />
      <JsonLd json={faqSchema} />
      <JsonLd json={breadcrumbs} />

      <NavBar color={"black"} />
      <div className="main">
        <div className="column-one">
          {/* Header block (no Hero) */}
          <div className="text-block">
            <p>Small, Idaho‑based, and relentless about results.</p>
            <h1>Why Get SEO?</h1>
            <h4>
              Because showing up first in Coeur d'Alene search results means you
              get the call first—<strong>again and again</strong>.
            </h4>
            <p>
              If you serve customers in Coeur d'Alene, Post Falls, Hayden, or
              Spokane, search is the front door to your business. The right SEO
              turns Google into a steady pipeline of qualified leads that keep
              costs predictable and revenue consistent. No gimmicks—just
              disciplined technical fixes, content that answers real queries,
              and links that build authority.
            </p>
          </div>
          <KeywordBubbles items={bubbles} />
          <GetProposal
            image={"/anSEOexpertsbagel.png"}
            header={"Free Local Visibility Review — Delivered Fast"}
            alt={"Coeur d'Alene SEO proposal preview"}
            list={proposalBullets}
          />

          <div className="text-block">
            <p>Search Engine Optimization compounds—ads do not.</p>
            <h1>What happens when you don’t invest in SEO</h1>
            <h4>
              Competitors become Google’s recommendation. Then they become
              everyone’s.
            </h4>
            <p>
              When your site isn’t optimized, you end up paying more and getting
              less:
            </p>
            <ul>
              <li>Ad budgets balloon to chase a handful of leads</li>
              <li>
                Networking takes nights & weekends with inconsistent payoff
              </li>
              <li>Revenue swings wildly month to month</li>
              <li>You hire based on hope instead of pipeline</li>
              <li>Your brand loses local authority to louder competitors</li>
            </ul>
            <p>
              A well‑built, customer‑first website + local SEO is the engine for
              sustainable growth. It lowers your blended CPL over time and keeps
              the phones ringing—without you having to grind for every inquiry.
            </p>
            <h1>It’s not you—it’s your toolkit.</h1>
            <p>
              Most sites in CDA are held back by slow code, weak on‑page
              signals, thin content, and missing internal links. We fix the
              stack, then publish content that captures <em>how</em> your buyers
              actually search (service + city, near‑me, comparisons, pricing,
              and FAQs).
            </p>
          </div>

          <DoubleImages margin="-12rem" images={images}>
            <Review
              review={
                "If you are looking for help designing a website that converts to sales, I highly recommend Jordan."
              }
              author={"— Cheree S., Success Without Sacrifice Coaching"}
              link={
                "http://facebook.com/profile.php?id=61560853709737&sk=reviews"
              }
              where={"Facebook"}
            />
          </DoubleImages>

          <div className="text-block">
            <p>
              No outsourcing. No gray‑hat shortcuts. Just focused execution.
            </p>
            <h1>How our Coeur d'Alene SEO works</h1>
            <h4>
              Technical cleanup → content & entity strategy → internal links →
              local authority building.
            </h4>
            <ul>
              <li>
                <strong>Technical SEO:</strong> crawl/index fixes, speed, Core
                Web Vitals, sitemaps, canonical logic
              </li>
              <li>
                <strong>Content:</strong> service pages, location hubs (CDA,
                Post Falls, Hayden, Spokane), supporting blogs, and FAQs
              </li>
              <li>
                <strong>On‑page:</strong> titles, headings, schema, images, and
                conversion paths that match intent
              </li>
              <li>
                <strong>Internal links:</strong> clear topic clusters that
                signal expertise and move rankings faster
              </li>
              <li>
                <strong>Local authority:</strong> citations, PR mentions, and
                relevant links that stick
              </li>
            </ul>
            <div className="callout">
              100% Idaho‑based. Built for Coeur d'Alene businesses.
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
