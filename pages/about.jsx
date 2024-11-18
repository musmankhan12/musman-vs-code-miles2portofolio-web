// const AboutPage = () => {
//   return (
//     <>
//       <h3>A Little Bit About Me</h3>
//     </>
//   );
// };

// export async function getStaticProps() {
//   return {
//     props: { title: 'About' },
//   };
// }

// export default AboutPage;


import { useState } from 'react';
import styles from '../styles/AboutPage.module.css';

const AboutPage = () => {
  const [activeSection, setActiveSection] = useState('');

  const handleClick = (section) => {
    setActiveSection(section); // Set active section
  };

  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <img 
          src="/mypic.png" 
          alt="Profile" 
          className={styles.profileImage} 
        />
        <div className={styles.text}>
          <h3>About Me</h3>
          <p>This is a brief introduction about myself. I am passionate about web development and design.</p>
        </div>
      </div>

      <div className={styles.options}>
        <button className={styles.button} onClick={() => handleClick('experience')}>Experience</button>
        <button className={styles.button} onClick={() => handleClick('education')}>Education</button>
        <button className={styles.button} onClick={() => handleClick('skills')}>Skills</button>
      </div>

      <div className={styles.details}>
        {activeSection === 'experience' && (
          <div className={styles.section}>
            <h4>Experience</h4>
            <ul>
              <li>6Months experince in Front-End Web Development (2024 - Present)</li>
           
            </ul>
          </div>
        )}

        {activeSection === 'education' && (
          <div className={styles.section}>
            <h4>Education</h4>
            <ul>
              <li>Bachelor of Science in Computer Science - Degree College(2023 - 2024)</li>
              <li>Howrd Grammer  School  (2011 - 2021)</li>
            </ul>
          </div>
        )}

        {activeSection === 'skills' && (
          <div className={styles.section}>
            <h4>Skills</h4>
            <ul>
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
