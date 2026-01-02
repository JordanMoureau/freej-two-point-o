import { FaStar } from "react-icons/fa6";
import Quotes from "./quotes";

export default function Review({ review, author, link, where }) {
  return (
    <div className="review-component">
      <div className="review-box">
        <div className="quote-left">
          <Quotes />
        </div>
        <div className="inner">
          <div className="review">{review}</div>
          <div className="content">
            <div className="author">{author}</div>

            <a href={link}>Read Full Review on {where}</a>
          </div>
        </div>
        <div className="quote-right">
          <Quotes />
        </div>
      </div>

      <div className="blurb">
        <div className="stars">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        Five Stars on{" "}
        <a href="https://www.google.com/search?sca_esv=06ea9662b9b1f398&sxsrf=AE3TifPaWRWm0v0j7pX9MD2oiDGwJe-Jqg%3A1761768207937&q=Freelance%20Jordan&stick=H4sIAAAAAAAAAONgU1I1qDAxMja2MLGwMDCyMEmxsDS3MqgwTjVLSTJPSTFMSzRJNEpOXsQq4FaUmpqTmJecquCVX5SSmAcAocCzJjwAAAA&mat=CT-kHjjzBABT&ved=2ahUKEwj2wteBmsqQAxVtEjQIHQKJD20QrMcEegQIFxAC#mpd=~5980785747813114943/customers/reviews">
          Google
        </a>{" "}
        &{" "}
        <a href="https://www.facebook.com/profile.php?id=61560853709737&sk=reviews">
          Facebook
        </a>{" "}
        | Freelance Jordan: A Boutique SEO Agency out of Coeur D'Alene, ID
      </div>
    </div>
  );
}
