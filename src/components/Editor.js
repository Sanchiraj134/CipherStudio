import React from "react";
import { Sandpack } from "@codesandbox/sandpack-react";
import "../App.css";

export default function Editor({ currentFile, files }) {
  return (
    <div className="sandpack-container">
      {currentFile ? (
        <Sandpack
          template="react"
          files={{ [currentFile]: files[currentFile] }}
          options={{ showNavigator: false, showTabs: true, editorHeight: 500 }}
        />
      ) : (
        <div style={{ padding: "20px" }}>Select or add a file to start coding!</div>
      )}
    </div>
  );
}
