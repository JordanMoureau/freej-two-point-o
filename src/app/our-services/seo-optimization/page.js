import JsonLd from "@/app/components/JsonLd";

import KeywordBubbles from "@/app/components/keywordbubbles";
import GetProposal from "@/app/components/getprop";
import Review from "@/app/components/review";
import DoubleImages from "@/app/components/doubleimages";
import ContactForm from "@/app/components/contactform";
import SideBar from "@/app/components/sidebar";
import NavBar from "@/app/components/nav";

const images = [
  {
    src: "/thebookshelfofanSEOexpert.png",
    alt: "Bookshelf of a Coeur d'Alene SEO specialist",
  },
  {
    src: "/anSEOexpertsdesk.png",
    alt: "Desk of an SEO expert in Coeur d'Alene, Idaho",
  },
];

export const metadata = {
  title: "SEO Services — Get Found & Get Leads | Freelance Jordan",
  description:
    "SEO services for service businesses, local brands, and growing companies: technical SEO, content strategy, and local search built to generate real leads.",
  alternates: {
    canonical: "https://freelancejordan.com/services/seo-services",
  },
  openGraph: {
    title: "SEO Services — Get Found & Get Leads",
    description:
      "SEO strategy, technical optimization, and content architecture for brands that want rankings that actually turn into revenue.",
    url: "https://freelancejordan.com/services/seo-services",
    images: [{ url: "/og-seo-services.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Services — Get Found & Get Leads",
    description:
      "Local and national SEO campaigns built to rank, convert, and scale.",
    images: ["/og-seo-services.jpg"],
  },
  keywords: [
    "SEO services",
    "search engine optimization",
    "local SEO",
    "technical SEO",
    "SEO agency Coeur d'Alene",
    "Freelance Jordan",
  ],
};

export default function SeoOptimization() {
  const site = "https://freelancejordan.com";

  // --- JSON-LD: Service ---
  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "SEO Services",
    serviceType: "Search Engine Optimization",
    url: `${site}/services/seo-services`,
    description:
      "SEO strategy, technical optimization, local search, and content architecture for service-based businesses and growth-focused brands.",
    provider: { "@type": "Person", name: "Jordan Moureau" },
    areaServed: ["United States"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "SEO Packages",
      itemListElement: [
        {
          "@type": "Offer",
          name: "SEO Audit & Roadmap",
          description:
            "Full technical and content audit with prioritized recommendations, keyword map, and 90-day action plan.",
        },
        {
          "@type": "Offer",
          name: "Local SEO Sprint",
          description:
            "Local search optimization for service-area businesses: Google Business Profile, landing pages, citations, and reviews strategy.",
        },
        {
          "@type": "Offer",
          name: "Ongoing SEO Partnership",
          description:
            "Month-to-month SEO management including content, on-page optimization, tracking, and strategy reviews.",
        },
      ],
    },
    image: `${site}/og-seo-services.jpg`,
  };

  // --- JSON-LD: FAQ ---
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What’s included in your SEO services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most projects include a technical audit, keyword and intent research, on-page optimization, content recommendations, local SEO tuning, and clear reporting. Ongoing SEO includes regular strategy calls and prioritized next steps.",
        },
      },
      {
        "@type": "Question",
        name: "How long does SEO take to work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most clients start to see meaningful movement in 3–4 months, with stronger compounding results over 6–12 months. Timelines depend on your market, competition, and how aggressively we implement changes.",
        },
      },
      {
        "@type": "Question",
        name: "Do you work with both local and national brands?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. I work with local service-area businesses that need to rank in specific regions, as well as brands with broader or multi-location search goals.",
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
        name: "SEO Services",
        item: `${site}/services/seo-services`,
      },
    ],
  };

  const bubbles = [
    "Technical SEO",
    "Local SEO",
    "On-Page Optimization",
    "Keyword Strategy",
    "Content Architecture",
    "Service Landing Pages",
    "Google Business Profile",
    "Site Speed & Core Web Vitals",
  ];

  const ProposalList = [
    "SEO audit and clear action plan",
    "Keyword map aligned to your services",
    "Local SEO recommendations for your market",
    "Prioritized fixes you can actually implement",
    "Options for one-time or ongoing support",
  ];

  return (
    <main className="services seo-services">
      <JsonLd json={service} />
      <JsonLd json={faq} />
      <JsonLd json={breadcrumbs} />

      <NavBar color={"black"} />
      <div className="main">
        <div className="column-one">
          <div className="text-block">
            <p>Before people call you, they search for you.</p>
            <h1>SEO Services That Turn Searches Into Leads</h1>
            <h4>
              Not fluff, not mystery—just{" "}
              <strong>clean strategy, clear structure, and real results</strong>
              .
            </h4>
            <p>
              If your website looks fine but isn’t filling your inbox, it’s not
              doing its job. I help Idaho businesses and service brands across
              the U.S. get visible in search, attract the right visitors, and
              turn them into customers with SEO that’s built into the bones of
              your site.
            </p>
          </div>
          {/* 
          <KeywordBubbles items={bubbles} /> */}

          <GetProposal
            header={"See what strategic SEO could do for your traffic"}
            alt={"SEO strategy and roadmap proposal"}
            list={ProposalList}
          />

          <div className="text-block">
            <p>SEO is more than keywords and blog posts.</p>
            <h1>What modern SEO really looks like</h1>
            <h4>
              Rankings are nice. <strong>Revenue</strong> is better.
            </h4>
            <p>
              Modern SEO is the combination of technical health, search intent,
              content quality, and local visibility. I build SEO systems that
              support your whole business, not just your homepage.
            </p>

            <ul>
              <li>Technical audits that uncover what’s holding you back</li>
              <li>
                Keyword and intent research mapped to your actual services
              </li>
              <li>
                Local SEO improvements so you show up where your customers are
              </li>
              <li>
                On-page optimization, internal linking, and structured content
              </li>
              <li>Clear reporting so you know what’s working (and why)</li>
            </ul>

            <p>
              Whether you&apos;re launching a new site or trying to revive an
              old one, we’ll prioritize what moves the needle first and build
              from there.
            </p>
          </div>

          <Review
            review="In just a few months we went from basically invisible to actually showing up when people search our services. It's been a huge shift."
            author="-Brandon Derosier-Zahnow @ Spokane Home Pros"
            link="https://www.google.com/search?q=Freelance+Jordan&hl=en#lrd=0x0:5980785747813114943,1"
            where="Google"
          />

          <div className="text-block">
            <p>SEO strategy, development, and implementation—all in-house.</p>
            <h1>Local SEO Expertise, Built to Scale</h1>
            <h4>
              From initial audit to ongoing optimization, everything is handled
              right here in Coeur d&apos;Alene.
            </h4>
            <div className="callout">100% CDA Crafted</div>
          </div>

          <ContactForm />

          <div className="cdas">
            <div className="middle-bits">
              <p>SEO-First Web Design & Strategy</p>
              <h1>Coeur D&apos;Alene’s SEO Partner for Growing Brands</h1>
              <h4>Small studio. Big impact.</h4>
              <a className="mid-button" href="/our-story/press-releases">
                Press Releases
              </a>
            </div>
            <Review
              review="Jordan made SEO feel understandable instead of overwhelming. Traffic is up, leads are better quality, and we finally have a plan."
              author="-Skyler P @ Regional Service Business"
              link="https://google.com"
              where="Google"
            />
          </div>
        </div>

        <div className="column-two">
          <SideBar />
        </div>
      </div>
    </main>
  );
}
