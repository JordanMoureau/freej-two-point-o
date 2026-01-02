// components/KeywordBubbles.jsx
export default function KeywordBubbles({ items = [] }) {
  return (
    <section className="bubbles-container" aria-label="Keyword list">
      {items.map((it, i) => (
        <a key={i} className="keyword-bubbles" href={it.href}>
          {it.label}
        </a>
      ))}
    </section>
  );
}
