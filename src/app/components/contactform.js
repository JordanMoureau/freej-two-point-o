"use client";

import { useState } from "react";

export default function ContactForm() {
  const [method, setMethod] = useState(null);

  return (
    <div className="text-block">
      <h1>Contact us directly</h1>
      <h4>
        Fill out the form below to hear from us in the next 24 hours about your
        custom website or SEO project
      </h4>
      <p>
        Just give us a little bit of info about who you are and what you need
        and we'll get back to you in a snap.
      </p>

      <form action="https://formspree.io/f/movgkylg" method="POST">
        {/* readable subject line */}
        <input
          type="hidden"
          name="_subject"
          value="New Contact Inquiry from Freelance Jordan"
        />

        {/* spam filter honeypot */}
        <input type="text" name="_gotcha" style={{ display: "none" }} />

        <div className="how-can-we">
          <input name="first_name" placeholder="Your First Name" required />
          <input name="last_name" placeholder="Your Last Name" required />
        </div>

        <input
          className="website"
          name="website"
          placeholder="Current Website URL (If you have one)"
        />

        <textarea
          name="message"
          placeholder="Tell us what you're thinking... Need a shiny new website? Or are you happy with your site, but need it seen by more of the right people? Let us know..."
          required
        />

        <div className="how-can-we">
          How can we reach you?
          <button
            type="button"
            onClick={() => setMethod("email")}
            className={method === "email" ? "active" : ""}
          >
            Prefer email?
          </button>
          <button
            type="button"
            onClick={() => setMethod("phone")}
            className={method === "phone" ? "active" : ""}
          >
            Or by phone?
          </button>
        </div>

        {method === "email" && (
          <input
            className="website"
            type="email"
            name="email"
            placeholder="Email it is! Type it here..."
            required
          />
        )}

        {method === "phone" && (
          <input
            className="website"
            type="tel"
            name="phone"
            placeholder="Phone Number it is! Put it here..."
            required
          />
        )}

        <button className="submit" type="submit">
          Send Your Message
        </button>
      </form>
    </div>
  );
}
