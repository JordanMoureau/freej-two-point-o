import Review from "./review";

export default function SideBar() {
  return (
    <div className="side-bar">
      <div className="side-bar-cta">
        <div>
          <p>Tired of losing leads?</p>
          <h1>Work With Me</h1>
        </div>
        <h4>
          Find out what we do & why it's special. Book a{" "}
          <strong>free 45 minute</strong> consultation.
        </h4>
        <a className="mid-button" href="/book-a-call">
          Book A video chat
        </a>
      </div>

      {/* <div className="journal-aside">
        <h1>Google Ads ROI Deep Dive</h1>
        <p>
          We did a full-scale audit on this camapaign and the results were
          startling. We were able to up the ROIs almost 300% with just a few
          hours of work. Here's what we did...
        </p>
        <div className="journal-image">
          <img src="/googledash.png" />
          <div className="side-bar-button">
            <a className="mid-button" href="/our-story/journal">
              Project Journal
            </a>
          </div>
        </div>
      </div> */}

      <Review
        review={
          "I have worked with a lot of web contractors and freelancers in my 30 years in business. Jordan has been by far the best..."
        }
        author={"-Lorraine Tunca @ Lorraine Fine Jewlery in Liberty Lake, WA"}
        link={
          "https://www.google.com/search?q=Freelance+Jordan&stick=H4sIAAAAAAAA_-NgU1I1qDAxMja2MLGwMDCyMEmxsDS3MqgwTjVLSTJPSTFMSzRJNEpOXsQq4FaUmpqTmJecquCVX5SSmAcAocCzJjwAAAA&hl=en&mat=CT-kHjjzBABTElcBTVDHnn2SWq0rIv36rZrKcjqLxSXJrp6rhatTi3tiw1pQwMXXmHS-g0aCqR2hkR0JJ5szaT-DQBZJ3LU0PAJs_2s9Rdvd9HnPFhyjQMgGFlJ5epXgQnI&authuser=0#mpd=~5980785747813114943/customers/reviews"
        }
        where={"Google"}
      />
    </div>
  );
}
