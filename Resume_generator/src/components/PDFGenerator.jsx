import React from 'react';
import jsPDF from 'jspdf';

const PDFGenerator = ({ resumeData }) => {
  const downloadPDF = () => {
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4', 
    });

    const pageWidth = 210;
    const pageHeight = 297;
    const margin = 10;
    const maxWidth = pageWidth - 2 * margin;
    let y = margin; 

    // Set font
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);

    const addText = (text, x, fontSize, style = 'normal') => {
      doc.setFontSize(fontSize);
      doc.setFont('helvetica', style);
      const lines = doc.splitTextToSize(text, maxWidth);
      if (y + lines.length * fontSize * 0.4 > pageHeight - margin) {
        doc.addPage();
        y = margin;
      }
      doc.text(lines, x, y);
      y += lines.length * fontSize * 0.4;
    };

    if (resumeData.name) {
      addText(resumeData.name, margin, 16, 'bold');
    }
    if (resumeData.phone || resumeData.email) {
      addText(`${resumeData.phone} | ${resumeData.email}`, margin, 10);
    }
    if (resumeData.linkedin || resumeData.github) {
      addText(`${resumeData.linkedin} | ${resumeData.github}`, margin, 10);
    }
    y += 5;

    if (resumeData.education.length > 0) {
      addText('Education', margin, 14, 'bold');
      resumeData.education.forEach((edu) => {
        if (edu.institution || edu.degree || edu.year || edu.marks) {
          const text = `${edu.degree} - ${edu.institution} (${edu.year})${edu.marks ? ` (${edu.marks})` : ''}`;
          addText(text, margin + 5, 10);
        }
      });
      y += 5;
    }

    if (resumeData.skills.length > 0) {
      addText('Skills', margin, 14, 'bold');
      resumeData.skills.forEach((skill) => {
        if (skill.category || skill.skills) {
          const text = `${skill.category}${skill.category && skill.skills ? ': ' : ''}${skill.skills}`;
          addText(text, margin + 5, 10);
        }
      });
      y += 5;
    }

    if (resumeData.workExperience.length > 0) {
      addText('Work Experience', margin, 14, 'bold');
      resumeData.workExperience.forEach((exp) => {
        if (exp.company || exp.role) {
          addText(`${exp.role} at ${exp.company}`, margin + 5, 10, 'bold');
          addText(`${exp.startDate} - ${exp.endDate}`, margin + 5, 10);
          exp.description.forEach((bullet) => {
            addText(`• ${bullet}`, margin + 10, 10);
          });
        }
      });
      y += 5;
    }

    if (resumeData.projects.length > 0) {
      addText('Projects', margin, 14, 'bold');
      resumeData.projects.forEach((proj) => {
        if (proj.title || proj.tech) {
          addText(`${proj.title} (${proj.tech})`, margin + 5, 10, 'bold');
          proj.description.forEach((bullet) => {
            addText(`• ${bullet}`, margin + 10, 10);
          });
        }
      });
      y += 5;
    }

    if (resumeData.achievements.length > 0) {
      addText('Achievements', margin, 14, 'bold');
      resumeData.achievements.forEach((ach) => {
        addText(`• ${ach}`, margin + 5, 10);
      });
    }

    // Saving
    doc.save('resume.pdf');
  };

  return (
    <button
      onClick={downloadPDF}
      className="px-6 py-2 bg-red-500 text-white font-semibold rounded hover:bg-blue-700 transition"
    >
      Download Resume as PDF
    </button>
  );
};

export default PDFGenerator;