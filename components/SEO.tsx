
import React from 'react';
import { SITE_NAME } from '../constants';

interface SEOProps {
  title: string;
  description: string;
  slug?: string;
  type?: 'website' | 'article';
}

const SEO: React.FC<SEOProps> = ({ title, description, slug, type = 'website' }) => {
  const url = `https://infossewa.netlify.app/#/${slug || ''}`;
  const fullTitle = `${title} | ${SITE_NAME}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": type === 'article' ? "NewsArticle" : "WebSite",
    "name": SITE_NAME,
    "url": url,
    "description": description,
    "publisher": {
      "@type": "Organization",
      "name": SITE_NAME,
      "logo": {
        "@type": "ImageObject",
        "url": "https://picsum.photos/200/200"
      }
    }
  };

  return (
    <React.Fragment>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </React.Fragment>
  );
};

export default SEO;
