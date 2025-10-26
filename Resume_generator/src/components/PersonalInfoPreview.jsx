import React from 'react';

const PersonalInfoPreview = ({ data }) => {
  return (
    <div className="text-center mb-6">
      <h1 className="text-2xl font-bold text-primary">{data.name || 'Your Name'}</h1>
      <p className="text-secondary">
        {data.phone} | {data.email}
      </p>
      <p>
        <a href={data.linkedin} className="text-accent">{data.linkedin}</a> | 
        <a href={data.github} className="text-accent ml-2">{data.github}</a>
      </p>
    </div>
  );
};

export default PersonalInfoPreview;