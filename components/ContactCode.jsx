import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: '',
    href: '',
  },
  {
    social: 'email',
    link: 'musmankhan329@gmail.com',
    href: 'mailto:musmankhan329@gmail.com',
  },
  {
    social: 'github',
    link: 'musmankhan12',
    href: 'https://github.com/musmankhan12 ',
  },
  {
    social: 'linkedin',
    link: 'M Usman Khan',
    href: 'https://www.linkedin.com/in/muhammad-usman-7507102b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  },
  {
    social: 'twitter',
    link: 'M usman',
    href: '',
  },
  {
    social: 'instagram',
    link: 'musman',
    href: '',
  },
  {
    social: 'polywork',
    link: 'M usman',
    href: '',
  },
  {
    social: 'telegram',
    link: 'Usmankhan',
    href: '',
  },
  {
    social: 'whatsapp phone',
    link: '03417794833',
    href: '',
  },
  {
    social: 'codesandbox',
    link: 'usman',
    href: '',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
