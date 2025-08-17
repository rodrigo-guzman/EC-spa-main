/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['victoricalp.mitiendanube.com', 'localhost'],
    },
    i18n: {
        locales: ['es', 'en'],
        defaultLocale: 'es',
    },
}

module.exports = nextConfig
