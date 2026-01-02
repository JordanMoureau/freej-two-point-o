import JsonLd from "../components/JsonLd";
import KeywordBubbles from "../components/keywordbubbles";
import GetProposal from "../components/getprop";
import Review from "../components/review";
import DoubleImages from "../components/doubleimages";
import ContactForm from "../components/contactform";
import SideBar from "../components/sidebar";
import NavBar from "../components/nav";

export const metadata = {
  title: "We Rank Sites — SEO That Actually Moves the Needle",
  description:
    "Done-for-you SEO that increases qualified traffic, rankings, and revenue. Technical fixes, content strategy, and links—measured, reported, improved.",
  alternates: {
    canonical: "https://freelancejordan.com/we-rank-sites",
  },
  openGraph: {
    title: "We Rank Sites — SEO That Actually Moves the Needle",
    description:
      "Technical SEO, content strategy, and link building—implemented and measured. Real growth, not fairy dust.",
    url: "https://freelancejordan.com/we-rank-sites",
    images: [{ url: "/og-we-rank-sites.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "We Rank Sites — SEO That Actually Moves the Needle",
    description:
      "Done-for-you SEO that increases qualified traffic, rankings, and revenue.",
    images: ["/og-we-rank-sites.jpg"],
  },
  keywords: [
    "SEO services",
    "technical SEO",
    "content strategy",
    "link building",
    "search engine optimization",
    "Freelance Jordan",
  ],
};

export default function WeRankSitesPage() {
  const site = "https://freelancejordan.com";

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "We Rank Sites — SEO Services",
    url: `${site}/we-rank-sites`,
    image: `${site}/og-we-rank-sites.jpg`,
    serviceType: ["Technical SEO", "Content Strategy", "Link Building"],
    areaServed: ["United States"],
    provider: { "@type": "Person", name: "Jordan Moureau" },
    sameAs: [
      "https://freelancejordan.com",
      // add socials here when ready
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long until SEO results show up?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most sites see traction in 3–6 months; durable, compounding gains usually land in 6–12 months depending on competition and site health.",
        },
      },
      {
        "@type": "Question",
        name: "What’s included in your SEO service?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Technical fixes (crawl, index, speed), content strategy & production, on-page optimization, internal linking, and ethical link acquisition—plus reporting and iteration.",
        },
      },
      {
        "@type": "Question",
        name: "Do you guarantee rankings?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No one can guarantee rankings. We guarantee focused execution and transparent reporting tied to business outcomes: qualified traffic, leads, and revenue.",
        },
      },
      {
        "@type": "Question",
        name: "Can you work with my dev stack?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes—Next.js and modern JS frameworks are my daily driver. I’ll implement directly or collaborate with your team, whichever’s faster and safer.",
        },
      },
    ],
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: site,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "We Rank Sites",
        item: `${site}/we-rank-sites`,
      },
    ],
  };

  const bubbles = [
    { label: "IN HOUSE DESIGN WORK", href: "/design" },
    { label: "IN HOUSE WEB ENGINEERING", href: "/web" },
    { label: "Affordable SEO", href: "/our-services/seo-optimization" },
    { label: "IN HOUSE SEARCH ENGINE OPTIMIZATION", href: "/seo" },
    { label: "100% USA, IDAHO BASED DIGITAL AGENCY", href: "/about" },
    { label: "NOTHING OUTSOURCED", href: "/process" },
  ];

  const ProposalList = [
    "Where you currently rank & where you could be with one of our sites",
    "What SEO work could do for your business",
    "How long it will take & how much it could affect your revenue",
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

  return (
    <main className="wranksites">
      {/* JSON-LD */}
      <JsonLd json={serviceSchema} />
      <JsonLd json={faqSchema} />
      <JsonLd json={breadcrumbs} />
      <NavBar color={"black"} />
      <div className="main">
        <div className="column-one">
          <div className="text-block">
            <p>This tiny Idaho based Agency is changing the game.</p>
            <h1>The way we build sites is different</h1>
            <h4>
              We don't take a lot of clients, but the ones we do...we make a{" "}
              <strong>huge difference for.</strong>
            </h4>
            <p>
              We have designed a process to rank sites 2-4x faster than some of
              the largest agencies in the US. Yes, we are serious. We don't joke
              about rankings around here.
            </p>
          </div>
          <KeywordBubbles items={bubbles} />

          <GetProposal
            image={"/anSEOexpertsbagel.png"}
            header={"Have a proposal delivered to you & find out.."}
            alt={"the fancy dinner of an SEO expert"}
            list={ProposalList}
          />

          <div className="text-block">
            <p>Search Engine Optimization is where the magic happens.</p>
            <h1>What SEO could do for you (and isn't currently)</h1>
            <h4>
              If you can become Google's go to recomendation you become
              everyone's go to recomendation.
            </h4>
            <p>
              Your customers are searching for your service on Google & if your
              cometitors are outranking you, you are...
            </p>

            <ul>
              <li>Spending tons on ads just to get a few leads</li>
              <li>
                Running around twon to in person networking events trying to
                drum up clients/customers
              </li>
              <li>Stressing about inconsistent revenue each month</li>
              <li>Unable to make payroll or cover contractor costs</li>
              <li>
                Not seeing the real growth you hope and dreamed for when you
                started this business
              </li>
            </ul>

            <p>
              Organic traffic & a customer first website is all you need to
              grow.
            </p>
            <h1>It's not you--it's the tools you have to work with.</h1>
          </div>

          <div className="text-block">
            <p>Nothing oursoured to other agenies or countries...</p>
            <h1>Our sites are clean & conversion focused...</h1>
            <h4>
              Nothing is lost from design to build & every site is built with
              our proprietary Searh Engine Optimization system built in.
            </h4>
            <div className="callout">& we are 100% Local</div>
          </div>

          <ContactForm />
          <DoubleImages margin="-16rem" images={images}>
            <Review
              review={
                "Jordan is the first website creator I've worked with, and she exceeded every expectation. She took all of my ideas and turned them into a beautiful, seamless website..."
              }
              author={"-Bailey C. @ Burnt Blessings in Rathdrum, ID"}
              link={
                "https://www.google.com/search?q=Freelance+Jordan&stick=H4sIAAAAAAAA_-NgU1I1qDAxMja2MLGwMDCyMEmxsDS3MqgwTjVLSTJPSTFMSzRJNEpOXsQq4FaUmpqTmJecquCVX5SSmAcAocCzJjwAAAA&hl=en&mat=CT-kHjjzBABTElcBTVDHnvl3b3bOfBqkDYXxywlnxFJbIJz681GYiV4c_DnppRbdMDB-N_F8bt37vQ6fyachz4byvA3zIfYc8Gw3nlJun50812iE1ms-O3FghdgNwWj9FxA&authuser=0#mpd=~5980785747813114943/customers/reviews"
              }
              where={"Google"}
            />
          </DoubleImages>
        </div>

        <div className="column-two">
          <SideBar />
        </div>
      </div>
      {/* ...rest of content */}
    </main>
  );
}
