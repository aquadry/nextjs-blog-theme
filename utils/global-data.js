export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'Abdelkrim Quadry';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'Next.js Blog Theme';
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : 'All rights reserved.';
  const year = process.env.BLOG_FOOTER_YEAR
    ? decodeURI(process.env.BLOG_FOOTER_YEAR)
    : '2025.';

  return {
    name,
    blogTitle,
    footerText,
    year,
  };
};
