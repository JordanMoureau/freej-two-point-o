import { FaStar } from "react-icons/fa6";

export default function GetProposal({ image, header, list, alt }) {
  return (
    <div className="get-propped">
      <img src={image} alt={alt} />
      <div className="get-propped-inner">
        <div className="get-propped-stars">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <div className="info-box">
          <div className="inner-info-box">
            <h1>{header}</h1>
            <ul>
              {list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="button-box">
            <div className="mid-button">
              <a href="/get-a-proposal">Get A Project Proposal</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
