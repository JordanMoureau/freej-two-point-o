import JsonLd from "../../components/JsonLd";

import KeywordBubbles from "../../components/keywordbubbles";
import GetProposal from "../../components/getprop";
import Review from "../../components/review";
import DoubleImages from "../../components/doubleimages";
import ContactForm from "../../components/contactform";
import SideBar from "../../components/sidebar";
import NavBar from "../../components/nav";

export const metadata = {
  title: "PPC Ad Services — Google & Meta Ads That Convert | Freelance Jordan",
  description:
    "Performance-focused PPC management for Google & Meta. Smart targeting, tight creatives, and landing pages that actually convert.",
  alternates: { canonical: "https://freelancejordan.com/services/ppc-ads" },
  openGraph: {
    title: "PPC Ad Services — Google & Meta Ads That Convert",
    description:
      "Full-funnel PPC: strategy, builds, creatives, landing pages, tracking, and weekly optimization.",
    url: "https://freelancejordan.com/services/ppc-ads",
    images: [{ url: "/og-ppc-ads.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PPC Ad Services — Google & Meta Ads That Convert",
    description:
      "Get profitable campaigns with crystal-clear tracking and reporting.",
    images: ["/og-ppc-ads.jpg"],
  },
  keywords: [
    "PPC services",
    "Google Ads management",
    "Meta Ads",
    "paid search",
    "remarketing",
    "landing page optimization",
    "Freelance Jordan",
  ],
};

const bubbles = [
  { label: "LOCAL SEO STRATEGIES", href: "/our-services/seo-optimization" },
  { label: "CUSTOM WEBSITE DESIGN", href: "/our-services/custom-websites" },
  { label: "GOOGLE ADS MANAGEMENT", href: "/our-services/ppc-ad-services" },
  { label: "BRANDING & LOGOS", href: "/our-services/logos-and-branding" },
  { label: "IN-HOUSE ANALYTICS & TRACKING", href: "/process" },
  { label: "100% CDA BASED AGENCY", href: "/about" },
];

const ProposalList = [
  "What your ad spend is doing now vs what it could be doing",
  "How we can lower your cost-per-lead while increasing conversions",
  "Realistic projections for 3–6 month ROI from optimized campaigns",
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

export default function PpcAdServices() {
  const site = "https://freelancejordan.com";

  // --- JSON-LD: MarketingService (PPC) ---
  const service = {
    "@context": "https://schema.org",
    "@type": "MarketingService",
    name: "PPC Advertising Services",
    serviceType: "Pay-Per-Click Advertising",
    url: `${site}/services/ppc-ads`,
    description:
      "Performance PPC on Google & Meta: campaign architecture, creative, landing pages, tracking, and weekly optimization.",
    provider: { "@type": "Person", name: "Jordan Moureau" },
    areaServed: ["United States"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "PPC Packages",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Starter PPC",
          description:
            "Single channel (Google or Meta), core campaigns, conversion tracking, weekly checks.",
        },
        {
          "@type": "Offer",
          name: "Growth PPC",
          description:
            "Multi-campaign buildout, ad creative testing, remarketing, landing page iterations.",
        },
        {
          "@type": "Offer",
          name: "Scale PPC",
          description:
            "Full-funnel across Google + Meta, advanced audiences, server-side tracking, and CRO program.",
        },
      ],
    },
    image: `${site}/og-ppc-ads.jpg`,
  };

  // --- JSON-LD: FAQ (common pre-sale questions) ---
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What platforms do you manage?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Primarily Google Ads (Search, Performance Max, Display, YouTube) and Meta Ads (Facebook/Instagram). I also advise on LinkedIn if B2B fits.",
        },
      },
      {
        "@type": "Question",
        name: "What budget do I need to start?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most accounts see clean learnings at $1.5k–$5k/month in ad spend. For competitive niches, $5k–$10k/month accelerates optimization.",
        },
      },
      {
        "@type": "Question",
        name: "Do you build landing pages and tracking?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes—conversion-focused landing pages, analytics, and event tracking are included so we can measure and improve ROI.",
        },
      },
      {
        "@type": "Question",
        name: "How fast will I see results?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Expect meaningful signal in 2–4 weeks and steady improvement over 60–90 days as we iterate targeting, bids, and creatives.",
        },
      },
      {
        "@type": "Question",
        name: "What does reporting look like?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You’ll get a clear dashboard and monthly summary covering spend, CPC/CPA/ROAS, top terms/audiences, and next-step actions.",
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
        name: "PPC Ad Services",
        item: `${site}/services/ppc-ads`,
      },
    ],
  };

  return (
    <main className="services ppc-ads">
      <JsonLd json={service} />
      <JsonLd json={faq} />
      <JsonLd json={breadcrumbs} />

      <NavBar color={"black"} />

      <div className="main">
        <div className="column-one">
          <div className="text-block">
            <p>Locally managed Google Ads that actually make you money.</p>
            <h1>Google PPC Advertising Done Right</h1>
            <h4>
              Precision targeting, transparent reporting, and continuous
              optimization—all from Coeur d’Alene, Idaho.
            </h4>
            <p>
              We don’t believe in “set it and forget it.” Every dollar should
              earn its keep. Our PPC campaigns are data-driven, tightly tracked,
              and refined weekly for conversion quality, not just clicks.
            </p>
          </div>

          <KeywordBubbles items={bubbles} />

          <GetProposal
            image={"/flowerscrop.png"}
            header={"See what Google Ads could really be doing for you"}
            alt={"Google Ads performance report on screen"}
            list={ProposalList}
          />

          <div className="text-block">
            <p>Most campaigns waste 30–60% of ad spend on bad clicks.</p>
            <h1>We make every dollar count.</h1>
            <h4>
              With precise keyword targeting, negative keyword pruning, and
              call-tracking analytics, we eliminate waste and double down on
              what works.
            </h4>
            <p>
              From search and display to remarketing and YouTube, we manage the
              full funnel. Our Google Ads management includes:
            </p>

            <ul>
              <li>Comprehensive campaign audits & setup</li>
              <li>Real-time conversion tracking & analytics dashboards</li>
              <li>Keyword and audience research tuned to your service area</li>
              <li>Ongoing bid optimization & A/B testing</li>
              <li>Monthly reports that make sense</li>
            </ul>

            <p>
              Whether you’re a contractor, restaurant, or local retailer—our PPC
              management helps you win back time and scale profitably without
              hiring an in-house marketing team.
            </p>
          </div>

          <DoubleImages margin="-14rem" images={images}>
            <Review
              review={
                "She wasn't afraid to be blunt with me about what would and wouldn't best fit my business."
              }
              author={"-Joe W @ Strategic Flow Consulting"}
              link={"/testimonials"}
              where={"Testimonials"}
            />
          </DoubleImages>

          <div className="text-block">
            <p>No agencies overseas. No middlemen. Just results.</p>
            <h1>In-House PPC Management</h1>
            <h4>
              When your campaigns are managed by someone who understands your
              local market, the data actually means something.
            </h4>
            <p>
              From North Idaho to Spokane, we work directly with small
              businesses who want predictable lead flow without the waste. Every
              campaign we build is tracked, tuned, and improved in real time.
            </p>
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
