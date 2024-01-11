'use client'
import Head from 'next/head';
import { useRouter } from 'next/navigation'

export default function CanonicalURL() {
  const siteUrl = 'https://geotagphoto.com/pngtojpg';
//   const router = useRouter();
//   const cleanPath = router.asPath.split('#')[0].split('?')[0];
//   const canonicalUrl = `${siteUrl}` + (router.asPath === '/' ? '' : cleanPath);
  return (
    <Head>
      <link rel="canonical" href={siteUrl} />
    </Head>
  );
};