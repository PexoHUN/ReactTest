import { useState } from "react";
import "./App.css";

import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Widgets from "./components/Widgets";
import Gallery from "./components/Gallery";
import ContactForm from "./components/ContactForm";
import Chart from "./components/Chart";

type View = "home" | "widgets" | "gallery" | "contact" | "chart";

function App() {
  const [view, setView] = useState<View>("home");

  return (
    <div className="app-root">
      <Sidebar view={view} onChange={setView} />

      <main className="app-main">
        {view === "home" && <Home />}
        {view === "widgets" && <Widgets />}
        {view === "gallery" && <Gallery />}
        {view === "contact" && <ContactForm />}
        {view === "chart" && <Chart />}
      </main>
    </div>
  );
}

export default App;
