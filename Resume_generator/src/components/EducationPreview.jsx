import React from 'react';

const EducationPreview = ({ data }) => {
  const renderEducation = (edu, index) => {
    if (edu.institution || edu.degree || edu.year || edu.marks) {
      return (
        <li key={index} className="mb-1">
          {edu.degree} - {edu.institution} ({edu.year}) {edu.marks && `(${edu.marks})`}
        </li>
      );
    }
    return null;
  };

  return (
    <>
      {data.education.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-primary border-b mb-2">Education</h2>
          <ul className="list-disc pl-5">
            {data.education.map((edu, index) => renderEducation(edu, index))}
          </ul>
        </div>
      )}
    </>
  );
};

export default EducationPreview;