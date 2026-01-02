// components/JsonLd.js
export default function JsonLd({ data }) {
  if (!data) return null;
  const json = Array.isArray(data) ? data : [data];
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
