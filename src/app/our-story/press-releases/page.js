import JsonLd from "@/app/components/JsonLd";
import NavBar from "@/app/components/nav";
import { FaStar } from "react-icons/fa6";

import KeywordBubbles from "@/app/components/keywordbubbles";
import ContactForm from "@/app/components/contactform";
import SideBar from "@/app/components/sidebar";

export const metadata = {
  title: "Press & Announcements | Freelance Jordan",
  description:
    "Recent press, features, and official announcements from Freelance Jordan — SEO, custom websites, and PPC for small businesses.",
  alternates: { canonical: "https://freelancejordan.com/press" },
  openGraph: {
    title: "Press & Announcements | Freelance Jordan",
    description:
      "Recent press, features, and official announcements from Freelance Jordan — SEO, custom websites, and PPC for small businesses.",
    url: "https://freelancejordan.com/press",
    images: [{ url: "/og-press.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Press & Announcements | Freelance Jordan",
    description:
      "Recent press, features, and official announcements from Freelance Jordan — SEO, custom websites, and PPC for small businesses.",
    images: ["/og-press.jpg"],
  },
  keywords: [
    "press",
    "media",
    "announcement",
    "freelance jordan",
    "seo case study",
    "web design launch",
    "ppc campaign results",
  ],
};

export default async function Press() {
  const site = "https://freelancejordan.com";

  // TODO: replace with your CMS/data source
  const releases = [
    {
      title:
        "Freelance Jordan Launches Conversion-First Website Packages for Service Businesses",
      slug: "conversion-first-website-packages-launch",
      excerpt:
        "New custom website packages designed specifically for local service providers, with built-in SEO foundations, conversion copy, and lead funnels that don’t feel gross.",
      date: "2025-10-20",
      image: "/press/conversion-packages.jpg",
    },
    {
      title:
        "Local Restoration Client Sees 3x Lead Volume After SEO + PPC Overhaul",
      slug: "restoration-client-3x-leads-seo-ppc",
      excerpt:
        "A combined SEO, landing page, and Google Ads strategy helped a regional restoration company triple qualified calls in under 90 days — without increasing ad spend.",
      date: "2025-10-10",
      image: "/press/restoration-case-study.jpg",
    },
    {
      title:
        "Freelance Jordan Introduces Done-With-You SEO Sprints for Small Teams",
      slug: "done-with-you-seo-sprints",
      excerpt:
        "A new offer for small-but-mighty teams that want expert SEO strategy, implementation support, and training—without hiring a full-time agency.",
      date: "2025-09-28",
      image: "/press/seo-sprints.jpg",
    },
  ];

  // JSON-LD: Press / News collection
  const pressCollectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Freelance Jordan Press & Announcements",
    url: `${site}/press`,
    description:
      "Press releases, media features, and announcements from Freelance Jordan, a conversion-focused SEO and web design studio.",
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: releases.map((r, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${site}/press/${r.slug}`,
      name: r.title,
      image: `${site}${r.image}`,
      datePublished: r.date,
    })),
  };

  const bubbles = [
    { label: "Client Wins", href: "/" },
    { label: "SEO Case Studies", href: "/" },
    { label: "Custom Website Launches", href: "/" },
    { label: "Google Ads Performance", href: "/" },
    { label: "Local Business Features", href: "/" },
    { label: "Conversion Optimization", href: "/" },
    { label: "Brand & Messaging", href: "/" },
    { label: "CDA & Spokane Businesses", href: "/" },
    { label: "Small Business SEO", href: "/" },
    { label: "Lead Generation Funnels", href: "/" },
  ];

  return (
    <main className="press-main">
      <JsonLd json={pressCollectionSchema} />
      <JsonLd json={itemListSchema} />

      <div className="hero">
        <NavBar color={"white"} />

        <div className="hero-text">
          <h1>Press, Features, and Recent Wins</h1>
          <h2>
            Idaho's coziest digital agency,{" "}
            <strong>what people are saying when we aren't around.</strong>
          </h2>
          <h5>
            5 <FaStar />
            's on <a href="#">Google</a> | Coeur d&apos;Alene&apos;s Coziest
            Digital Studio for SEO & Web Design
          </h5>
        </div>
      </div>

      <KeywordBubbles items={bubbles} />

      <div className="main">
        <div className="column-one">
          {/* Feature the top press releases in long form, “press release style” */}
          <div className="text-block press">
            <h3>
              Freelance Jordan Launches Conversion-First Website Packages for
              Service Businesses
            </h3>
            <h4>
              Coeur d&apos;Alene, ID — Freelance Jordan today announced new
              website packages built specifically for local and regional service
              businesses who are tired of “pretty but passive” sites. Each build
              is engineered for conversions, SEO visibility, and lightning-fast
              performance from day one — so owners can stop duct-taping DIY
              sites and start sending traffic to a platform that actually
              converts.
            </h4>
            <p>
              The packages include custom design, on-page SEO, lead capture
              funnels, and analytics tracking. They’re built for businesses like
              home services, medical, legal, real estate, education, and
              boutique local brands who want a site that pulls its weight.
            </p>
            <p>
              SEO website design • conversion-focused builds • local service
              businesses • Coeur d&apos;Alene web designer
            </p>
            <a href="/press/conversion-first-website-packages-launch">
              Read full release...
            </a>
          </div>

          <div className="text-block journal">
            <h3>
              Regional Restoration Client Triples Qualified Leads with SEO & PPC
              Overhaul
            </h3>
            <h4>
              A Pacific Northwest restoration company partnered with Freelance
              Jordan to rebuild their digital funnel from the ground up:
              high-intent landing pages, emergency-focused Google Ads, and local
              SEO to match how real homeowners search in a crisis.
            </h4>
            <p>
              Within 90 days, the client saw a 3x increase in qualified calls —
              without increasing ad spend. The campaign blended clear emergency
              messaging, local search intent, and fast-loading pages designed to
              move anxious homeowners from “overwhelmed” to “I know who to call”
              in under a minute.
            </p>
            <p>
              water damage SEO • Google Ads for restoration • emergency service
              landing pages • local lead generation
            </p>
            <a href="/press/restoration-client-3x-leads-seo-ppc">
              Read full release...
            </a>
          </div>

          <div className="text-block journal">
            <h3>
              Freelance Jordan Introduces Done-With-You SEO Sprints for
              Small-but-Mighty Teams
            </h3>
            <h4>
              Not every business wants a long-term agency retainer. Freelance
              Jordan&apos;s new Done-With-You SEO Sprints give teams a focused,
              time-bound engagement: strategy, implementation support, and
              training — so internal teams know exactly what to do next.
            </h4>
            <p>
              Each sprint includes keyword research, site structure
              recommendations, on-page optimization, content outlines, and
              tracking setup. The goal: move the needle on rankings and leads
              quickly, while giving owners and marketing managers clarity on
              what actually matters.
            </p>
            <p>
              SEO sprints • collaborative SEO • small business marketing •
              search strategy training
            </p>
            <a href="/press/done-with-you-seo-sprints">Read full release...</a>
          </div>

          {/* Simple pagination shell if/when you add more */}
          <div className="text-block">
            <div className="next-page">
              <a className="previous" disabled>
                {"< "}previous
              </a>{" "}
              <a className="next" disabled>
                next{" >"}
              </a>
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
