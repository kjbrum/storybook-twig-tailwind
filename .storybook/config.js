import { addParameters, configure, addDecorator } from '@storybook/html'
import { themes } from '@storybook/theming'
import { withKnobs } from '@storybook/addon-knobs'
import { withA11y } from '@storybook/addon-a11y'

// Knobs
addDecorator(withKnobs)

// a11y
addDecorator(withA11y)

// Config
addParameters({
    options: {
        panelPosition: 'bottom',
        theme: themes.light,
    },
    a11y: {
        element: '#root', // optional selector which element to inspect
        config: {}, // axe-core configurationOptions (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#parameters-1)
        options: {} // axe-core optionsParameter (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#options-parameter)
    },
    knobs: {
        timestamps: true, // Doesn't emit events while user is typing.
        escapeHTML: true // Escapes strings to be safe for inserting as innerHTML. This option is true by default. It's safe to set it to `false` with frameworks like React which do escaping on their side.
                         // You can still set it to false, but it's strongly unrecommendend in cases when you host your storybook on some route of your main site or web app.
    },
})

// Add global decorators
const loadStories = () => {
    // Add intro screen
    require('../stories/intro.stories.js')

    // Import all files in the stories directory ending in *.stories.js
    const req = require.context('../stories', true, /.stories.js$/)
    req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
