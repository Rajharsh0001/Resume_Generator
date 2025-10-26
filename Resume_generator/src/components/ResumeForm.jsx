import React from 'react';
import PersonalInfoForm from './PersonalInfoForm';
import EducationForm from './EducationForm';
import SkillsForm from './SkillsForm';
import WorkExperienceForm from './WorkExperienceForm';
import ProjectsForm from './ProjectsForm';
import AchievementsForm from './AchievementsForm';

// Container for all form sections
const ResumeForm = ({
  formData,
  onFormChange,
  onSavePersonalInfo,
  onSaveEducation,
  onSaveSkills,
  onSaveWorkExperience,
  onSaveProjects,
  onSaveAchievements,
}) => {
  return (
    <form className="space-y-6">
      <PersonalInfoForm
        formData={formData}
        onFormChange={onFormChange}
        onSave={onSavePersonalInfo}
      />
      <EducationForm
        formData={formData}
        onFormChange={onFormChange}
        onSave={onSaveEducation}
      />
      <SkillsForm
        formData={formData}
        onFormChange={onFormChange}
        onSave={onSaveSkills}
      />
      <WorkExperienceForm
        formData={formData}
        onFormChange={onFormChange}
        onSave={onSaveWorkExperience}
      />
      <ProjectsForm
        formData={formData}
        onFormChange={onFormChange}
        onSave={onSaveProjects}
      />
      <AchievementsForm
        formData={formData}
        onFormChange={onFormChange}
        onSave={onSaveAchievements}
      />
    </form>
  );
};

export default ResumeForm;