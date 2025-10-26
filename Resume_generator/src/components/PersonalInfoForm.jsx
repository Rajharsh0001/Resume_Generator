import React from 'react';

const PersonalInfoForm = ({ formData, onFormChange, onSave }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Create a copy of formData using Object.assign
    const updatedFormData = Object.assign({}, formData);
    updatedFormData[name] = value;

    onFormChange(updatedFormData);
  };

  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold text-secondary mb-2">Personal Information</h3>
      <div className="space-y-3">
        <div>
          <label className="block text-sm text-secondary mb-1">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Full Name"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm text-secondary mb-1">Phone Number</label>
          <input
            type="number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="1234567890"
            className="w-full p-2 border border-gray-300 rounded"
            required
            minLength="10"
            maxLength="10"
          />
        </div>
        <div>
          <label className="block text-sm text-secondary mb-1">Email ID</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Email ID"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm text-secondary mb-1">LinkedIn URL</label>
          <input
            type="text"
            name="linkedin"
            value={formData.linkedin}
            onChange={handleChange}
            placeholder="Enter LinkedIn URL"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block text-sm text-secondary mb-1">GitHub URL</label>
          <input
            type="text"
            name="github"
            value={formData.github}
            onChange={handleChange}
            placeholder="Enter GitHub URL"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
      </div>
      <button
        type="button"
        onClick={onSave}
        className="mt-3 px-4 py-1 bg-black text-white rounded hover:bg-blue-700"
      >
        Save Personal Information
      </button>
    </div>
  );
};

export default PersonalInfoForm;
