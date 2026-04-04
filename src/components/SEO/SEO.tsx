import React from 'react'
import { Helmet } from 'react-helmet-async'

export interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  author?: string
  image?: string
  url?: string
  type?: string
  locale?: string
  siteName?: string
  twitterCard?: string
  twitterSite?: string
  structuredData?: object
}

export const SEO: React.FC<SEOProps> = ({
  title = 'Luigi Gargioni | Researcher & Computer Engineer',
  description = 'Luigi Gargioni - Computer Engineer specializing in software development, robotics, and AI. Portfolio showcasing projects, experience, and technical skills.',
  keywords = 'Luigi Gargioni, Computer Engineer, Software Developer, Robotics, AI, Machine Learning, Web Development, Portfolio',
  author = 'Luigi Gargioni',
  image = 'https://luigigargioni.github.io/og-image.jpg',
  url = 'https://luigigargioni.github.io/',
  type = 'website',
  locale = 'en_US',
  siteName = 'Luigi Gargioni Portfolio',
  twitterCard = 'summary_large_image',
  twitterSite = '@luigigargioni',
  structuredData,
}) => {
  const defaultStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Luigi Gargioni',
    jobTitle: 'Computer Engineer',
    url: 'https://luigigargioni.github.io/',
    sameAs: [
      'https://www.linkedin.com/in/luigi-gargioni/',
      'https://github.com/luigigargioni',
    ],
    alumniOf: {
      '@type': 'Organization',
      name: 'University',
    },
    knowsAbout: [
      'Software Engineering',
      'Robotics',
      'Artificial Intelligence',
      'Machine Learning',
      'Web Development',
    ],
  }

  return (
    <Helmet>
      <html lang={locale.split('_')[0]} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:locale" content={locale} />
      <meta property="og:site_name" content={siteName} />

      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content={twitterSite} />
      <meta name="twitter:creator" content={twitterSite} />

      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
      <meta itemProp="image" content={image} />

      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>
    </Helmet>
  )
}
