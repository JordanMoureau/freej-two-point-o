import JsonLd from "../components/JsonLd";

import { FaStar } from "react-icons/fa6";
import NavBar from "../components/nav";
import KeywordBubbles from "../components/keywordbubbles";
import DoubleImages from "../components/doubleimages";
import Review from "../components/review";
import ContactForm from "../components/contactform";
import SideBar from "../components/sidebar";
import GetProposal from "../components/getprop";

export const metadata = {
  title: "Our Story — The Why Behind Freelance Jordan",
  description:
    "From scrappy solo builds to high-performing SEO systems—here’s how Freelance Jordan came to be, what we value, and who we serve.",
  alternates: { canonical: "https://freelancejordan.com/our-story" },
  openGraph: {
    title: "Our Story — The Why Behind Freelance Jordan",
    description:
      "From scrappy solo builds to high-performing SEO systems—here’s how Freelance Jordan came to be, what we value, and who we serve.",
    url: "https://freelancejordan.com/our-story",
    images: [{ url: "/og-our-story.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Story — The Why Behind Freelance Jordan",
    description: "The values, people, and craft behind Freelance Jordan.",
    images: ["/og-our-story.jpg"],
  },
  keywords: [
    "about Freelance Jordan",
    "our story",
    "web design and SEO",
    "Jordan Moureau",
  ],
};

export default function OurStoryPage() {
  const site = "https://freelancejordan.com";

  // --- JSON-LD ---
  const aboutPage = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "Our Story — Freelance Jordan",
    url: `${site}/our-story`,
    description:
      "Background, values, and mission of Freelance Jordan—web design and SEO focused on measurable growth.",
    primaryImageOfPage: `${site}/og-our-story.jpg`,
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site },
        {
          "@type": "ListItem",
          position: 2,
          name: "Our Story",
          item: `${site}/our-story`,
        },
      ],
    },
  };

  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Freelance Jordan",
    url: site,
    logo: `${site}/logo.png`,
    foundingDate: "2022", // <- adjust if you want
    founder: { "@type": "Person", name: "Jordan Moureau" },
    sameAs: [
      "https://www.linkedin.com/in/yourhandle",
      "https://www.instagram.com/yourhandle",
    ],
  };

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jordan Moureau",
    url: `${site}/our-story`,
    image: `${site}/jordan.jpg`, // optional headshot
    jobTitle: "Founder, Web Designer & SEO Strategist",
    worksFor: { "@type": "Organization", name: "Freelance Jordan" },
  };

  const bubbles = [
    { label: "COEUR D’ALENE SEO AGENCY", href: "/we-rank-sites" },
    {
      label: "SMALL BUSINESS WEB DESIGN",
      href: "/our-services/custom-websites",
    },
    {
      label: "LOCAL SEO THAT CONVERTS",
      href: "/our-services/seo-optimization",
    },
    {
      label: "BRANDING & LOGO DESIGN",
      href: "/our-services/logos-and-branding",
    },
    { label: "GOOGLE ADS MANAGEMENT", href: "/our-services/ppc-ad-services" },
    { label: "IN-HOUSE, IDAHO BASED TEAM", href: "/our-story/contact-us" },
  ];

  const storyImages = [
    {
      src: "/flowers.png",
      alt: "Freelance Jordan team meeting in Coeur d’Alene",
    },
    {
      src: "/puppies.png",
      alt: "Downtown Coeur d’Alene, Idaho small business community",
    },
  ];

  const ProposalList = [
    "How Freelance Jordan grew from a one-person shop to a results-driven SEO agency",
    "Why staying small makes us faster, friendlier, and more effective",
    "The Idaho-built process that keeps clients ranking locally and nationally",
  ];

  return (
    <main className="our-story">
      {/* Structured data */}
      <JsonLd json={aboutPage} />
      <JsonLd json={org} />
      <JsonLd json={person} />

      {/* Page content */}
      <div className="hero">
        <NavBar color={"white"} />

        <div className="hero-text">
          <h1>Our Story: We had A Dream</h1>
          <h2>& it was not letting anyone down.</h2>
          <h5>
            {" "}
            <h5>
              5 <FaStar />
              's on <a href="#">Google</a> | The Coziest Digital Agency in the
              Inland PNW
            </h5>
          </h5>
        </div>
      </div>

      <div className="main">
        <div className="column-one">
          <div className="text-block">
            <p>Every big idea starts small.</p>
            <h1>Our Story: From Freelance to Full-Force Agency</h1>
            <h4>
              Freelance Jordan began in a coffee shop with a single client and a
              stubborn belief that{" "}
              <strong>small agencies can outperform giants.</strong>
            </h4>
            <p>
              We’re a Coeur d’Alene, Idaho-based digital studio specializing in{" "}
              <strong>SEO, web design, and local brand strategy</strong>. What
              started as one laptop and a lot of caffeine is now a thriving team
              supporting small businesses across the Northwest.
            </p>
            <p>
              Every line of code, every blog post, every design concept is done
              in-house. We never outsource overseas, and we never phone it in.
              We believe local businesses deserve better than cookie-cutter
              solutions.
            </p>
          </div>

          <KeywordBubbles items={bubbles} />

          <DoubleImages margin="-14rem" images={storyImages}>
            <Review
              review="Not only did she handle the technical side of things with expertise and efficiency, she also took the time to listen, understand our needs, and deliver exactly what we were hoping for—without the runaround or excuses.
              "
              author="-Martha D. @ The Supper Club"
              link="https://www.google.com/search?q=Freelance+Jordan&stick=H4sIAAAAAAAA_-NgU1I1qDAxMja2MLGwMDCyMEmxsDS3MqgwTjVLSTJPSTFMSzRJNEpOXsQq4FaUmpqTmJecquCVX5SSmAcAocCzJjwAAAA&hl=en&mat=CT-kHjjzBABTElcBTVDHnqw0v7bkslIh09CU8NZuqq81WCAiLn-q_BtqdKD27KbMWxgzP5zQkVDLX6fnjkHcsadVk9JKxtsogfl6-k8qjG025Lb4UaKU1GjIfzlrJuijMZ0&authuser=0#mpd=~5980785747813114943/customers/reviews"
              where="Google"
            />
          </DoubleImages>

          <div className="text-block">
            <p>The mission hasn’t changed since day one.</p>
            <h1>We build sites that grow with you.</h1>
            <h4>
              Our goal is simple: help Idaho businesses dominate search results,
              generate consistent leads, and look damn good doing it.
            </h4>
            <ul>
              <li>Transparent reporting & real SEO strategy</li>
              <li>Websites built for conversions and speed</li>
              <li>Branding that actually stands out locally</li>
              <li>Ongoing optimization for long-term growth</li>
            </ul>
            <p>
              From Spokane to Post Falls to downtown CDA, we’re proud to serve
              our local community with marketing that works—and people who care.
            </p>
          </div>

          <GetProposal
            image={"/breakfastspread.png"}
            header={"Get to know us, Idaho style."}
            alt={"Local marketing agency dinner in Coeur d'Alene"}
            list={ProposalList}
          />

          <div className="text-block">
            <p>We’re not just another SEO agency.</p>
            <h1>We’re your hometown growth partner.</h1>
            <h4>
              No corporate buzzwords, no sales gimmicks—just honest,
              performance-driven strategy from people who live where you live.
            </h4>
            <div className="callout">
              Proudly serving North Idaho & the Inland Northwest
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
