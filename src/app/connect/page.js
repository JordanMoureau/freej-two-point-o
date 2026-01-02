import { FaFacebook, FaLinkedin, FaPhone, FaPinterest } from "react-icons/fa6";
import JsonLd from "../components/JsonLd";
import { IoIosMail } from "react-icons/io";
import Logo from "../components/logo";

export const metadata = {
  title: "Connect — Freelance Jordan",
  description:
    "Follow Freelance Jordan across the web. Design, SEO, and creative chaos — come hang out.",
  alternates: { canonical: "https://freelancejordan.com/connect" },
  openGraph: {
    title: "Connect — Freelance Jordan",
    description:
      "Design, SEO, and creative chaos. Follow Freelance Jordan on social media.",
    url: "https://freelancejordan.com/connect",
    images: [{ url: "/og-connect.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Connect — Freelance Jordan",
    description:
      "Follow Freelance Jordan on Instagram, LinkedIn, YouTube, and more.",
    images: ["/og-connect.jpg"],
  },
  keywords: [
    "Freelance Jordan",
    "social media",
    "connect with Freelance Jordan",
    "Instagram",
    "LinkedIn",
    "YouTube",
  ],
};

export default function ConnectPage() {
  const site = "https://freelancejordan.com";

  // --- JSON-LD: Person / Organization with social links ---
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Freelance Jordan",
    url: site,
    logo: `${site}/logo.png`,
    sameAs: [
      "https://www.instagram.com/freelancejordan",
      "https://www.linkedin.com/in/jordanmoureau",
      "https://www.youtube.com/@freelancejordan",
      "https://www.tiktok.com/@freelancejordan",
      "https://www.pinterest.com/freelancejordan",
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
        name: "Connect",
        item: `${site}/connect`,
      },
    ],
  };

  return (
    <main className="connect">
      <JsonLd json={org} />
      <JsonLd json={breadcrumbs} />
      <Logo color={"white"} />
      <h1>
        Freelance Jordan is a small (but productive) creative studio in Coeur
        D'Alene Idaho
      </h1>

      <div className="buttons">
        <div className="row">
          <div className="connect-bars pink">
            <a href="/book-a-call">Book A Call</a>
          </div>

          <div className="connect-bars pink">
            <a href="/get-a-proposal">Get a Proposal</a>
          </div>
        </div>

        <div className="connect-bars">
          <a href="/our-services/seo-optimization">
            ✨ Top Notch Custom Sites ✨
          </a>
        </div>

        <div className="connect-bars">
          <a href="/our-services/custom-websites">✨ Rank #1 On Google ✨</a>
        </div>

        <div className="connect-bars">
          <a href="/our-story">✨ Learn About FreeJ ✨</a>
        </div>
      </div>

      <div className="social-footer">
        <div className="social-bubble">
          <a href="tel:2067157980">
            <FaPhone />{" "}
          </a>
        </div>

        <div className="social-bubble">
          <a href="mailto:jordan@freelancejordan.com">
            <IoIosMail />
          </a>
        </div>
      </div>
    </main>
  );
}
