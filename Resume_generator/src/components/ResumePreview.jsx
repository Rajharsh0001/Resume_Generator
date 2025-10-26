import React from 'react';
import PersonalInfoPreview from './PersonalInfoPreview';
import EducationPreview from './EducationPreview';
import SkillsPreview from './SkillsPreview';
import WorkExperiencePreview from './WorkExperiencePreview';
import ProjectsPreview from './ProjectsPreview';
import AchievementsPreview from './AchievementsPreview';

// Container for all preview sections
const ResumePreview = ({ data }) => {
  return (
    <div id="resume-preview" className="bg-white p-6 border border-gray-200 shadow-md text-black text-sm leading-relaxed">
      <PersonalInfoPreview data={data} />
      <EducationPreview data={data} />
      <SkillsPreview data={data} />
      <WorkExperiencePreview data={data} />
      <ProjectsPreview data={data} />
      <AchievementsPreview data={data} />
    </div>
  );
};

export default ResumePreview;