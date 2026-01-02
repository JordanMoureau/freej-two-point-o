import Logo from "./logo";

export default function Footer() {
  return (
    <footer>
      <div className="foot-main">
        <h3>Custom Websites Built for SEO</h3>
        <h5>
          Get Visibility on Google in <span className="bold">Four Months</span>{" "}
          or less
        </h5>
        <div className="foot-row">
          <div className="small-button">
            <a href="/book-a-call">Book a call</a>
          </div>
          <div className="small-button">
            <a href="/book-a-call">Get A proposal</a>
          </div>
        </div>
      </div>
      <div className="foot-col italic">
        <h4>We Rank Sites</h4>
        <a href="/we-rank-sites/why-get-seo">Why Get SEO</a>
        <a href="/we-rank-sites/seo-case-studies">SEO Case Studies</a>
        <a href="/we-rank-sites/what-to-expect">What to Expect</a>
      </div>

      <div className="foot-col italic">
        <h4>Our Services</h4>
        <a href="/our-services/custom-websites">Custom Websites</a>
        <a href="/our-services/seo-optimization">SEO Optimization</a>
        <a href="/our-services/ppc-ad-services">PPC Ad Services</a>
        <a href="/our-services/logos-and-branding">Logos & Branding</a>
      </div>

      <div className="foot-col italic">
        <h4>Our Story</h4>
        <a href="/our-story/contact-us">Contact Us</a>
        <a href="/our-story/press-releases">Press Releases</a>
        <a href="/our-story/journal">Journal</a>
      </div>

      <div className="foot-col">
        <Logo />
      </div>
    </footer>
  );
}
