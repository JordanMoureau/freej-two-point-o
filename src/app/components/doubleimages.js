"use client";

import Image from "next/image";
import BookVideoCallCTA from "./bookcall";

export default function DoubleImages({
  images = [
    { src: "/seoexperttea.png", alt: "The tea of an SEO expert" },
    {
      src: "/aseoexpertsdogs.png",
      alt: "The dogs of a Coeur D'Alene SEO expert",
    },
  ],
  showCTA = true,
  margin = "",
  children = null,
}) {
  return (
    <section className="get-propped">
      <div className="double-image-box">
        {images.map(({ src, alt }, i) => (
          <div className="figure" key={i}>
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      {(showCTA || children) && (
        <div className="nested-component" style={{ marginTop: margin }}>
          {children ? children : <BookVideoCallCTA />}
        </div>
      )}
    </section>
  );
}
