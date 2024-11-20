import React, { useState } from 'react';
import styles from '../styles/AboutPage.module.css';

const AboutPage = () => {
  const [activeSection, setActiveSection] = useState('');

  const handleClick = (section: string) => {
    setActiveSection(section);
  };

  return (
    <div className={styles.container}>
      {/* Profile Section */}
      <div className={styles.profileContainer}>
        <div className={styles.profileImage}>
          <img 
            src="/mypic.png" 
            alt="Profile" 
            className={styles.profilePic} 
          />
        </div>
        <div className={styles.text}>
          <h3>About Me</h3>
          <p>This is a brief introduction about myself. I am passionate about web development and design.</p>
        </div>
      </div>

      {/* Options Section */}
      <div className={styles.options}>
        <button className={styles.button} onClick={() => handleClick('experience')}>Experience</button>
        <button className={styles.button} onClick={() => handleClick('education')}>Education</button>
        <button className={styles.button} onClick={() => handleClick('skills')}>Skills</button>
      </div>

      {/* Dynamic Section */}
      <div className={styles.details}>
        {activeSection === 'experience' && (
          <div className={styles.section}>
            <h4>Experience</h4>
            <ul className={styles.sectionList}>
              <li>6 Months experience in Front-End Web Development (2024 - Present)</li>
            </ul>
          </div>
        )}

        {activeSection === 'education' && (
          <div className={styles.section}>
            <h4>Education</h4>
            <ul className={styles.sectionList}>
              <li>Bachelor of Science in Computer Science - Degree College (2023 - 2024)</li>
              <li>Howrd Grammar School (2011 - 2021)</li>
            </ul>
          </div>
        )}

        {activeSection === 'skills' && (
          <div className={styles.section}>
            <h4>Skills</h4>
            <ul className={styles.sectionList}>
              <li>HTML, CSS, JavaScript</li>
              <li>React, Next.js, TypeScript</li>
              <li>UI/UX Design</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutPage;
