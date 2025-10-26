import React from 'react';

const SkillsForm = ({ formData, onFormChange, onSave }) => {
  const updateSkill = (index, field, value) => {
    const updatedSkills = formData.skills.slice(); // copy array
    updatedSkills[index][field] = value;

    const updatedFormData = Object.assign({}, formData);
    updatedFormData.skills = updatedSkills;
    onFormChange(updatedFormData);
  };

  // Add a new skill
  const addSkill = () => {
    const updatedSkills = formData.skills.slice();
    updatedSkills.push({ category: '', skills: '' });

    const updatedFormData = Object.assign({}, formData);
    updatedFormData.skills = updatedSkills;
    onFormChange(updatedFormData);
  };

  // Delete a skill
  const deleteSkill = (index) => {
    const updatedSkills = formData.skills.filter((_, i) => i !== index);

    const updatedFormData = Object.assign({}, formData);
    updatedFormData.skills = updatedSkills;
    onFormChange(updatedFormData);
  };

  return (
    <div>
      <h3 className="text-xl font-semibold text-secondary mb-2">Skills</h3>
      <table className="w-full border-collapse mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2 text-left">Category</th>
            <th className="border border-gray-300 p-2 text-left">Skills</th>
            <th className="border border-gray-300 p-2 w-20"></th>
          </tr>
        </thead>
        <tbody>
          {formData.skills.map((skill, index) => (
            <tr key={index} className="relative">
              <td className="border border-gray-300 p-2">
                <input
                  type="text"
                  placeholder="Category (e.g., Programming Language)"
                  value={skill.category}
                  onChange={(e) => updateSkill(index, 'category', e.target.value)}
                  className="w-full p-1 border border-gray-300 rounded"
                  required={index === 0}
                />
              </td>
              <td className="border border-gray-300 p-2">
                <input
                  type="text"
                  placeholder="Skills (e.g., Java, Python, HTML)"
                  value={skill.skills}
                  onChange={(e) => updateSkill(index, 'skills', e.target.value)}
                  className="w-full p-1 border border-gray-300 rounded"
                />
              </td>
              <td className="border border-gray-300 p-2 text-center">
                <button
                  type="button"
                  onClick={() => deleteSkill(index)}
                  className="text-red-500 hover:text-red-700 text-sm font-semibold"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex space-x-2">
        <button
          type="button"
          onClick={addSkill}
          className="px-4 py-1 bg-black text-white rounded hover:bg-blue-700"
        >
          Add Skill
        </button>
        <button
          type="button"
          onClick={onSave}
          className="px-4 py-1 bg-black text-white rounded hover:bg-blue-700"
        >
          Save Skills
        </button>
      </div>
    </div>
  );
};

export default SkillsForm;
