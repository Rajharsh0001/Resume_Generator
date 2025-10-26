import React, { useRef, useEffect } from 'react';

// Component to handle synchronized scrolling between form and preview
const ScrollSync = ({ children }) => {
  const formContainerRef = useRef(null);
  const previewContainerRef = useRef(null);

  useEffect(() => {
    const formContainer = formContainerRef.current;
    const previewContainer = previewContainerRef.current;
    if (!formContainer || !previewContainer) return;

    // Get form and preview section elements
    const formSections = formContainer.querySelectorAll('div > div');
    const previewSections = previewContainer.querySelectorAll('#resume-preview > div');

    const handleScroll = () => {
      const formScrollTop = formContainer.scrollTop;
      const formHeight = formContainer.scrollHeight - formContainer.clientHeight;
      if (formHeight <= 0) return; // No scrolling needed if form fits

      // Calculate scroll percentage
      const scrollPercentage = formScrollTop / formHeight;

      // Map form sections to preview sections
      let targetPreviewScroll = 0;
      let activeSectionIndex = 0;

      // Find the form section currently in view
      formSections.forEach((section, index) => {
        const sectionTop = section.offsetTop - formContainer.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        if (formScrollTop >= sectionTop && formScrollTop < sectionBottom) {
          activeSectionIndex = index;
        }
      });

      // Scroll preview to corresponding section
      if (previewSections[activeSectionIndex]) {
        const previewSection = previewSections[activeSectionIndex];
        const previewHeight = previewContainer.scrollHeight - previewContainer.clientHeight;
        targetPreviewScroll = previewSection.offsetTop * scrollPercentage;
        previewContainer.scrollTo({
          top: targetPreviewScroll,
          behavior: 'smooth',
        });
      }
    };

    formContainer.addEventListener('scroll', handleScroll);
    return () => formContainer.removeEventListener('scroll', handleScroll);
  }, []);

  return children({ formContainerRef, previewContainerRef });
};

export default ScrollSync;