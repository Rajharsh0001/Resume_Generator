import React from 'react';
import ResumeState from './components/ResumeState';
import ScrollSync from './components/ScrollSync';
import PDFGenerator from './components/PDFGenerator';
import ResumeForm from './components/ResumeForm';
import ResumePreview from './components/ResumePreview';

function App() {
  return (
    <ResumeState>
      {({ formData, resumeData, error, handleFormChange, savePersonalInfo, saveEducation, saveSkills, saveWorkExperience, saveProjects, saveAchievements }) => (
        <ScrollSync>
          {({ formContainerRef, previewContainerRef }) => (
            <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">
              <div
                ref={formContainerRef}
                className="w-full md:w-1/2 p-8 bg-white shadow-lg overflow-y-auto max-h-screen hide-scrollbar"
              >
                <h1 className="text-3xl font-bold text-primary mb-4">Build Your Resume</h1>
                {error && (
                  <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
                    {error}
                  </div>
                )}
                <ResumeForm
                  formData={formData}
                  onFormChange={handleFormChange}
                  onSavePersonalInfo={savePersonalInfo}
                  onSaveEducation={saveEducation}
                  onSaveSkills={saveSkills}
                  onSaveWorkExperience={saveWorkExperience}
                  onSaveProjects={saveProjects}
                  onSaveAchievements={saveAchievements}
                />
              </div>

              <div
                ref={previewContainerRef}
                className="w-full md:w-1/2 p-8 bg-gray-50 overflow-y-auto max-h-screen hide-scrollbar"
              >
                <h2 className="text-2xl font-bold text-primary mb-4">Preview</h2>
                <div className="max-w-[210mm] mx-auto bg-white shadow-md">
                  <ResumePreview data={resumeData} />
                </div>
                <div className="flex justify-center mt-6">
                  <PDFGenerator resumeData={resumeData} />
                </div>
              </div>
            </div>
          )}
        </ScrollSync>
      )}
    </ResumeState>
  );
}

export default App;