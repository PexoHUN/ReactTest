import { useState } from "react";

export default function Widgets() {
  const [count, setCount] = useState(0);
  const [on, setOn] = useState(true);

  return (
    <section>
      <h2>Widgets</h2>

      <div className="widgets-row">
        <div className="widget card">
          <h4>Számláló</h4>
          <div className="counter">
            <button onClick={() => setCount((c) => c - 1)}>-</button>
            <span className="count">{count}</span>
            <button onClick={() => setCount((c) => c + 1)}>+</button>
          </div>
        </div>

        <div className="widget card">
          <h4>Kapcsoló</h4>
          <label className="switch">
            <input
              type="checkbox"
              checked={on}
              onChange={() => setOn((v) => !v)}
            />
            <span className="slider" />
          </label>
          <div>Állapot: {on ? "Bekapcsolva" : "Kikapcsolva"}</div>
        </div>
      </div>
    </section>
  );
}
