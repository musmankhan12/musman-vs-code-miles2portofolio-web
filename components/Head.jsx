import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="M usman is an avid front end web developer building websites  you'd love to use"
      />
      <meta
        name="keywords"
        content="M usman, usman, khan, web developer portfolio, usman web developer, usman developer, mern stack, usman portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="M usman's Portfolio" />
      <meta
        property="og:description"
        content="A front-end developer building websites that you'd like to use."
      />
      <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" />
      <meta property="og:url" content="https://milstone2resumebuilderprojectbymusman.vercel.app/" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'M Usman Khan',
};
