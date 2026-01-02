"use client";

import { FaStar } from "react-icons/fa6";

export default function BookVideoCallCTA() {
  return (
    <div className="get-propped">
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
            <h1>Book a Video Call and...</h1>
            <ul>
              <li>
                Gain clarity on what SEO really is and the way it can change
                everything for your business.
              </li>
              <li>
                Understand why it's still the most sustainable, highest ROI
                investmnt you can make.
              </li>
              <li>
                Find out what you need to do to get to those greener pastures.
              </li>
            </ul>
          </div>
          <div className="button-box">
            <div className="mid-button">
              <a href="/book-a-call">Book A Call</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
