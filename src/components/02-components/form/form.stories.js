import { storiesOf } from '@storybook/html'
import { text, boolean, select } from '@storybook/addon-knobs'

// Twig components
import input from '@components/form/input.twig'

// Utilities
import { componentOutput } from '@utils'

// Init stories
const stories = storiesOf('Components/Form', module)

// -----

// Input
stories.add('Input', () =>
    componentOutput(
        input({
            type: select(
                'Type',
                {
                    Text: 'text',
                    Email: 'email',
                    Number: 'number',
                    Telephone: 'tel',
                },
                'tel'
            ),
            label: text('Label', 'Phone Number'),
            value: text('Value', ''),
            error: text('Error', ''),
            isInline: boolean('Inline', false),
            isRequired: boolean('Required', false),
            isDisabled: boolean('Disabled', false),
        })
    )
)
