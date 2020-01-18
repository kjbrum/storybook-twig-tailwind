import { storiesOf } from '@storybook/html'
import { text, select } from '@storybook/addon-knobs'

// Twig components
import button from '@components/button/button.twig'

// Utilities
import { componentOutput } from '@utils'

// Init stories
const stories = storiesOf('Components/Button', module)

// -----

// Button
stories.add('Button', () =>
    componentOutput(
        button({
            type: select(
                'Type',
                {
                    Default: '',
                    Outline: 'outline',
                },
                'default'
            ),
            text: text('Text', 'Button'),
        })
    )
)
