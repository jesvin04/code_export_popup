import { useState } from "react";
import Popup from "./components/PopUp";
import "./App.css";
function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="app">
      <button onClick={() => setIsOpen(true)} className="export-btn">
        EXPORT CODE
      </button>

      {isOpen && <Popup onClose={() => setIsOpen(false)} />}
    </div>
  );
}

export default App;
