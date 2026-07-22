/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.lukarunninng.com',
          },
        ],
        destination: 'https://luka-web-eta.vercel.app/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'lukarunninng.com',
          },
        ],
        destination: 'https://luka-web-eta.vercel.app/:path*',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
