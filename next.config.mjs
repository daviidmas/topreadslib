import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

/** @type {import('next').NextConfig} */

const nextConfig = {
  images : { 
    domains : ['upload.wikimedia.org', 'en.wikipedia.org', "images.unsplash.com"]
  }
};

if (process.env.NODE_ENV === 'development') {
  await setupDevPlatform();
}

export default nextConfig;
