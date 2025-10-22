import React from "react";

export default function Navbar({ theme, setTheme, isAutosave, setIsAutosave, onSave, onLoad }) {
  return (
    <div className="navbar">
      <h2>CipherStudio</h2>
      <div className="controls">
        <label className="switch">
          <input
            type="checkbox"
            checked={isAutosave}
            onChange={(e) => setIsAutosave(e.target.checked)}
          />
          <span className="slider"></span>
        </label>
        <span>Autosave</span>
        <button onClick={onSave}>💾 Save</button>
        <button onClick={onLoad}>📂 Load</button>
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
      </div>
    </div>
  );
}
