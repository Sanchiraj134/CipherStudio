// client/src/utils/storage.js
import axios from "axios";

// Backend base URL
const BASE_URL = "http://localhost:5000/api/projects";

// Save project to backend
export const saveProject = async (projectId, files) => {
  try {
    const response = await axios.post(`${BASE_URL}/save`, {
      projectId,
      files,
    });
    return response.data;
  } catch (error) {
    console.error("Error saving project:", error);
    alert("Failed to save project. See console for details.");
  }
};

// Load project from backend
export const loadProject = async (projectId) => {
  try {
    const response = await axios.get(`${BASE_URL}/load/${projectId}`);
    return response.data.files; // Assuming backend returns { projectId, files }
  } catch (error) {
    console.error("Error loading project:", error);
    alert("Failed to load project. See console for details.");
    return null;
  }
};
