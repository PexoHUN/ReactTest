export default function Gallery() {
  const items = new Array(8).fill(0).map((_, i) => ({ id: i + 1 }));

  return (
    <section>
      <h2>Galéria</h2>
      <p>Egyszerű rács példa képek helyett színes dobozokkal.</p>

      <div className="gallery-grid">
        {items.map((it) => (
          <div key={it.id} className="thumb" aria-hidden>
            <div className="thumb-inner">Item {it.id}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
