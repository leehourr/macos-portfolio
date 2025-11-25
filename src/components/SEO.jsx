import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({ title, description, keywords, image, url }) => {
  const siteTitle = "Leang Lyhour - Full Stack Web Developer Portfolio";
  const defaultDescription =
    "Leang Lyhour - Full Stack Developer with hands-on experience in building responsive web and mobile applications. Passionate about exploring new frameworks, contributing to innovative projects, and delivering user-focused solutions. View my portfolio showcasing real-world projects and technical expertise.";
  const defaultKeywords =
    "Leang Lyhour, Lee Hour, Full Stack Developer, Web Developer, Frontend Developer, Backend Developer, React Developer, JavaScript Developer, Responsive Web Design, Mobile Applications, Node.js, Express, MongoDB, HTML, CSS, Portfolio, Cambodia Developer, Software Engineer, UI/UX, User-Centered Design";
  const defaultImage = "https://leehour.dev/graph.webp";
  const siteUrl = "https://leehour.dev";

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <link rel="canonical" href={url || siteUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url || siteUrl} />
      <meta property="og:title" content={title || siteTitle} />
      <meta
        property="og:description"
        content={description || defaultDescription}
      />
      <meta property="og:image" content={image || defaultImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url || siteUrl} />
      <meta property="twitter:title" content={title || siteTitle} />
      <meta
        property="twitter:description"
        content={description || defaultDescription}
      />
      <meta property="twitter:image" content={image || defaultImage} />
    </Helmet>
  );
};

export default SEO;
