import React from 'react';

const SkillsPreview = ({ data }) => {
  if (!data || !Array.isArray(data.skills)) {
    return null;
  }

  return (
    <>
      {data.skills.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-primary border-b mb-2">Skills</h2>
          <div className="space-y-1">
            {data.skills.map((skill, index) => (
              <div key={index} className="text-sm">
                {skill.category || skill.skills ? (
                  <>
                    {skill.category}
                    {skill.category && skill.skills ? ': ' : ''}
                    {skill.skills}
                  </>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default SkillsPreview;