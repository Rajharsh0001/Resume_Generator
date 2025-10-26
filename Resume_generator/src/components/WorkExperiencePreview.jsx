import React from 'react';

const WorkExperiencePreview = ({ data }) => {
  return (
    <>
      {data.workExperience.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-primary border-b mb-2">Work Experience</h2>
          {data.workExperience.map((exp, index) => (
            <div key={index} className="mb-4">
              <p className="font-medium">{exp.role} at {exp.company}</p>
              <p className="text-secondary text-xs">{exp.startDate} - {exp.endDate}</p>
              <ul className="list-disc pl-5 mt-1">
                {exp.description.map((bullet, bIndex) => (
                  <li key={bIndex}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default WorkExperiencePreview;