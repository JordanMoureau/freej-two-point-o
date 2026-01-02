"use client";

import { useEffect, useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xdkqwylw";

export default function BookCallQuiz() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const [answers, setAnswers] = useState({
    whereAreYouAt: [],
    whatDoYouNeed: [],
    urgency: "",
    comfortWithTech: "",
    name: "",
    business: "",
    website: "",
    email: "",
    notes: "",
  });

  const totalSteps = 6;

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 50);
    return () => clearTimeout(timer);
  }, []);

  function toggleMulti(field, value) {
    setAnswers((prev) => {
      const current = prev[field] || [];
      const exists = current.includes(value);
      return {
        ...prev,
        [field]: exists
          ? current.filter((v) => v !== value)
          : [...current, value],
      };
    });
  }

  function setSingle(field, value) {
    setAnswers((prev) => ({ ...prev, [field]: value }));
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setAnswers((prev) => ({ ...prev, [name]: value }));
  }

  function nextStep() {
    setStep((prev) => Math.min(prev + 1, totalSteps));
  }

  function prevStep() {
    setStep((prev) => Math.max(prev - 1, 1));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    // We only send if they actually gave you an email
    if (!answers.email) {
      setSubmitError("Please add your email so I can send your prep notes.");
      return;
    }

    setSubmitting(true);
    setSubmitError(null);

    // Prepare a clean payload for Formspree
    const payload = {
      _subject: "New Book-a-Call Quiz Submission",
      whereAreYouAt: answers.whereAreYouAt.join(", "),
      whatDoYouNeed: answers.whatDoYouNeed.join(", "),
      urgency: answers.urgency,
      comfortWithTech: answers.comfortWithTech,
      name: answers.name,
      business: answers.business,
      website: answers.website,
      email: answers.email,
      notes: answers.notes,
    };

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        setSubmitError(
          "Something went wrong sending your answers. You can still book a call, but I might not see your quiz results."
        );
      }
    } catch (err) {
      setSubmitError(
        "Something went wrong sending your answers. You can still book a call, but I might not see your quiz results."
      );
    } finally {
      setSubmitting(false);
      // Regardless of email success, move them to Calendly
      nextStep(); // go to step 6 (Calendly)
    }
  }

  return (
    <section
      className={`quiz-overlay ${isOpen ? "quiz-overlay--open" : ""}`}
      aria-label="Book a call quiz overlay"
    >
      <div className="quiz-shell">
        <aside className={`quiz-sidebar ${step === 6 ? "height" : ""}`}>
          <div className="quiz-sidebar-inner">
            <p className="eyebrow">Book a Call with Jordan</p>
            <h4>Let&apos;s see if a live call is the right fit.</h4>

            <div className="quiz-progress">
              <span>
                Step {step} of {totalSteps}
              </span>
              <div className="quiz-progress-bar">
                <div
                  className="quiz-progress-bar-fill"
                  style={{ width: `${(step / totalSteps) * 100}%` }}
                />
              </div>
            </div>

            <p>
              This isn&apos;t a test. It&apos;s just a quick way for me to
              understand where you&apos;re at so I can help you without jargon
              or overwhelm.
            </p>
          </div>
        </aside>

        <div className="quiz-content">
          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <div className="quiz-step">
                <h1>Where are you at right now?</h1>
                <h4>Pick the options that feel the most true.</h4>
                <div className="quiz-options">
                  <button
                    type="button"
                    className={
                      answers.whereAreYouAt.includes("site-stresses-me")
                        ? "active"
                        : ""
                    }
                    onClick={() =>
                      toggleMulti("whereAreYouAt", "site-stresses-me")
                    }
                  >
                    My website stresses me out every time I look at it.
                  </button>
                  <button
                    type="button"
                    className={
                      answers.whereAreYouAt.includes("no-website")
                        ? "active"
                        : ""
                    }
                    onClick={() => toggleMulti("whereAreYouAt", "no-website")}
                  >
                    I don&apos;t even have a real website yet.
                  </button>
                  <button
                    type="button"
                    className={
                      answers.whereAreYouAt.includes("no-leads") ? "active" : ""
                    }
                    onClick={() => toggleMulti("whereAreYouAt", "no-leads")}
                  >
                    We get almost no leads or sales from our site.
                  </button>
                  <button
                    type="button"
                    className={
                      answers.whereAreYouAt.includes("random-marketing")
                        ? "active"
                        : ""
                    }
                    onClick={() =>
                      toggleMulti("whereAreYouAt", "random-marketing")
                    }
                  >
                    I&apos;m doing random marketing things with no real plan.
                  </button>
                  <button
                    type="button"
                    className={
                      answers.whereAreYouAt.includes("everything-plate")
                        ? "active"
                        : ""
                    }
                    onClick={() =>
                      toggleMulti("whereAreYouAt", "everything-plate")
                    }
                  >
                    I have too much on my plate to even think about this.
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="quiz-step">
                <h1>What kind of help are you hoping for?</h1>
                <h4>Again, choose everything that applies.</h4>
                <div className="quiz-options">
                  <button
                    type="button"
                    className={
                      answers.whatDoYouNeed.includes("clarity") ? "active" : ""
                    }
                    onClick={() => toggleMulti("whatDoYouNeed", "clarity")}
                  >
                    I need someone to tell me what actually matters.
                  </button>
                  <button
                    type="button"
                    className={
                      answers.whatDoYouNeed.includes("full-website")
                        ? "active"
                        : ""
                    }
                    onClick={() => toggleMulti("whatDoYouNeed", "full-website")}
                  >
                    I probably need a whole new website.
                  </button>
                  <button
                    type="button"
                    className={
                      answers.whatDoYouNeed.includes("fix-website")
                        ? "active"
                        : ""
                    }
                    onClick={() => toggleMulti("whatDoYouNeed", "fix-website")}
                  >
                    I want to fix what I have without starting over.
                  </button>
                  <button
                    type="button"
                    className={
                      answers.whatDoYouNeed.includes("seo-help") ? "active" : ""
                    }
                    onClick={() => toggleMulti("whatDoYouNeed", "seo-help")}
                  >
                    I need help showing up on Google.
                  </button>
                  <button
                    type="button"
                    className={
                      answers.whatDoYouNeed.includes("ongoing-support")
                        ? "active"
                        : ""
                    }
                    onClick={() =>
                      toggleMulti("whatDoYouNeed", "ongoing-support")
                    }
                  >
                    I want ongoing support, not just a one-and-done.
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="quiz-step">
                <h1>How urgent does this feel?</h1>
                <h4>
                  There’s no wrong answer. I just need to pace things right.
                </h4>
                <div className="quiz-options quiz-options--single">
                  <button
                    type="button"
                    className={answers.urgency === "yesterday" ? "active" : ""}
                    onClick={() => setSingle("urgency", "yesterday")}
                  >
                    Honestly? Yesterday. This is keeping me up at night.
                  </button>
                  <button
                    type="button"
                    className={
                      answers.urgency === "this-quarter" ? "active" : ""
                    }
                    onClick={() => setSingle("urgency", "this-quarter")}
                  >
                    This quarter. I want momentum but I&apos;m not in crisis.
                  </button>
                  <button
                    type="button"
                    className={answers.urgency === "exploring" ? "active" : ""}
                    onClick={() => setSingle("urgency", "exploring")}
                  >
                    I&apos;m exploring options and want to understand
                    what&apos;s possible.
                  </button>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="quiz-step">
                <h1>How comfortable are you with tech?</h1>
                <h4>I promise I won&apos;t make fun of your answer.</h4>
                <div className="quiz-options quiz-options--single">
                  <button
                    type="button"
                    className={
                      answers.comfortWithTech === "not-at-all" ? "active" : ""
                    }
                    onClick={() => setSingle("comfortWithTech", "not-at-all")}
                  >
                    Not at all. Please speak to me like a human.
                  </button>
                  <button
                    type="button"
                    className={
                      answers.comfortWithTech === "middle" ? "active" : ""
                    }
                    onClick={() => setSingle("comfortWithTech", "middle")}
                  >
                    I&apos;m okay-ish. I know some basics but I don&apos;t want
                    to do it myself.
                  </button>
                  <button
                    type="button"
                    className={
                      answers.comfortWithTech === "pretty-comfy" ? "active" : ""
                    }
                    onClick={() => setSingle("comfortWithTech", "pretty-comfy")}
                  >
                    I&apos;m pretty comfortable, I just don&apos;t have time to
                    do everything.
                  </button>
                </div>
              </div>
            )}

            {step === 5 && (
              <div className="quiz-step">
                <h1>Tell me who I&apos;m talking to.</h1>
                <h4>So I can prep ideas that make sense for your world.</h4>
                <div className="quiz-fields">
                  <input
                    name="name"
                    placeholder="Your name"
                    value={answers.name}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    name="business"
                    placeholder="Business name"
                    value={answers.business}
                    onChange={handleInputChange}
                  />
                  <input
                    name="website"
                    placeholder="Website URL (if you have one)"
                    value={answers.website}
                    onChange={handleInputChange}
                  />
                  <input
                    name="email"
                    placeholder="Best email for call details"
                    value={answers.email}
                    onChange={handleInputChange}
                    type="email"
                    required
                  />
                </div>

                {submitError && <p className="quiz-error">{submitError}</p>}
              </div>
            )}

            {step === 6 && (
              <div className="quiz-step quiz-step--final">
                <h1>Last step: book your call.</h1>
                <h2>
                  Based on what you shared, a live Zoom call with me is a great
                  fit. Pick a time that works for you below.
                </h2>
                <p>
                  Hey, I&apos;m Jordan. On our call, I&apos;ll walk you through
                  what&apos;s working, what isn&apos;t, and what I&apos;d do if
                  I were in your shoes—in plain English, with a clear plan.
                </p>
                <p>No pressure, no obligation. Just clarity.</p>

                <div className="final-layout">
                  <div className="calendly-wrapper">
                    <iframe
                      title="Schedule a clarity call with Jordan"
                      src="https://calendly.com/jordan-freelancejordan"
                      width="100%"
                      height="400px"
                      frameBorder="0"
                    />
                  </div>

                  <div className="jordan-bio">
                    <div className="jordan-photo">
                      <img
                        src="/blueflowers.JPG"
                        alt="Jordan from Freelance Jordan"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="quiz-controls">
              {step > 1 && step < totalSteps && (
                <button
                  type="button"
                  className="quiz-secondary"
                  onClick={prevStep}
                >
                  Back
                </button>
              )}

              {step < totalSteps - 1 && (
                <button
                  type="button"
                  className="quiz-primary"
                  onClick={nextStep}
                >
                  Next
                </button>
              )}

              {step === totalSteps - 1 && (
                <button
                  type="submit"
                  className="quiz-primary"
                  disabled={submitting}
                >
                  {submitting ? "Sending..." : "Continue to scheduling"}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
