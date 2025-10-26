import React from 'react';

const ProjectsForm = ({ formData, onFormChange, onSave }) => {
  // Add a new project
  const addProject = () => {
    const updatedProjects = formData.projects.slice(); // copy array
    updatedProjects.push({ title: '', tech: '', description: [] });

    const updatedFormData = Object.assign({}, formData);
    updatedFormData.projects = updatedProjects;

    onFormChange(updatedFormData);
  };

  // Delete a project at given index
  const deleteProject = (index) => {
    const updatedProjects = formData.projects.filter((_, i) => i !== index);

    const updatedFormData = Object.assign({}, formData);
    updatedFormData.projects = updatedProjects;

    onFormChange(updatedFormData);
  };

  // Update a field (title/tech) in a project
  const updateProject = (index, field, value) => {
    const updatedProjects = formData.projects.slice();
    updatedProjects[index][field] = value;

    const updatedFormData = Object.assign({}, formData);
    updatedFormData.projects = updatedProjects;

    onFormChange(updatedFormData);
  };

  // Add a bullet to project description
  const addProjectBullet = (index, bullet) => {
    if (bullet.trim() === '') return;

    const updatedProjects = formData.projects.slice();
    const updatedProject = Object.assign({}, updatedProjects[index]);
    updatedProject.description = updatedProject.description.slice();
    updatedProject.description.push(bullet);
    updatedProjects[index] = updatedProject;

    const updatedFormData = Object.assign({}, formData);
    updatedFormData.projects = updatedProjects;

    onFormChange(updatedFormData);
  };

  // Delete a bullet from project description
  const deleteProjectBullet = (projectIndex, bulletIndex) => {
    const updatedProjects = formData.projects.slice();
    const updatedProject = Object.assign({}, updatedProjects[projectIndex]);
    updatedProject.description = updatedProject.description.filter((_, i) => i !== bulletIndex);
    updatedProjects[projectIndex] = updatedProject;

    const updatedFormData = Object.assign({}, formData);
    updatedFormData.projects = updatedProjects;

    onFormChange(updatedFormData);
  };

  return (
    <div>
      <h3 className="text-xl font-semibold text-secondary mb-2">Projects</h3>
      {formData.projects.map((proj, index) => (
        <div key={index} className="mb-4 border-t pt-2 relative">
          <button
            type="button"
            onClick={() => deleteProject(index)}
            className="absolute top-2 right-2 text-red-500 hover:text-red-700 text-sm font-semibold"
          >
            Delete
          </button>

          <input
            type="text"
            placeholder="Project Title"
            value={proj.title}
            onChange={(e) => updateProject(index, 'title', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-1"
          />

          <input
            type="text"
            placeholder="Technologies Used (comma separated)"
            value={proj.tech}
            onChange={(e) => updateProject(index, 'tech', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-1"
          />

          <div>
            <label className="block text-sm text-gray-600">Description (Add bullets)</label>
            <input
              type="text"
              placeholder="Add a bullet point and press Enter"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  addProjectBullet(index, e.target.value);
                  e.target.value = '';
                }
              }}
              className="w-full p-2 border border-gray-300 rounded"
            />
            <ul className="list-disc pl-5 mt-2">
              {proj.description.map((bullet, bIndex) => (
                <li key={bIndex} className="text-sm flex justify-between items-center">
                  <span>{bullet}</span>
                  <button
                    type="button"
                    onClick={() => deleteProjectBullet(index, bIndex)}
                    className="text-red-500 hover:text-red-700 text-xs"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
      <div className="flex space-x-2">
        <button
          type="button"
          onClick={addProject}
          className="px-4 py-1 bg-black text-white rounded hover:bg-blue-700"
        >
          Add Project
        </button>
        <button
          type="button"
          onClick={onSave}
          className="px-4 py-1 bg-black text-white rounded hover:bg-blue-700"
        >
          Save Projects
        </button>
      </div>
    </div>
  );
};

export default ProjectsForm;
