const menuItems = [
  { id: "home", label: "Főoldal" },
  { id: "widgets", label: "Widgets" },
  { id: "gallery", label: "Galéria" },
  { id: "chart", label: "Grafikon" },
  { id: "contact", label: "Kapcsolat" },
];

type Props = {
  view: string;
  onChange: (v: any) => void;
};

export default function Sidebar({ view, onChange }: Props) {
  return (
    <aside className="sidebar">
      <div className="brand">React bemutató</div>

      <nav>
        <ul>
          {menuItems.map((m) => (
            <li
              key={m.id}
              className={m.id === view ? "active" : undefined}
              onClick={() => onChange(m.id)}
            >
              {m.label}
            </li>
          ))}
        </ul>
      </nav>

      <footer className="sidebar-footer">Egyszerű komponensek</footer>
    </aside>
  );
}
