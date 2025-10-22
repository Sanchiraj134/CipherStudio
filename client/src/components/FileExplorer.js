import React, { useState } from "react";

export default function FileExplorer({
  files,
  currentFile,
  setCurrentFile,
  addFile,
  deleteFile,
  renameFile,
}) {
  const [editing, setEditing] = useState(null);
  const [newName, setNewName] = useState("");

  return (
    <div className="file-explorer">
      <button className="add-btn" onClick={addFile}>
        + Add File
      </button>
      <ul>
        {Object.keys(files).map((file) => (
          <li key={file} className={file === currentFile ? "active" : ""}>
            {editing === file ? (
              <input
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                onBlur={() => {
                  renameFile(file, newName);
                  setEditing(null);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    renameFile(file, newName);
                    setEditing(null);
                  }
                }}
                autoFocus
              />
            ) : (
              <span onClick={() => setCurrentFile(file)}>{file}</span>
            )}
            <div className="file-actions">
              <button onClick={() => { setEditing(file); setNewName(file); }}>✏️</button>
              <button onClick={() => deleteFile(file)}>🗑️</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
