export default defineAppConfig({
  title: 'Caliko Link Shortener',
  email: 'contact@caliko.net',
  description: 'Caliko link shortener',
  image: 'https://sink.cool/banner.png',
  previewTTL: 300, // 5 minutes
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
