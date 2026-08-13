import { Helmet } from 'react-helmet-async';
import { SITE_URL, SITE_NAME, DEFAULT_IMAGE, AUTHOR } from '../lib/site';

interface SeoProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: string;
  locale?: string;
  noindex?: boolean;
}

const Seo = ({
  title,
  description,
  path = '/',
  image = DEFAULT_IMAGE,
  type = 'website',
  locale = 'es',
  noindex = false
}: SeoProps) => {
  const url = `${SITE_URL}${path === '/' ? '' : path}`;
  const fullTitle = title.includes(AUTHOR) ? title : `${title} | ${AUTHOR}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={noindex ? 'noindex, follow' : 'index, follow'} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content={locale === 'es' ? 'es_CO' : 'en_US'} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default Seo;
