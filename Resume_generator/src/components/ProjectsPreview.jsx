import React from 'react';

const ProjectsPreview = ({ data }) => {
  return (
    <>
      {data.projects.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-primary border-b mb-2">Projects</h2>
          {data.projects.map((proj, index) => (
            <div key={index} className="mb-4">
              <p className="font-medium">{proj.title} ({proj.tech})</p>
              <ul className="list-disc pl-5 mt-1">
                {proj.description.map((bullet, bIndex) => (
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

export default ProjectsPreview;