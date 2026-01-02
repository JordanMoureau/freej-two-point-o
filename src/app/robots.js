// src/app/robots.js
export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://freelancejordan.com/sitemap.xml",
  };
}
