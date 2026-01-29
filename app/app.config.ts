export default defineAppConfig({
  title: 'Caliko Links',
  github: 'https://github.com/doriantokarz/sink',
  twitter: 'https://x.com',
  telegram: 'https://telegram.com',
  description: 'A Simple / Speedy / Secure Link Shortener with Analytics, 100% run on Cloudflare.',
  image: 'https://sink.cool/banner.png',
  previewTTL: 300, // 5 minutes
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
