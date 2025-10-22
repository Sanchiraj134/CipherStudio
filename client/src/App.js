import React, { useState, useEffect } from "react";
import FileExplorer from "./components/FileExplorer";
import Editor from "./components/Editor";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { saveProject, loadProject } from "./utils/storage";
import "./App.css";

function App() {
  const [files, setFiles] = useState({
    "App.js": `export default function App() { return <h1>Hello CipherStudio</h1>; }`,
  });
  const [currentFile, setCurrentFile] = useState("App.js");
  const [theme, setTheme] = useState("light");
  const [isAutosave, setIsAutosave] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [projectId, setProjectId] = useState(null);

  // Autosave (optional, keeps localStorage)
  useEffect(() => {
    if (isAutosave) localStorage.setItem("autosaveFiles", JSON.stringify(files));
  }, [files, isAutosave]);

  // --- File operations ---
  const addFile = () => {
    const name = prompt("Enter file name:");
    if (name && !files[name]) {
      setFiles({ ...files, [name]: "" });
      setCurrentFile(name);
    }
  };

  const renameFile = (oldName) => {
    const newName = prompt("Enter new name:", oldName);
    if (newName && !files[newName]) {
      const newFiles = { ...files };
      newFiles[newName] = newFiles[oldName];
      delete newFiles[oldName];
      setFiles(newFiles);
      setCurrentFile(newName);
    } else alert("Invalid or duplicate name!");
  };

  const deleteFile = (name) => {
    const updated = { ...files };
    delete updated[name];
    setFiles(updated);
    setCurrentFile(Object.keys(updated)[0] || "");
  };

  // --- Backend integration via storage.js ---
  const saveHandler = async () => {
    if (!files) return;
    const id = projectId || null;
    const data = await saveProject(id, files);
    setProjectId(data._id);
    alert("Project saved! ID: " + data._id);
  };

  const loadHandler = async () => {
    const id = prompt("Enter Project ID:");
    if (!id) return;
    const data = await loadProject(id);
    if (data) {
      setFiles(data.files);
      setCurrentFile(Object.keys(data.files)[0]);
      setProjectId(data._id);
      alert("Project loaded successfully");
    } else alert("Project not found");
  };

  const updateHandler = async () => {
    if (!projectId) return alert("No project loaded");
    const data = await saveProject(projectId, files);
    alert("Project updated!");
  };

  if (!isLoggedIn) {
    return showRegister ? (
      <Register setShowRegister={setShowRegister} />
    ) : (
      <Login setIsLoggedIn={setIsLoggedIn} setShowRegister={setShowRegister} />
    );
  }

  return (
    <div className={`app-container ${theme}`}>
      <Navbar
        theme={theme}
        setTheme={setTheme}
        onSave={saveHandler}
        onLoad={loadHandler}
        onUpdate={updateHandler}
        isAutosave={isAutosave}
        setIsAutosave={setIsAutosave}
        setIsLoggedIn={setIsLoggedIn}
      />

      <div className="main-area">
        {/* Logout button */}
        <div style={{ textAlign: "right", padding: "10px" }}>
          <button
            onClick={() => setIsLoggedIn(false)}
            style={{
              padding: "8px 15px",
              backgroundColor: "#ff4d4f",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        </div>

        <FileExplorer
          files={files}
          currentFile={currentFile}
          setCurrentFile={setCurrentFile}
          addFile={addFile}
          deleteFile={deleteFile}
          renameFile={renameFile}
        />
        <Editor currentFile={currentFile} files={files} />
      </div>
    </div>
  );
}

export default App;
