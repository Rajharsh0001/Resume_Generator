import React from 'react';

const WorkExperienceForm = ({ formData, onFormChange, onSave }) => {
  // Add a new work experience entry
  const addWorkExp = () => {
    const updatedForm = Object.assign({}, formData);
    if (!updatedForm.workExperience) updatedForm.workExperience = [];
    updatedForm.workExperience.push({
      company: '',
      role: '',
      startDate: '',
      endDate: '',
      description: [],
    });
    onFormChange(updatedForm);
  };

  // Delete a work experience entry
  const deleteWorkExp = (index) => {
    const updatedForm = Object.assign({}, formData);
    const newWork = [];
    for (let i = 0; i < updatedForm.workExperience.length; i++) {
      if (i !== index) {
        newWork.push(updatedForm.workExperience[i]);
      }
    }
    updatedForm.workExperience = newWork;
    onFormChange(updatedForm);
  };

  // Update a field in a work experience entry
  const updateWorkExp = (index, field, value) => {
    const updatedForm = Object.assign({}, formData);
    const newWork = [];
    for (let i = 0; i < updatedForm.workExperience.length; i++) {
      const exp = Object.assign({}, updatedForm.workExperience[i]);
      if (i === index) {
        exp[field] = value;
      }
      newWork.push(exp);
    }
    updatedForm.workExperience = newWork;
    onFormChange(updatedForm);
  };

  // Add a bullet point to a work description
  const addWorkBullet = (index, bullet) => {
    if (!bullet.trim()) return;
    const updatedForm = Object.assign({}, formData);
    const newWork = [];
    for (let i = 0; i < updatedForm.workExperience.length; i++) {
      const exp = Object.assign({}, updatedForm.workExperience[i]);
      if (i === index) {
        const newDesc = [];
        for (let j = 0; j < exp.description.length; j++) {
          newDesc.push(exp.description[j]);
        }
        newDesc.push(bullet);
        exp.description = newDesc;
      }
      newWork.push(exp);
    }
    updatedForm.workExperience = newWork;
    onFormChange(updatedForm);
  };

  // Delete a bullet point from a work description
  const deleteWorkBullet = (workIndex, bulletIndex) => {
    const updatedForm = Object.assign({}, formData);
    const newWork = [];
    for (let i = 0; i < updatedForm.workExperience.length; i++) {
      const exp = Object.assign({}, updatedForm.workExperience[i]);
      if (i === workIndex) {
        const newDesc = [];
        for (let j = 0; j < exp.description.length; j++) {
          if (j !== bulletIndex) {
            newDesc.push(exp.description[j]);
          }
        }
        exp.description = newDesc;
      }
      newWork.push(exp);
    }
    updatedForm.workExperience = newWork;
    onFormChange(updatedForm);
  };

  return (
    <div>
      <h3 className="text-xl font-semibold text-secondary mb-2">Work Experience</h3>
      {formData.workExperience.map((exp, index) => (
        <div key={index} className="mb-4 border-t pt-2 relative">
          <button
            type="button"
            onClick={() => deleteWorkExp(index)}
            className="absolute top-2 right-2 text-red-500 hover:text-red-700 text-sm font-semibold"
          >
            Delete
          </button>
          <input
            type="text"
            placeholder="Company"
            value={exp.company}
            onChange={(e) => updateWorkExp(index, 'company', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-1"
          />
          <input
            type="text"
            placeholder="Role"
            value={exp.role}
            onChange={(e) => updateWorkExp(index, 'role', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-1"
          />
          <input
            type="date"
            placeholder="Start Date"
            value={exp.startDate}
            onChange={(e) => updateWorkExp(index, 'startDate', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-1"
            required
          />
          <input
            type="date"
            placeholder="End Date"
            value={exp.endDate}
            onChange={(e) => updateWorkExp(index, 'endDate', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-1"
            required
          />
          <div>
            <label className="block text-sm text-gray-600">Description (Add bullets)</label>
            <input
              type="text"
              placeholder="Add a bullet point and press Enter"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  addWorkBullet(index, e.target.value);
                  e.target.value = '';
                }
              }}
              className="w-full p-2 border border-gray-300 rounded"
            />
            <ul className="list-disc pl-5 mt-2">
              {exp.description.map((bullet, bIndex) => (
                <li key={bIndex} className="text-sm flex justify-between items-center">
                  <span>{bullet}</span>
                  <button
                    type="button"
                    onClick={() => deleteWorkBullet(index, bIndex)}
                    className="text-red-500 hover:text-black text-xs"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
      <button
        type="button"
        onClick={addWorkExp}
        className="px-4 py-1 bg-black text-white rounded hover:bg-blue-700 mr-2"
      >
        Add Experience
      </button>
      <button
        type="button"
        onClick={onSave}
        className="px-4 py-1 bg-black text-white rounded hover:bg-blue-700 mt-2"
      >
        Save Work Experience
      </button>
    </div>
  );
};

export default WorkExperienceForm;
