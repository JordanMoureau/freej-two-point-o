import JsonLd from "@/app/components/JsonLd";
import ContactForm from "@/app/components/contactform";
import NavBar from "@/app/components/nav";

export const metadata = {
  title: "Contact Us — Work With Freelance Jordan",
  description:
    "Ready to grow? Get in touch for web design, SEO, or a lead-funnel build. Expect a fast, friendly reply.",
  alternates: { canonical: "https://freelancejordan.com/contact" },
  openGraph: {
    title: "Contact Freelance Jordan",
    description:
      "Start your project or ask a quick question. We’ll get back to you quickly.",
    url: "https://freelancejordan.com/contact",
    images: [{ url: "/og-contact.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Freelance Jordan",
    description: "Web design, SEO, and funnels that convert. Let’s chat.",
    images: ["/og-contact.jpg"],
  },
  keywords: [
    "contact",
    "hire web designer",
    "SEO consultation",
    "Freelance Jordan contact",
  ],
};

export default function ContactPage() {
  const site = "https://freelancejordan.com";

  // ----- JSON-LD -----
  const contactPage = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Freelance Jordan",
    url: `${site}/contact`,
    description:
      "Contact page for Freelance Jordan — web design, SEO, and lead funnels.",
    about: {
      "@type": "Organization",
      name: "Freelance Jordan",
      url: site,
      logo: `${site}/logo.png`,
      sameAs: [
        // drop in real socials when ready
        "https://www.linkedin.com/in/yourhandle",
        "https://www.instagram.com/yourhandle",
      ],
    },
  };

  // Optional: publish how you prefer to be contacted
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Freelance Jordan",
    url: site,
    email: "hello@freelancejordan.com", // use your real inbox
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "Sales & New Projects",
        email: "hello@freelancejordan.com",
        availableLanguage: ["en"],
        areaServed: ["US"],
      },
    ],
  };

  return (
    <main className="contact">
      <JsonLd json={contactPage} />
      <JsonLd json={org} />
      <NavBar />
      <ContactForm />
    </main>
  );
}
