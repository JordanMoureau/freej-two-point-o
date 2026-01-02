import JsonLd from "../components/JsonLd";
import KeywordBubbles from "../components/keywordbubbles";
import GetProposal from "../components/getprop";
import Review from "../components/review";
import DoubleImages from "../components/doubleimages";
import ContactForm from "../components/contactform";
import SideBar from "../components/sidebar";
import NavBar from "../components/nav";

export const metadata = {
  title: "Services — Web Design, SEO & Funnels | Freelance Jordan",
  description:
    "High-performing websites, search-first content, and conversion funnels. Strategy + build + iteration for measurable growth.",
  alternates: { canonical: "https://freelancejordan.com/services" },
  openGraph: {
    title: "Services — Web Design, SEO & Funnels",
    description:
      "From fast, clean builds to search-first content and conversion funnels.",
    url: "https://freelancejordan.com/services",
    images: [{ url: "/og-services.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services — Web Design, SEO & Funnels",
    description: "Strategy → build → iterate. Real growth without the fluff.",
    images: ["/og-services.jpg"],
  },
  keywords: [
    "web design services",
    "SEO services",
    "lead funnels",
    "Next.js websites",
    "technical SEO",
    "content strategy",
    "Freelance Jordan services",
  ],
};

export default function ServicesPage() {
  const site = "https://freelancejordan.com";

  // ----- JSON-LD -----
  // Primary: ProfessionalService for the practice
  const professionalService = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Freelance Jordan — Web Design, SEO & Funnels",
    url: `${site}/services`,
    image: `${site}/og-services.jpg`,
    areaServed: ["United States"],
    serviceType: ["Web Design", "SEO", "Lead Funnels"],
    provider: { "@type": "Person", name: "Jordan Moureau" },
    sameAs: [
      site,
      // add socials when live
    ],
  };

  // Secondary: an ItemList of core services (helps Google understand offerings)
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "Service",
          name: "Web Design (Next.js)",
          url: `${site}/services#web-design`,
          description:
            "Fast, clean websites on modern stacks with accessibility and conversion fundamentals baked in.",
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "Service",
          name: "SEO Strategy & Implementation",
          url: `${site}/services#seo`,
          description:
            "Technical fixes, search-first IA, content velocity, and ethical link acquisition.",
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "Service",
          name: "Lead Funnels & CRO",
          url: `${site}/services#funnels`,
          description:
            "Offer positioning, funnel architecture, landing pages, tracking, and A/B iteration.",
        },
      },
    ],
  };

  // Optional: FAQ rich result
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What stacks do you build on?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Primarily Next.js/React with headless CMS. I also audit & tune Shopify and WordPress for performance and SEO.",
        },
      },
      {
        "@type": "Question",
        name: "How long does a typical project take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Quick funnels: 1–2 weeks. Full site builds: 4–8 weeks. SEO engagements: ongoing with milestones every 30 days.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer maintenance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes—care plans for updates, monitoring, and iterative SEO/content so gains keep compounding.",
        },
      },
    ],
  };

  // Breadcrumbs
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
    ],
  };

  const bubbles = [
    {
      label: "Local SEO Coeur d’Alene",
      href: "/our-services/seo-optimization",
    },
    { label: "Custom Website Design", href: "/our-services/custom-websites" },
    { label: "PPC & Google Ads", href: "/our-services/ppc-ad-services" },
    { label: "Logos & Branding", href: "/our-services/logos-and-branding" },
    { label: "Small Business Strategy", href: "/our-story" },
    { label: "Meet Your Local Team", href: "/about" },
  ];

  const ProposalList = [
    "How we can improve your current rankings and leads",
    "What your website could be doing better for conversions",
    "Where the best ROI lies between SEO, Ads, and Design",
  ];

  const images = [
    {
      src: "/thebookshelfofanSEOexpert.png",
      alt: "Local Coeur d’Alene SEO agency case study results",
    },
    {
      src: "/thepianoofanseoexpert.png",
      alt: "Analytics dashboard showing organic growth",
    },
  ];

  return (
    <main className="services">
      <JsonLd json={professionalService} />
      <JsonLd json={itemList} />
      <JsonLd json={faq} />
      <JsonLd json={breadcrumbs} />

      <NavBar color={"black"} />

      <div className="main">
        <div className="column-one">
          <div className="text-block">
            <p>Digital marketing that actually works for Idaho businesses.</p>
            <h1>What We Do (and Why It Works)</h1>
            <h4>
              Every project is built in-house, data-driven, and designed to{" "}
              <strong>rank fast and convert even faster.</strong>
            </h4>
            <p>
              From SEO to full website rebuilds, we handle the systems that make
              your business visible online — and profitable offline. No
              outsourcing, no bloated retainers, just clear goals and measurable
              growth.
            </p>
          </div>

          <KeywordBubbles items={bubbles} />

          <GetProposal
            image={"/hero.png"}
            header={"Get a tailored growth plan"}
            alt={"SEO expert analyzing site performance"}
            list={ProposalList}
          />

          <div className="text-block">
            <p>Our in-house team manages every step of your online presence.</p>
            <h1>Our Core Services</h1>
            <h4>
              Each service is designed to feed the next — from rankings to
              revenue.
            </h4>
            <ul>
              <li>
                <strong>SEO Optimization:</strong> Local + national strategies
                that get your site ranking faster.
              </li>
              <li>
                <strong>Custom Websites:</strong> Engineered for conversion,
                speed, and scalability.
              </li>
              <li>
                <strong>Google Ads Management:</strong> Smart PPC that supports
                — not replaces — organic growth.
              </li>
              <li>
                <strong>Logos & Branding:</strong> Cohesive visuals that match
                your voice and market position.
              </li>
            </ul>
            <p>
              When all these layers work together, your site becomes a magnet
              for leads and authority — built for longevity, not gimmicks.
            </p>
          </div>

          <DoubleImages margin="-10rem" images={images}>
            <Review
              review={"Thank you, Jordan, for helping us elevate our game!"}
              author={"– JC @ Precision Driving Academy"}
              link={
                "http://facebook.com/profile.php?id=61560853709737&sk=reviews"
              }
              where={"Facebook"}
            />
          </DoubleImages>

          <div className="text-block">
            <p>We’re a local team that believes in transparent results.</p>
            <h1>Why Work With Us</h1>
            <h4>
              Because you deserve better than “set it and forget it” marketing.
            </h4>
            <p>
              Every campaign we run includes real reporting, local
              collaboration, and strategy built around your actual goals. When
              we say <strong>Idaho-based and 100% in-house</strong>, we mean it.
              No call centers, no white-label fluff — just honest work that
              ranks.
            </p>
            <div className="callout">
              Coeur d’Alene’s Smallest & Most Dedicated SEO Agency
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
