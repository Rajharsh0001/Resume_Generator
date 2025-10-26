import React from 'react';

const AchievementsPreview = ({ data }) => {
  return (
    <>
      {data.achievements.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold text-primary border-b mb-2">Achievements</h2>
          <ul className="list-disc pl-5">
            {data.achievements.map((ach, index) => (
              <li key={index}>{ach}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default AchievementsPreview;