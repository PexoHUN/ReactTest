export default function Home() {
  return (
    <section>
      <h2>Üdvözöl a React bemutató</h2>
      <p>
        Ez az oldal több különálló komponens példáját mutatja be:
        állapotkezelés, eseménykezelés, űrlapok és egyszerű vizualizációk.
      </p>

      <div className="feature-row">
        <div className="card">
          <h3>Reaktív állapot</h3>
          <p>Komponensek gyorsan frissülnek változáskor.</p>
        </div>
        <div className="card">
          <h3>Egyszerű kompozíció</h3>
          <p>Komponenseket könnyű újrahasznosítani és kombinálni.</p>
        </div>
      </div>
    </section>
  );
}
