import JsonLd from "@/app/components/JsonLd";
import KeywordBubbles from "../../components/keywordbubbles";
import GetProposal from "../../components/getprop";
import Review from "../../components/review";
import DoubleImages from "../../components/doubleimages";
import ContactForm from "../../components/contactform";
import SideBar from "../../components/sidebar";
import NavBar from "../../components/nav";

const bubbles = [
  { label: "SEO RESULTS IN ACTION", href: "/we-rank-sites" },
  { label: "CUSTOM WEBSITE DESIGN", href: "/our-services/custom-websites" },
  { label: "BRANDING THAT CONVERTS", href: "/our-services/custom-branding" },
  { label: "LOCAL SEO COEUR D'ALENE", href: "/our-services/seo-optimization" },
  { label: "IDAHO SMALL BUSINESS MARKETING", href: "/about" },
  { label: "IN HOUSE STRATEGY", href: "/process" },
];

const ProposalList = [
  "How each client’s visibility increased after redesign & SEO",
  "What growth metrics looked like before vs. after",
  "How our local-first SEO process compounds over time",
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

export const metadata = {
  title: "SEO Case Studies — Real Results | Freelance Jordan",
  description:
    "Proof, not promises. Explore SEO case studies showing ranking wins, visibility growth, and lead generation for local service businesses.",
  alternates: {
    canonical: "https://freelancejordan.com/we-rank-sites/case-studies",
  },
  openGraph: {
    title: "SEO Case Studies — Real Results",
    description:
      "Traffic up. Rankings up. Leads up. Explore real SEO case studies from Freelance Jordan.",
    url: "https://freelancejordan.com/we-rank-sites/case-studies",
    images: [{ url: "/og-case-studies.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Case Studies — Real Results",
    description:
      "Explore real SEO results: site architecture, content strategy, and measurable growth for local businesses.",
    images: ["/og-case-studies.jpg"],
  },
  keywords: [
    "SEO case studies",
    "SEO results",
    "local SEO case studies",
    "search rankings improvements",
    "lead generation SEO",
    "Freelance Jordan case studies",
  ],
};

export default function CaseStudiesPage() {
  const site = "https://freelancejordan.com";

  // -------- JSON-LD --------
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "SEO Case Studies — Real Results",
    url: `${site}/we-rank-sites/case-studies`,
    description:
      "A collection of SEO case studies demonstrating measurable growth from Freelance Jordan.",
  };

  // simple ItemList pointing to anchors
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        url: `${site}/we-rank-sites/case-studies#case-1-home-repair-remodeling`,
        name: "Home Repair & Remodeling Company",
      },
      {
        "@type": "ListItem",
        position: 2,
        url: `${site}/we-rank-sites/case-studies#case-2-disaster-restoration`,
        name: "Disaster Restoration Company",
      },
    ],
  };

  return (
    <main className="case-studies">
      <JsonLd json={collectionSchema} />
      <JsonLd json={itemListSchema} />

      <NavBar color={"black"} />

      <div className="main">
        <div className="column-one">
          <div className="text-block">
            <p>Our favorite part of this work? Watching clients win.</p>
            <h1>Case Studies That Prove SEO Works</h1>
            <h4>
              From small startups to established service businesses, these are
              the stories behind the rankings.
            </h4>
            <p>
              Every site we build is rooted in a local-first SEO framework
              developed right here in Coeur d’Alene, Idaho. Our projects don’t
              just look beautiful—they perform. These case studies show how our
              tailored strategy boosted rankings, visibility, and real lead
              generation for service businesses.
            </p>
          </div>

          <KeywordBubbles items={bubbles} />

          {/* ---------- CASE STUDIES ---------- */}
          <div className="text-block" id="case-studies">
            <p>Real clients. Real outcomes.</p>
            <h1>Featured SEO Case Studies</h1>
            <h4>
              Two examples of how our local-first SEO framework translates into
              rankings, visibility, and leads.
            </h4>
          </div>

          {/* =======================
              CASE STUDY #1
          ======================== */}
          <section className="text-block" id="case-1-home-repair-remodeling">
            <p>Case Study #1</p>
            <h1>Home Repair &amp; Remodeling Company</h1>

            <div className="bubble-list">
              <div className="text-bubble pink">Industry:</div>
              <div className="text-bubble">Home Repair &amp; Remodeling</div>

              <div className="text-bubble pink">Project Type:</div>
              <div className="text-bubble">New Website + Local SEO</div>

              <div className="text-bubble pink">Timeline:</div>
              <div className="text-bubble">6+ months</div>
            </div>

            <h3>Background</h3>
            <p>
              The client launched a brand-new website with no existing search
              visibility, rankings, or organic lead flow. At project start, the
              site was effectively starting from zero—no authority, no keyword
              traction, and no established conversion pipeline.
            </p>

            <h3>Strategy</h3>
            <p>We built the SEO foundation from the ground up, focusing on:</p>
            <div className="bubble-list">
              <div className="text-bubble">
                Intent-driven service page architecture
              </div>
              <div className="text-bubble pink">
                Local keyword targeting aligned to repair and remodeling demand
              </div>
              <div className="text-bubble pink">
                Clear conversion pathways designed to capture inbound leads
              </div>
              <div className="text-bubble">
                Consistent on-page optimization to support long-term scalability
              </div>
            </div>

            <h3>Results</h3>
            <p>
              Rather than chasing short-term traffic spikes, the strategy
              prioritized sustainable rankings and measurable lead generation.
            </p>

            <div className="cs-results-group">
              <div className="text-bubble pink">
                Within the first 3.5 months
              </div>
              <div className="bubble-list">
                <div className="text-bubble">
                  Achieved first-page rankings for 10 targeted keywords
                </div>
                <div className="text-bubble">
                  Secured position #1 rankings for multiple high-intent search
                  terms
                </div>
              </div>
            </div>

            <div className="cs-results-group">
              <div className="text-bubble pink">By month 6</div>
              <div className="bubble-list">
                <div className="text-bubble">
                  Expanded to 40+ page-one keyword rankings
                </div>
                <div className="text-bubble ">
                  Generated 40+ qualified form submissions (leads) per month
                </div>
                <div className="text-bubble">
                  Organic lead volume became strong enough to fully discontinue
                  Google Ads, eliminating paid ad spend
                </div>
              </div>
            </div>

            <h3>Outcome</h3>
            <p>
              The site transitioned from zero visibility to a self-sustaining
              organic lead engine within six months. SEO became the client’s
              primary acquisition channel, delivering consistent inbound leads
              without reliance on paid advertising.
            </p>
          </section>

          {/* =======================
              CASE STUDY #2
          ======================== */}
          <section className="text-block" id="case-2-disaster-restoration">
            <p>Case Study #2</p>
            <h1>Disaster Restoration Company</h1>

            <div className="bubble-list">
              <div className="text-bubble pink">Industry:</div>
              <div className="text-bubble">
                Fire &amp; Water Damage Restoration
              </div>

              <div className="text-bubble pink">Challenge:</div>
              <div className="text-bubble">
                Low organic visibility, ineffective SEO spend, poor conversion
                tracking
              </div>
            </div>

            <h3>Background</h3>
            <p>
              The client previously worked with a large SEO agency but saw
              little evidence of proactive strategy or measurable growth.
              Despite ongoing spend, organic rankings remained stagnant, few new
              pages were created, and Google Ads campaigns produced minimal
              tracked conversions.
            </p>

            <h3>Strategy</h3>
            <p>
              We began by re-engineering the website structure to align with
              search intent and service demand. This included rebuilding page
              hierarchy, expanding topical and service-area coverage, and
              deploying a substantial body of new content designed to establish
              long-term search visibility. In parallel, we prepared the site for
              conversion-focused paid advertising by implementing accurate
              tracking and improving on-site conversion pathways.
            </p>

            <h3>Results (Month-over-Month)</h3>
            <div className="bubble-list">
              <div className="text-bubble pink">
                Organic impressions increased steadily, indicating expanded
                visibility across a broader set of search queries
              </div>
              <div className="text-bubble">
                The site moved from effectively no rankings to an average search
                position of ~26
              </div>
              <div className="text-bubble">
                Search presence expanded from near-zero to consistent
                page-two/page-three visibility
              </div>
              <div className="text-bubble pink">
                Google began testing the site for a wider range of relevant
                queries
              </div>
            </div>
            <p>
              While traffic growth was intentionally gradual, these indicators
              reflect foundational SEO progress and increasing trust from
              Google.
            </p>

            <h4>Ongoing Work</h4>
            <div className="bubble-list">
              <div className="text-bubble pink">
                We are currently deploying A/B-tested Google Ads campaigns with
                a target minimum of 10 leads per month
              </div>
              <div className="text-bubble">
                Continuing conversion optimization and re-engineering the site
                to be more conversion friendly
              </div>
              <div className="text-bubble pink">
                Carefully tracking and reporting results as rankings mature
              </div>
            </div>
          </section>

          {/* ---------- REST OF PAGE ---------- */}
          <div className="text-block">
            <p>Transparent metrics. Real growth. Zero fluff.</p>
            <h1>What to Look For in a Winning SEO Campaign</h1>
            <h4>
              We measure success by conversions, not impressions. That’s what
              separates our agency from “big box” SEO firms.
            </h4>
            <div className="bubble-list">
              <div className="text-bubble pink">
                Month-over-month organic growth within 90 days
              </div>
              <div className="text-bubble">
                Sharp rise in local keyword visibility
              </div>
              <div className="text-bubble ">
                Consistent inbound leads without heavy ad spend
              </div>
              <div className="text-bubble pink">
                Improved map pack ranking and review volume
              </div>
            </div>
            <p>
              Each of these outcomes is the result of handcrafted, Idaho-based
              SEO strategy—no outsourcing, no cookie-cutter templates.
            </p>
          </div>

          <DoubleImages margin="-14rem" images={images}>
            <Review
              review="Not only did she handle the technical side of things with expertise and efficiency, she also took the time to listen, understand our needs, and deliver exactly what we were hoping for—without the runaround or excuses.
              "
              author="-Martha D. @ The Supper Club"
              link="https://www.google.com/search?q=Freelance+Jordan&stick=H4sIAAAAAAAA_-NgU1I1qDAxMja2MLGwMDCyMEmxsDS3MqgwTjVLSTJPSTFMSzRJNEpOXsQq4FaUmpqTmJecquCVX5SSmAcAocCzJjwAAAA&hl=en&mat=CT-kHjjzBABTElcBTVDHnqw0v7bkslIh09CU8NZuqq81WCAiLn-q_BtqdKD27KbMWxgzP5zQkVDLX6fnjkHcsadVk9JKxtsogfl6-k8qjG025Lb4UaKU1GjIfzlrJuijMZ0&authuser=0#mpd=~5980785747813114943/customers/reviews"
              where="Google"
            />
          </DoubleImages>

          <div className="text-block">
            <p>Our results speak louder than our headlines.</p>
            <h1>Every Case Study Tells a Story</h1>
            <h4>
              Learn how a clear SEO roadmap transformed these businesses into
              search leaders in their industries.
            </h4>
            <p>
              Explore the case studies above, then book your own discovery call.
              We’ll show you exactly what’s possible—and what it will take to
              get there.
            </p>
            <a className="mid-button" href="/we-rank-sites/what-to-expect">
              See How It Works
            </a>
          </div>

          <ContactForm />

          <Review
            review="Most over promise and under deliver. Jordan make(s) it clear what to expect and holds herself accountable."
            author="-Brandon D. @ Spokane Home Pros"
            link="https://www.google.com/search?q=Freelance+Jordan&stick=H4sIAAAAAAAA_-NgU1I1qDAxMja2MLGwMDCyMEmxsDS3MqgwTjVLSTJPSTFMSzRJNEpOXsQq4FaUmpqTmJecquCVX5SSmAcAocCzJjwAAAA&hl=en&mat=CT-kHjjzBABTElcBTVDHnqw0v7bkslIh09CU8NZuqq81WCAiLn-q_BtqdKD27KbMWxgzP5zQkVDLX6fnjkHcsadVk9JKxtsogfl6-k8qjG025Lb4UaKU1GjIfzlrJuijMZ0&authuser=0#mpd=~5980785747813114943/customers/reviews"
            where="Google"
          />
        </div>

        <div className="column-two">
          <SideBar />
        </div>
      </div>
    </main>
  );
}
