import JsonLd from "@/app/components/JsonLd";
import NavBar from "@/app/components/nav";
import { FaStar } from "react-icons/fa6";

import KeywordBubbles from "@/app/components/keywordbubbles";
import ContactForm from "@/app/components/contactform";
import SideBar from "@/app/components/sidebar";

export const metadata = {
  title: "Journal | Notes from the Build | Freelance Jordan",
  description:
    "Behind-the-scenes notes on design, SEO experiments, and tiny-CEO life.",
  alternates: { canonical: "https://freelancejordan.com/journal" },
  openGraph: {
    title: "Journal | Notes from the Build",
    description:
      "Behind-the-scenes notes on design, SEO experiments, and tiny-CEO life.",
    url: "https://freelancejordan.com/journal",
    images: [{ url: "/og-journal.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Journal | Notes from the Build",
    description:
      "Behind-the-scenes notes on design, SEO experiments, and tiny-CEO life.",
    images: ["/og-journal.jpg"],
  },
  keywords: ["journal", "blog", "freelance life", "seo notes", "web design"],
};

export default async function Journal() {
  const site = "https://freelancejordan.com";

  // TODO: replace with your CMS/data source
  const posts = [
    {
      title: "Shipping the JSON-LD System",
      slug: "shipping-json-ld-system",
      excerpt:
        "Sitewide org, WebSite, and page-level schemas wired. Rich results, hello.",
      date: "2025-10-15",
      image: "/journal/jsonld.jpg",
    },
    {
      title: "Lead Funnels That Convert (Without Ick)",
      slug: "lead-funnels-without-ick",
      excerpt:
        "Urgency + empathy > doom-scroll fear tactics. Notes from client builds.",
      date: "2025-10-10",
      image: "/journal/funnels.jpg",
    },
  ];

  // JSON-LD: Blog (as a CollectionPage + ItemList)
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Freelance Jordan Journal",
    url: `${site}/journal`,
    description:
      "Notes on design, SEO, experimentation, and creative business building.",
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: posts.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${site}/journal/${p.slug}`,
      name: p.title,
      image: `${site}${p.image}`,
    })),
  };

  const bubbles = [
    { label: "SEO Projects", href: "/" },
    { label: "BRANDING & LOGO DESIGN", href: "/" },
    { label: "Website design", href: "/" },
    { label: "email marketing", href: "/" },
    { label: "shopify builds", href: "/" },
    { label: "campaign results", href: "/" },
    { label: "web design tips", href: "/" },
    { label: "conversion copy", href: "/" },
    { label: "small business SEO", href: "/" },
    { label: "homepage optimization", href: "/" },
    { label: "Coeur D'Alene web designer", href: "/" },
  ];

  return (
    <main className="journal-main">
      <JsonLd json={blogSchema} />
      <JsonLd json={itemListSchema} />

      <div className="hero">
        <NavBar color={"white"} />

        <div className="hero-text">
          <h1> Check out our recent wins and in progress projects</h1>
          <h2>
            {" "}
            Every site we build is{" "}
            <strong>
              engineered for conversions, speed, and SEO visibility
            </strong>{" "}
            from the ground up.
          </h2>
          <h5>
            5 <FaStar />
            's on <a href="#">Google</a> | Coeur D'Alene's Coziest Digital
            Agency
          </h5>
        </div>
      </div>

      <KeywordBubbles items={bubbles} />
      <div className="main">
        <div className="column-one">
          <div className="text-block journal">
            <h3>
              The Day My Client Said “Can You Make It Pop?” and Accidentally
              Tripled Their SEO Traffic
            </h3>
            <h4>
              A story about color palettes, brand psychology, and how one
              harmless request turned into a full conversion uplift. Spoiler:
              “make it pop” secretly means “give me hierarchy, contrast, and
              calls to action that convert.” And once we layered design + SEO
              keywords + internal linking? Boom — traffic AND lead calls
              doubled. Somewhere, a minimalist designer shed a single tear.
            </h4>
            <p>
              web design tips • conversion copy • small business SEO • homepage
              optimization • Coeur D'Alene web designer
            </p>
            <a>Read More...</a>
          </div>
          <div className="text-block journal">
            <h3>Why DIY Websites Fail (And Why I Secretly Love Fixing Them)</h3>
            <h4>
              There’s nothing wrong with building your website on your own —
              until the business starts growing and suddenly you’re duct-taping
              plugins, broken forms, and random pages like a digital Jenga
              tower. I talk about the most common mistakes I see, why they
              happen, and how fixing them unlocks ranking, leads, and actual
              peace of mind. Also, one time a 404 page took down an entire sales
              funnel. We don’t talk about that day.
            </h4>
            <p>
              SEO website audit • site performance • DIY site mistakes • Webflow
              • Squarespace • WordPress • business website upgrades
            </p>
            <a>Read More...</a>
          </div>
          <div className="text-block journal">
            <h3>
              Why SEO Isn’t “Gaming the System” — It’s Speaking the Language
              Your Clients Already Use
            </h3>
            <h4>
              People think SEO is tricking Google. It’s not. It’s listening to
              how real people talk when they need help — and building pages that
              answer those questions simply. This entry breaks down the moment a
              client realized that “keyword research” is just “empathy at
              scale.” When customers feel heard, they click, they call, and they
              buy.
            </h4>
            <p>
              keyword research • customer language • search intent • local SEO •
              service business marketing
            </p>
            <a>Read More...</a>
          </div>

          <div className="text-block journal">
            <h3>You Don’t Need a Bigger Audience — You Need a Faster Yes</h3>
            <h4>
              Everyone wants more followers, more traffic, more eyeballs. But
              most businesses don’t need more people — they need their existing
              visitors to convert faster. A redesign that removes friction is
              worth more than doubling traffic. In this entry I go through the 3
              website tweaks that shorten decision time and speed up the “yes.”
            </h4>
            <p>
              conversion rate optimization • website psychology • buyer
              hesitation • lead flow • online trust signals
            </p>
            <a>Read More...</a>
          </div>

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
