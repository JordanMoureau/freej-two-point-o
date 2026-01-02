import JsonLd from "../components/JsonLd";
import NavBar from "../components/nav";
import ProposalQuiz from "../components/proposalquiz";

export const metadata = {
  title: "Get a Proposal — Fast, Clear, No Fluff | Freelance Jordan",
  description:
    "Tell me about your project and goals. I’ll respond with a clear scope, timeline, and pricing—no jargon, no mystery.",
  alternates: { canonical: "https://freelancejordan.com/get-a-proposal" },
  openGraph: {
    title: "Get a Proposal — Fast, Clear, No Fluff",
    description:
      "Share your goals. Get a clear plan, timeline, and pricing from Freelance Jordan.",
    url: "https://freelancejordan.com/get-a-proposal",
    images: [{ url: "/og-proposal.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Get a Proposal — Fast, Clear, No Fluff",
    description: "Web design, SEO, and funnels—priced and scoped clearly.",
    images: ["/og-proposal.jpg"],
  },
  keywords: [
    "project proposal",
    "website quote",
    "SEO proposal",
    "web design pricing",
    "Freelance Jordan proposal",
  ],
};

export default function GetAProposalPage() {
  const site = "https://freelancejordan.com";

  // --- JSON-LD: Offer (proposal) ---
  const offer = {
    "@context": "https://schema.org",
    "@type": "Offer",
    name: "Custom Website / SEO Proposal",
    url: `${site}/get-a-proposal`,
    description:
      "A tailored proposal including scope, timeline, deliverables, and fixed or phased pricing for your web/SEO project.",
    offeredBy: {
      "@type": "Organization",
      name: "Freelance Jordan",
      url: site,
      logo: `${site}/logo.png`,
    },
    category: "Web Design, SEO, Lead Funnels",
  };

  // --- JSON-LD: HowTo (the proposal process) ---
  const howto = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Get a Proposal from Freelance Jordan",
    description:
      "Simple 3-step process to receive a custom proposal for your project.",
    step: [
      {
        "@type": "HowToStep",
        name: "Tell Me About Your Project",
        text: "Share goals, current site (if any), timeline, and success metrics using the form below.",
      },
      {
        "@type": "HowToStep",
        name: "Clarity Call (Optional)",
        text: "If needed, we’ll do a quick call to nail constraints and opportunities.",
      },
      {
        "@type": "HowToStep",
        name: "Receive Your Proposal",
        text: "You’ll get a clear scope, timeline, and pricing—plus options for phases if helpful.",
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
        name: "Get a Proposal",
        item: `${site}/get-a-proposal`,
      },
    ],
  };

  return (
    <main className="proposal">
      <JsonLd json={offer} />
      <JsonLd json={howto} />
      <JsonLd json={breadcrumbs} />

      <NavBar />
      <div className="full-width-hero">
        <div className="text-block">
          <p> We promise, it’s not as bad as you think.</p>
          <h1>
            Wondering how much top
            <br /> rankings will cost?
          </h1>
          <h4>
            Fill out the form below to have a{" "}
            <strong>proposal package built for you </strong>and emailed out in
            48hours.
          </h4>
        </div>
      </div>
      <ProposalQuiz />
    </main>
  );
}
