const tailwindcss = require('tailwindcss')

const purgecss = require('@fullhuman/postcss-purgecss')({
    content: ['./src/components/**/*.twig', './stories/**/*.js'],
    extractors: [
        {
            extractor: class {
                static extract(content) {
                    return content.match(/[A-Za-z0-9-_:/]+/g) || []
                }
            },
            extensions: ['twig', 'js'],
        },
    ],
    whitelist: ['html', 'body', 'pre', 'code', 'hr'],
    whitelistPatterns: [],
})

module.exports = {
    plugins: [
        tailwindcss('./tailwind.config.js'),
        require('postcss-flexibility'),
        require('pixrem'),
        require('autoprefixer'),
        ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
    ],
}
