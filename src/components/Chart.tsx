export default function Chart() {
  const data = [60, 40, 80, 20, 90];

  return (
    <section>
      <h2>Grafikon</h2>
      <div className="chart">
        {data.map((v, i) => (
          <div
            key={i}
            className="bar"
            style={{ height: `${v}%` }}
            title={`${v}%`}
          />
        ))}
      </div>
    </section>
  );
}
