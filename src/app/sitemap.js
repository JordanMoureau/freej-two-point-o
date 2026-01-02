// src/app/sitemap.js
export default async function sitemap() {
  const base = "https://freelancejordan.com";
  const paths = [
    "/",
    "/book-a-call",
    "/get-a-proposal",
    "/our-services",
    "/our-services/seo-optimization",
    "/our-services/custom-websites",
    "/our-services/custom-branding",
    "/our-services/logos-and-branding",
    "/our-services/ppc-ad-services",
    "/our-story",
    "/social-link",
    "/we-rank-sites",
    "/we-rank-sites/what-to-expect",
    "/we-rank-sites/why-seo",
    "/we-rank-sites/case-studies",
    "/our-story/contact-us",
    "/our-story/journal",
    "/our-story/press-releases",
  ];
  return paths.map((p) => ({ url: base + p, lastModified: new Date() }));
}
