/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
      remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com',
        
      },
      {
        protocol: 'https',
        hostname: 'pixabay.com',
        
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
        
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
        
      },
    ]
  
  },
};

export default nextConfig;
