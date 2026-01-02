"use client";

import { useState } from "react";

function toggleValue(value, setFn, state) {
  if (state.includes(value)) return setFn(state.filter((v) => v !== value));
  return setFn([...state, value]);
}

function OptionButtons({ options, state, setState }) {
  return (
    <div className="how-can-we">
      {options.map((label) => (
        <button
          key={label}
          type="button"
          onClick={() => toggleValue(label, setState, state)}
          className={state.includes(label) ? "pink" : ""}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export default function ProposalQuiz() {
  const [goals, setGoals] = useState([]);
  const [timeline, setTimeline] = useState([]);
  const [platform, setPlatform] = useState([]);
  const [newSite, setNewSite] = useState([]);
  const [budget, setBudget] = useState([]);

  return (
    <form
      className="text-block"
      action="https://formspree.io/f/xwpgranl"
      method="POST"
    >
      {/* email subject */}
      <input
        type="hidden"
        name="_subject"
        value="New Proposal Request from Freelance Jordan"
      />
      {/* honeypot spam trap */}
      <input type="text" name="_gotcha" style={{ display: "none" }} />

      {/* selections -> Formspree */}
      <input type="hidden" name="goals" value={goals.join(", ")} />
      <input type="hidden" name="timeline" value={timeline.join(", ")} />
      <input type="hidden" name="platform" value={platform.join(", ")} />
      <input type="hidden" name="new_site" value={newSite.join(", ")} />
      <input type="hidden" name="budget" value={budget.join(", ")} />

      <h1>What are your primary business goals?</h1>
      <h4>Choose as many as are relevant.</h4>
      <OptionButtons
        options={[
          "5-10 More Leads Per Month",
          "10-20 Leads Per Month",
          "20-60+ Leads Per Month",
          "Local SEO Ranking",
          "National Ranking",
          "International Ranking",
          "Start Making Online Sales",
          "Double Online Sales",
          "Triple Online Sales",
        ]}
        state={goals}
        setState={setGoals}
      />

      <h1>When do you want to see these results by?</h1>
      <h4>Define how aggressive the strategy needs to be.</h4>
      <OptionButtons
        options={["12 months", "6 months", "4 months", "1 month", "Yesterday"]}
        state={timeline}
        setState={setTimeline}
      />

      <div className="how-can-we">
        <h1>Where is your website currently platformed?</h1>
        <h4>How much will need to be done to get you to the top.</h4>
      </div>
      <OptionButtons
        options={["WordPress", "SquareSpace", "Wix", "Shopify", "Other"]}
        state={platform}
        setState={setPlatform}
      />

      <div className="how-can-we">
        <h1>Are you open to a new site build if it means faster results?</h1>
        <h4>
          Platforms can be limiting. For best results changes may need to be
          made.
        </h4>
      </div>
      <OptionButtons
        options={[
          "Yes, Visibility & Revenue Are the Priority",
          "No, We're Comfortable with Our Platform & Want to Stick with it",
        ]}
        state={newSite}
        setState={setNewSite}
      />

      <div className="how-can-we">
        <h1>How much do you hope to spend?</h1>
        <h4>
          Let us know your budget expectations and we will do our best to work
          within them.
        </h4>
      </div>
      <OptionButtons
        options={[
          "$200 - $800 monthly",
          "$800 - $1200 monthly",
          "$1200 - $1500 monthly",
          "$1500 - $2000 monthly",
        ]}
        state={budget}
        setState={setBudget}
      />

      <div className="how-can-we">
        <h1>Now we need a little bit of contact info</h1>
        <h4>and you&apos;ll have your proposal in no time.</h4>

        <input name="first_name" placeholder="Your First Name" required />
        <input name="last_name" placeholder="Your Last Name" required />

        <input
          className="website"
          name="website"
          placeholder="Current Website URL (If you have one)"
        />

        <textarea
          name="message"
          placeholder="Is there anything else we should know before we put together your project proposal? "
        />

        <input
          className="website"
          type="email"
          name="email"
          placeholder="Best email to reach you with..."
          required
        />
      </div>

      <button className="submit" type="submit">
        Get Your Proposal
      </button>
    </form>
  );
}
