import React from 'react';

const AchievementsForm = ({ formData, onFormChange, onSave }) => {
  // Add a new achievement
  const addAchievement = (achievement) => {
    if (achievement.trim()) {
      const updatedAchievements = formData.achievements.slice(); // copy existing array
      updatedAchievements.push(achievement);

      const updatedFormData = Object.assign({}, formData);
      updatedFormData.achievements = updatedAchievements;

      onFormChange(updatedFormData);
    }
  };

  // Delete an achievement by index
  const deleteAchievement = (index) => {
    const updatedAchievements = formData.achievements.filter((_, i) => i !== index);

    const updatedFormData = Object.assign({}, formData);
    updatedFormData.achievements = updatedAchievements;

    onFormChange(updatedFormData);
  };

  return (
    <div>
      <h3 className="text-xl font-semibold text-secondary mb-2">Achievements (Optional)</h3>
      <input
        type="text"
        placeholder="Add an achievement and press Enter"
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            addAchievement(e.target.value);
            e.target.value = '';
          }
        }}
        className="w-full p-2 border border-gray-300 rounded"
      />
      <ul className="list-disc pl-5 mt-2">
        {formData.achievements.map((achievement, index) => (
          <li key={index} className="text-sm flex justify-between items-center">
            <span>{achievement}</span>
            <button
              type="button"
              onClick={() => deleteAchievement(index)}
              className="text-red-500 hover:text-red-700 text-xs"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={onSave}
        className="px-4 py-1 bg-black text-white rounded hover:bg-blue-700 mt-2"
      >
        Save Achievements
      </button>
    </div>
  );
};

export default AchievementsForm;
