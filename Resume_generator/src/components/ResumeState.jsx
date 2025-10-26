import React, { useState } from 'react';

const ResumeState = ({ children }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    linkedin: '',
    github: '',
    education: [{ institution: '', degree: '', year: '', marks: '' }],
    skills: [{ category: '', skills: '' }],
    workExperience: [],
    projects: [],
    achievements: [],
  });

  const [resumeData, setResumeData] = useState({
    name: '',
    phone: '',
    email: '',
    linkedin: '',
    github: '',
    education: [],
    skills: [],
    workExperience: [],
    projects: [],
    achievements: [],
  });

  const [error, setError] = useState('');

  const handleFormChange = (updatedForm) => {
    setFormData(updatedForm);
    setError('');
  };

  // Simple email and phone validation
  const isValidEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const isValidPhone = (phone) => {
    const re = /^\d{10}$/;
    return re.test(phone);
  };

  // Save functions
  const savePersonalInfo = () => {
    if (!formData.name.trim()) {
      setError('Full Name is required.');
      return;
    }
    if (!formData.email.trim() || !isValidEmail(formData.email.trim())) {
      setError('Please enter a valid Email ID.');
      return;
    }
    if (!formData.phone.trim() || !isValidPhone(formData.phone.trim())) {
      setError('Phone Number must be exactly 10 digits.');
      return;
    }

    setError('');
    // Update manually without spread operator
    const updatedResume = Object.assign({}, resumeData);
    updatedResume.name = formData.name;
    updatedResume.phone = formData.phone;
    updatedResume.email = formData.email;
    updatedResume.linkedin = formData.linkedin;
    updatedResume.github = formData.github;

    setResumeData(updatedResume);
  };

  const saveEducation = () => {
    if (formData.education.length === 0) {
      setError('At least one Education entry is required.');
      return;
    }

    let validEntryFound = false;
    for (let i = 0; i < formData.education.length; i++) {
      const edu = formData.education[i];
      if (edu.institution.trim() && edu.degree.trim() && edu.year.trim()) {
        validEntryFound = true;
        break;
      }
    }

    if (!validEntryFound) {
      setError('At least one Education entry must have Institution, Degree, and Year.');
      return;
    }

    setError('');
    const updatedResume = Object.assign({}, resumeData);
    updatedResume.education = [];
    for (let i = 0; i < formData.education.length; i++) {
      updatedResume.education.push(formData.education[i]);
    }
    setResumeData(updatedResume);
  };

  const saveSkills = () => {
    const updatedResume = Object.assign({}, resumeData);
    updatedResume.skills = [];
    for (let i = 0; i < formData.skills.length; i++) {
      updatedResume.skills.push(formData.skills[i]);
    }
    setResumeData(updatedResume);
  };

  const saveWorkExperience = () => {
    const updatedResume = Object.assign({}, resumeData);
    updatedResume.workExperience = [];
    for (let i = 0; i < formData.workExperience.length; i++) {
      updatedResume.workExperience.push(formData.workExperience[i]);
    }
    setResumeData(updatedResume);
  };

  const saveProjects = () => {
    const updatedResume = Object.assign({}, resumeData);
    updatedResume.projects = [];
    for (let i = 0; i < formData.projects.length; i++) {
      updatedResume.projects.push(formData.projects[i]);
    }
    setResumeData(updatedResume);
  };

  const saveAchievements = () => {
    const updatedResume = Object.assign({}, resumeData);
    updatedResume.achievements = [];
    for (let i = 0; i < formData.achievements.length; i++) {
      updatedResume.achievements.push(formData.achievements[i]);
    }
    setResumeData(updatedResume);
  };

  return children({
    formData,
    resumeData,
    error,
    setError,
    handleFormChange,
    savePersonalInfo,
    saveEducation,
    saveSkills,
    saveWorkExperience,
    saveProjects,
    saveAchievements,
  });
};

export default ResumeState;
