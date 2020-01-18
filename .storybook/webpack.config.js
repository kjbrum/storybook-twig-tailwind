const path = require('path')

module.exports = async ({ config, mode }) => {
    // Add twig support
    config.module.rules.push({
        test: /\.twig$/,
        loader: 'twig-loader',
    })

    // Add SCSS support
    config.module.rules.push({
        test: /\.s?css$/,
        // loaders: ['style-loader?singleton', 'css-loader', 'sass-loader'],
        loaders: [
            'style-loader',
            'css-loader',
            'postcss-loader',
            'sass-loader',
        ],
        include: path.resolve(__dirname, '../'),
    })

    // Add static file support
    config.module.rules.push({
        test: /\.(png|jpg|svg|woff|woff2|eot|ttf)$/,
        loaders: ['file-loader'],
        include: path.resolve(__dirname, '../'),
    })

    // Custom alias'
    // Components
    const componentPath = path.resolve(__dirname, '../src/components')
    config.resolve.alias['@tokens'] = `${componentPath}/01-tokens`
    config.resolve.alias['@components'] = `${componentPath}/02-components`
    config.resolve.alias['@templates'] = `${componentPath}/03-templates`

    // SCSS
    config.resolve.alias['@scss'] = path.resolve(__dirname, '../src/scss')

    // Utilities
    config.resolve.alias['@utils'] = path.resolve(__dirname, '../utils')

    // Project root
    config.resolve.alias['@root'] = path.resolve(__dirname, '../')

    return config
}
