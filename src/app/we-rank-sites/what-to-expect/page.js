import JsonLd from "@/app/components/JsonLd";
import KeywordBubbles from "../../components/keywordbubbles";
import GetProposal from "../../components/getprop";
import Review from "../../components/review";
import DoubleImages from "../../components/doubleimages";
import ContactForm from "../../components/contactform";
import SideBar from "../../components/sidebar";
import NavBar from "../../components/nav";

export const metadata = {
  title: "What to Expect — Our SEO Process | Freelance Jordan",
  description:
    "Transparent SEO strategy, communication, and measurable results. Here’s exactly what to expect when you work with Freelance Jordan.",
  alternates: {
    canonical: "https://freelancejordan.com/we-rank-sites/what-to-expect",
  },
  openGraph: {
    title: "What to Expect — Our SEO Process",
    description:
      "See how we plan, optimize, and execute your SEO campaign. Full transparency, real data, and clear communication from day one.",
    url: "https://freelancejordan.com/we-rank-sites/what-to-expect",
    images: [{ url: "/og-what-to-expect.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "What to Expect — Our SEO Process",
    description:
      "Transparent SEO strategy, communication, and measurable results. Here’s exactly what to expect when you work with Freelance Jordan.",
    images: ["/og-what-to-expect.jpg"],
  },
  keywords: [
    "SEO process",
    "what to expect from SEO",
    "SEO timeline",
    "SEO onboarding",
    "Freelance Jordan SEO",
  ],
};

const bubbles = [
  { label: "SEO Agency — Coeur d’Alene, ID", href: "/seo" },
  {
    label: "Local SEO & Google Maps Ranking",
    href: "/our-services/seo-optimization",
  },
  { label: "Technical SEO Audits", href: "/seo" },
  { label: "Website Design + SEO Packages", href: "/web" },
  { label: "In-House, Idaho-Based Team", href: "/about" },
  { label: "Our Proven Process", href: "/process" },
];

const ProposalList = [
  "A clear timeline of what to expect month-by-month",
  "Where your site currently stands & what’s possible",
  "The SEO roadmap for growth and conversions",
];

const images = [
  {
    src: "/thepianoofanseoexpert.png",
    alt: "Freelance Jordan SEO project in Coeur d’Alene, Idaho",
  },
  {
    src: "/anseoexpertslivingroom.png",
    alt: "Meeting with SEO clients in downtown Coeur d’Alene",
  },
];

export default function WhatToExpect() {
  const site = "https://freelancejordan.com";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "What to Expect — Our SEO Process",
    description:
      "Transparent SEO strategy, communication, and measurable results. Learn what to expect when partnering with Freelance Jordan.",
    image: `${site}/og-what-to-expect.jpg`,
    author: { "@type": "Person", name: "Jordan Moureau" },
    publisher: {
      "@type": "Organization",
      name: "Freelance Jordan",
      logo: { "@type": "ImageObject", url: `${site}/logo.png` },
    },
    url: `${site}/we-rank-sites/what-to-expect`,
    datePublished: "2025-10-15",
  };

  const stepSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "What to Expect — SEO Process",
    description: "A simple breakdown of the Freelance Jordan SEO workflow.",
    totalTime: "P3M", // Roughly 3 months
    step: [
      {
        "@type": "HowToStep",
        name: "Discovery & Audit",
        text: "We start by understanding your business, auditing your website, and analyzing competition.",
      },
      {
        "@type": "HowToStep",
        name: "Strategy & Setup",
        text: "We build a custom SEO roadmap—technical, content, and link strategy tailored to your goals.",
      },
      {
        "@type": "HowToStep",
        name: "Implementation",
        text: "We execute optimizations, content creation, and tracking setup. Every change is documented.",
      },
      {
        "@type": "HowToStep",
        name: "Monitoring & Reporting",
        text: "You get clear monthly reports with ranking data, traffic insights, and next-step recommendations.",
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
        name: "We Rank Sites",
        item: `${site}/we-rank-sites`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "What to Expect",
        item: `${site}/we-rank-sites/what-to-expect`,
      },
    ],
  };

  return (
    <main className="whattoexpect">
      <JsonLd json={articleSchema} />
      <JsonLd json={stepSchema} />
      <JsonLd json={breadcrumbs} />

      <NavBar color={"black"} />

      <div className="main">
        <div className="column-one">
          <div className="text-block">
            <p>Transparency first, always.</p>
            <h1>What to Expect Working With Us</h1>
            <h4>
              No confusing jargon, no hidden retainers—just clear strategy,
              consistent communication, and results you can actually see.
            </h4>
            <p>
              Most clients come to us after working with agencies that promise
              the moon and deliver reports no one understands. We do things
              differently. You’ll know exactly what’s happening, why it matters,
              and how it impacts your bottom line.
            </p>
          </div>

          {/* Keyword bubbles directly under the opener */}
          <KeywordBubbles items={bubbles} />

          <GetProposal
            image={"/seoexpertscozyroom.PNG"}
            header={"Want to see how we’ll help your business grow?"}
            alt={"SEO proposal preview"}
            list={ProposalList}
          />

          <div className="text-block">
            <p>Here’s what our clients can expect from day one:</p>
            <h1>Our Process in Plain English</h1>
            <ul>
              <li>
                <strong>Discovery & Audit:</strong> We analyze your current site
                performance, competitors, and search visibility.
              </li>
              <li>
                <strong>SEO Roadmap:</strong> You’ll get a month-by-month plan
                that aligns with your goals and local search trends.
              </li>
              <li>
                <strong>Optimization:</strong> We rebuild, refine, and
                re-structure your site for both users and search engines.
              </li>
              <li>
                <strong>Reporting:</strong> Monthly updates—real numbers, real
                traffic, no fluff.
              </li>
              <li>
                <strong>Growth:</strong> SEO is cumulative. By month 6, most
                local clients see 2–3× organic lead growth.
              </li>
            </ul>
            <p>
              We keep things human and simple. If you ever feel unsure about
              where your site stands, we’re just a message away—no ticketing
              system, no delays.
            </p>
          </div>

          <DoubleImages margin="-10rem" images={images}>
            <Review
              review="We absolutely love Jordan! Her work speaks for itself...’"
              author="-JC @ Precision Driving Academy"
              link="http://facebook.com/profile.php?id=61560853709737&sk=reviews"
              where="Facebook"
            />
          </DoubleImages>

          <div className="text-block">
            <p>Our agency model is built on quality, not quantity.</p>
            <h1>Expect a Partner, Not a Vendor</h1>
            <h4>
              We only take on a few projects at a time to ensure every site gets
              our full attention—and it shows in the results.
            </h4>
            <p>
              You’ll have direct access to your SEO strategist, weekly updates,
              and a strategy that evolves as your rankings do. The goal? Turn
              your site into a top local performer for years to come.
            </p>
            <div className="callout">
              We’re Coeur d’Alene’s small but mighty SEO agency.
            </div>
          </div>

          <ContactForm />
        </div>

        <div className="column-two">
          <SideBar />
        </div>
      </div>

      {/* Insert your beautiful layout sections here */}
    </main>
  );
}
