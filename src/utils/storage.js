export const saveProject = (projectId, files) => {
  localStorage.setItem(projectId, JSON.stringify(files));
};

export const loadProject = (projectId) => {
  const data = localStorage.getItem(projectId);
  return data ? JSON.parse(data) : null;
};
