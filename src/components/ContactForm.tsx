import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <section>
      <h2>Kapcsolat</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
        }}
        className="contact-form"
      >
        <label>
          Név
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </label>

        <label>
          Email
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>

        <button type="submit">Küldés</button>
      </form>

      {sent && (
        <div className="notice">
          Köszönjük, {name || "felhasználó"}! Válasz hamarosan.
        </div>
      )}
    </section>
  );
}
