import Image from "next/image";
import KeywordBubbles from "./components/keywordbubbles";
import Hero from "./components/hero";
import GetProposal from "./components/getprop";
import Review from "./components/review";
import ContactForm from "./components/contactform";
import DoubleImages from "./components/doubleimages";
import SideBar from "./components/sidebar";

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

export default function Home() {
  return (
    <div>
      <Hero />

      <KeywordBubbles items={bubbles} />

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

          <GetProposal
            image={"/dumplingdinner.png"}
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

          <Review
            review={
              "Working with Jordan has been an absolute game changer for us..."
            }
            author={"-Martha D @ The.Supper Club in Spokane, WA"}
            link={
              "https://www.google.com/search?q=Freelance+Jordan&stick=H4sIAAAAAAAA_-NgU1I1qDAxMja2MLGwMDCyMEmxsDS3MqgwTjVLSTJPSTFMSzRJNEpOXsQq4FaUmpqTmJecquCVX5SSmAcAocCzJjwAAAA&hl=en&mat=CT-kHjjzBABTElcBTVDHnn2SWq0rIv36rZrKcjqLxSXJrp6rhatTi3tiw1pQwMXXmHS-g0aCqR2hkR0JJ5szaT-DQBZJ3LU0PAJs_2s9Rdvd9HnPFhyjQMgGFlJ5epXgQnI&authuser=0#mpd=~5980785747813114943/customers/reviews"
            }
            where={"Google"}
          />

          <DoubleImages />

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

          <div className="cdas">
            <div className="middle-bits">
              <p>In-House Web Design & Website Services for Small Businesses</p>
              <h1>Coeur D'Alene's Smallest & Fastest Growing Digital Agency</h1>
              <h4>Bigger isn't always better.</h4>
              <a className="mid-button" href="/out-story/press-releases">
                Press Releases
              </a>{" "}
            </div>
            <Review
              review={
                "I have worked with several web developers but Jordan is the best by far..."
              }
              author={
                "-Brandon Deerosier-Zahnow @ Spokane Home Pros in Spokane, WA"
              }
              link={
                "https://www.google.com/search?q=Freelance+Jordan&stick=H4sIAAAAAAAA_-NgU1I1qDAxMja2MLGwMDCyMEmxsDS3MqgwTjVLSTJPSTFMSzRJNEpOXsQq4FaUmpqTmJecquCVX5SSmAcAocCzJjwAAAA&hl=en&mat=CT-kHjjzBABTElcBTVDHnn2SWq0rIv36rZrKcjqLxSXJrp6rhatTi3tiw1pQwMXXmHS-g0aCqR2hkR0JJ5szaT-DQBZJ3LU0PAJs_2s9Rdvd9HnPFhyjQMgGFlJ5epXgQnI&authuser=0#mpd=~5980785747813114943/customers/reviews"
              }
              where={"Google"}
            />
          </div>
        </div>

        <div className="column-two">
          <SideBar />
        </div>
      </div>
    </div>
  );
}
