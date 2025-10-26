import React from 'react';

const EducationForm = ({ formData, onFormChange, onSave }) => {
  // Update a specific education entry
  const updateEducation = (index, field, value) => {
    const updatedEducation = formData.education.slice(); // copy array
    updatedEducation[index][field] = value;

    const updatedFormData = Object.assign({}, formData);
    updatedFormData.education = updatedEducation;

    onFormChange(updatedFormData);
  };

  // Add a new education entry
  const addEducation = () => {
    const updatedEducation = formData.education.slice();
    updatedEducation.push({ institution: '', degree: '', year: '', marks: '' });

    const updatedFormData = Object.assign({}, formData);
    updatedFormData.education = updatedEducation;

    onFormChange(updatedFormData);
  };

  // Delete an education entry (prevent deleting the last one)
  const deleteEducation = (index) => {
    if (formData.education.length === 1) return;

    const updatedEducation = formData.education.filter((_, i) => i !== index);

    const updatedFormData = Object.assign({}, formData);
    updatedFormData.education = updatedEducation;

    onFormChange(updatedFormData);
  };

  return (
    <div>
      <h3 className="text-xl font-semibold text-secondary mb-2">Education</h3>
      <div className="space-y-4 mb-4">
        {formData.education.map((edu, index) => (
          <div key={index} className="border p-4 rounded">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-secondary mb-1">Institution</label>
                <input
                  type="text"
                  placeholder="University Name"
                  value={edu.institution}
                  onChange={(e) => updateEducation(index, 'institution', e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                  required={index === 0}
                />
              </div>
              <div>
                <label className="block text-sm text-secondary mb-1">Degree</label>
                <input
                  type="text"
                  placeholder="B.S. Computer Science"
                  value={edu.degree}
                  onChange={(e) => updateEducation(index, 'degree', e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                  required={index === 0}
                />
              </div>
              <div>
                <label className="block text-sm text-secondary mb-1">Year</label>
                <input
                  type="text"
                  placeholder="2020"
                  value={edu.year}
                  onChange={(e) => updateEducation(index, 'year', e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                  required={index === 0}
                />
              </div>
              <div>
                <label className="block text-sm text-secondary mb-1">Marks/CGPA</label>
                <input
                  type="text"
                  placeholder="3.8/4.0"
                  value={edu.marks}
                  onChange={(e) => updateEducation(index, 'marks', e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
            </div>
            {formData.education.length > 1 && (
              <button
                type="button"
                onClick={() => deleteEducation(index)}
                className="mt-2 text-red-500 hover:text-red-700 text-sm font-semibold"
              >
                Delete
              </button>
            )}
          </div>
        ))}
      </div>
      <div className="flex space-x-2">
        <button
          type="button"
          onClick={addEducation}
          className="px-4 py-1 bg-black text-white rounded hover:bg-blue-700"
        >
          Add Education
        </button>
        <button
          type="button"
          onClick={onSave}
          className="px-4 py-1 bg-black text-white rounded hover:bg-blue-700"
        >
          Save Education
        </button>
      </div>
    </div>
  );
};

export default EducationForm;
