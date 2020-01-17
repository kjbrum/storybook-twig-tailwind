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
    config.resolve.alias['@atoms'] = `${componentPath}/01-atoms`
    config.resolve.alias['@molecules'] = `${componentPath}/02-molecules`
    config.resolve.alias['@organisms'] = `${componentPath}/03-organisms`
    config.resolve.alias['@templates'] = `${componentPath}/04-templates`
    config.resolve.alias['@pages'] = `${componentPath}/05-pages`

    // SCSS
    config.resolve.alias['@scss'] = path.resolve(__dirname, '../src/scss')

    // Utilities
    config.resolve.alias['@utils'] = path.resolve(__dirname, '../utils')

    return config
}
