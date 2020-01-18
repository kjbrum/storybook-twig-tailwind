import { storiesOf } from '@storybook/html'
import { text, select } from '@storybook/addon-knobs'

// Twig components
import heading from '@components/heading/heading.twig'

// Utilities
import { componentOutput } from '@utils'

// Init stories
const stories = storiesOf('Components/Heading', module)

// -----

// Heading
stories.add('Heading', () =>
    componentOutput(
        heading({
            type: select('Type', ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'], 'h1'),
            text: text('Text', 'Heading Text'),
        })
    )
)
