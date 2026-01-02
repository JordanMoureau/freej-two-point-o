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
    alt: "A Coeur d'Alene SEO agencies bookshelf",
  },
  {
    src: "/anSEOexpertsdesk.png",
    alt: "The desk of an SEO expert in Coeur D'Alene, Idaho",
  },
];

export const metadata = {
  title: "Logos & Branding — Identity That Connects | Freelance Jordan",
  description:
    "Strategic brand identity: logos, color systems, typography, and usage rules that look great and drive recognition, trust, and conversions.",
  alternates: {
    canonical: "https://freelancejordan.com/services/logos-branding",
  },
  openGraph: {
    title: "Logos & Branding — Identity That Connects",
    description:
      "Logo systems, typography, color, and guidelines crafted for growth-focused brands.",
    url: "https://freelancejordan.com/services/logos-branding",
    images: [{ url: "/og-logos-branding.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Logos & Branding — Identity That Connects",
    description: "Strategic identity systems built to stand out and scale.",
    images: ["/og-logos-branding.jpg"],
  },
  keywords: [
    "logo design",
    "branding",
    "brand identity design",
    "visual identity",
    "brand guidelines",
    "Freelance Jordan",
  ],
};

export default function LogosBranding() {
  const site = "https://freelancejordan.com";

  // --- JSON-LD: Service ---
  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Logos & Branding",
    serviceType: "Brand Identity Design",
    url: `${site}/services/logos-branding`,
    description:
      "Strategic brand identity systems: primary & secondary logos, color, typography, and usage guidelines built for recognition and conversion.",
    provider: { "@type": "Person", name: "Jordan Moureau" },
    areaServed: ["United States"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Branding Packages",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Brand Starter",
          description:
            "Primary logo, color palette, typography, social avatars, mini style guide (PDF).",
        },
        {
          "@type": "Offer",
          name: "Brand System",
          description:
            "Logo suite (primary/secondary/mark), extended palette, type scales, UI components, full brand guide.",
        },
        {
          "@type": "Offer",
          name: "Brand + Web",
          description:
            "Full identity system plus website components (buttons, cards, forms) and page-level patterns.",
        },
      ],
    },
    image: `${site}/og-logos-branding.jpg`,
  };

  // --- JSON-LD: FAQ ---
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What deliverables do I get?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Logo files in SVG/PNG, color and type specs, usage rules, social assets, and a brand guide. Source files are included on applicable packages.",
        },
      },
      {
        "@type": "Question",
        name: "How long does branding take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Typically 2–4 weeks for a starter package and 4–6 weeks for a full system, depending on feedback cycles.",
        },
      },
      {
        "@type": "Question",
        name: "Can you align branding with my SEO & website?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. I design identity systems that map to your site’s component library and content strategy so the brand performs in the real world.",
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
        name: "Logos & Branding",
        item: `${site}/services/logos-branding`,
      },
    ],
  };

  return (
    <main className="services logos-branding">
      <JsonLd json={service} />
      <JsonLd json={faq} />
      <JsonLd json={breadcrumbs} />

      <NavBar color={"black"} />
      <div className="main">
        <div className="column-one">
          <div className="text-block">
            <p>Your brand is your first impression—and your lasting one.</p>
            <h1>Logos & Brand Identity Design That Feel Handmade</h1>
            <h4>
              We don’t just design logos. We design{" "}
              <strong>recognition, emotion, and trust</strong>.
            </h4>
            <p>
              Every color, font, and detail in your brand communicates
              something. We help Idaho businesses craft brand systems that
              resonate online and in person—made to look great on your website,
              your truck, or your business cards.
            </p>
          </div>

          {/* <KeywordBubbles items={bubbles} /> */}

          {/* <GetProposal
            image={"/brandingproposal.png"}
            header={"See how professional branding transforms your growth"}
            alt={"Brand strategy and logo design proposal"}
            list={ProposalList}
          /> */}

          <div className="text-block">
            <p>We specialize in branding for small businesses ready to grow.</p>
            <h1>Why a strong visual identity matters</h1>
            <h4>People don’t buy from brands they don’t remember.</h4>
            <p>
              Great branding amplifies trust, simplifies decision-making, and
              makes you unforgettable. Whether you’re starting from scratch or
              refreshing your image, our in-house branding process ensures your
              business stands out on Google and in your customers’ minds.
            </p>

            <ul>
              <li>Custom logo design rooted in your brand story</li>
              <li>Color palettes and fonts that align with your audience</li>
              <li>Visual consistency across web, print, and social</li>
              <li>Delivered in every format you’ll ever need</li>
              <li>SEO-integrated design for better visibility</li>
            </ul>

            <p>
              Our approach blends strategy, design, and SEO—because your logo
              should look good *and* perform.
            </p>
          </div>

          <Review
            review="I like working with Freelance Jordan and I think you would too."
            author="-Brandon Derosier-Zahnow @ Spokane Home Pros"
            link="https://www.google.com/search?q=Freelance+Jordan&stick=H4sIAAAAAAAA_-NgU1I1qDAxMja2MLGwMDCyMEmxsDS3MqgwTjVLSTJPSTFMSzRJNEpOXsQq4FaUmpqTmJecquCVX5SSmAcAocCzJjwAAAA&hl=en&mat=CT-kHjjzBABTElcBTVDHnn2SWq0rIv36rZrKcjqLxSXJrp6rhatTi3tiw1pQwMXXmHS-g0aCqR2hkR0JJ5szaT-DQBZJ3LU0PAJs_2s9Rdvd9HnPFhyjQMgGFlJ5epXgQnI&authuser=0#mpd=~5980785747813114943/customers/reviews"
            where="Google"
          />

          <div className="text-block">
            <p>Everything designed and built right here in Idaho.</p>
            <h1>Local design that scales nationwide</h1>
            <h4>
              From discovery to delivery, nothing is outsourced. Our creative
              process ensures your brand feels consistent and authentic.
            </h4>
            <div className="callout">100% CDA Crafted</div>
          </div>

          <ContactForm />

          <div className="cdas">
            <div className="middle-bits">
              <p>In-House Brand Identity Design & Strategy</p>
              <h1>Coeur D'Alene’s Trusted Local Branding Partner</h1>
              <h4>Small team. Big results.</h4>
              <a className="mid-button" href="/our-story/press-releases">
                Press Releases
              </a>
            </div>
          </div>
        </div>

        <div className="column-two">
          <SideBar />
        </div>
      </div>
    </main>
  );
}
