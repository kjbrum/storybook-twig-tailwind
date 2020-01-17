import { storiesOf } from '@storybook/html'
import { text, boolean, select } from '@storybook/addon-knobs'

// Twig components
import heading from '@atoms/global/heading.twig'
import button from '@atoms/global/button.twig'
import input from '@atoms/global/input.twig'

// Utilities
import { componentOutput } from '@utils'

// Init stories
const stories = storiesOf('Atoms/Global', module)

// -----

// Colors
stories.add(
    'Colors',
    () => `
<div>
	<div class="h4 mb-0">Gray</div>
	<div class="flex flex-wrap">
		<div class="m-1"><div class="w-16 h-16 rounded bg-gray-100"></div>100</div>
		<div class="m-1"><div class="w-16 h-16 rounded bg-gray-200"></div>200</div>
		<div class="m-1"><div class="w-16 h-16 rounded bg-gray-300"></div>300</div>
		<div class="m-1"><div class="w-16 h-16 rounded bg-gray-400"></div>400</div>
		<div class="m-1"><div class="w-16 h-16 rounded bg-gray-500"></div>500</div>
		<div class="m-1"><div class="w-16 h-16 rounded bg-gray-600"></div>600</div>
		<div class="m-1"><div class="w-16 h-16 rounded bg-gray-700"></div>700</div>
		<div class="m-1"><div class="w-16 h-16 rounded bg-gray-800"></div>800</div>
		<div class="m-1"><div class="w-16 h-16 rounded bg-gray-900"></div>900</div>
	</div>
</div>

<div class="mt-8">
	<div class="h4 mb-0">Red</div>
	<div class="flex flex-wrap">
		<div class="m-1"><div class="w-16 h-16 rounded bg-red-100"></div>100</div>
		<div class="m-1"><div class="w-16 h-16 rounded bg-red-200"></div>200</div>
		<div class="m-1"><div class="w-16 h-16 rounded bg-red-300"></div>300</div>
		<div class="m-1"><div class="w-16 h-16 rounded bg-red-400"></div>400</div>
		<div class="m-1"><div class="w-16 h-16 rounded bg-red-500"></div>500</div>
		<div class="m-1"><div class="w-16 h-16 rounded bg-red-600"></div>600</div>
		<div class="m-1"><div class="w-16 h-16 rounded bg-red-700"></div>700</div>
		<div class="m-1"><div class="w-16 h-16 rounded bg-red-800"></div>800</div>
		<div class="m-1"><div class="w-16 h-16 rounded bg-red-900"></div>900</div>
	</div>
</div>

<div class="mt-8">
	<div class="h4 mb-0">Orange</div>
	<div class="flex flex-wrap">
		<div class="m-1"><div class="w-16 h-16 rounded bg-orange-100"></div>100</div>
		<div class="m-1"><div class="w-16 h-16 rounded bg-orange-200"></div>200</div>
		<div class="m-1"><div class="w-16 h-16 rounded bg-orange-300"></div>300</div>
		<div class="m-1"><div class="w-16 h-16 rounded bg-orange-400"></div>400</div>
		<div class="m-1"><div class="w-16 h-16 rounded bg-orange-500"></div>500</div>
		<div class="m-1"><div class="w-16 h-16 rounded bg-orange-600"></div>600</div>
		<div class="m-1"><div class="w-16 h-16 rounded bg-orange-700"></div>700</div>
		<div class="m-1"><div class="w-16 h-16 rounded bg-orange-800"></div>800</div>
		<div class="m-1"><div class="w-16 h-16 rounded bg-orange-900"></div>900</div>
	</div>
</div>

<div class="mt-8">
	<div class="h4 mb-0">Yellow</div>
	<div class="flex flex-wrap">
		<div class="m-1"><div class="w-16 h-16 rounded bg-yellow-100"></div>100</div>
		<div class="m-1"><div class="w-16 h-16 rounded bg-yellow-200"></div>200</div>
		<div class="m-1"><div class="w-16 h-16 rounded bg-yellow-300"></div>300</div>
		<div class="m-1"><div class="w-16 h-16 rounded bg-yellow-400"></div>400</div>
		<div class="m-1"><div class="w-16 h-16 rounded bg-yellow-500"></div>500</div>
		<div class="m-1"><div class="w-16 h-16 rounded bg-yellow-600"></div>600</div>
		<div class="m-1"><div class="w-16 h-16 rounded bg-yellow-700"></div>700</div>
		<div class="m-1"><div class="w-16 h-16 rounded bg-yellow-800"></div>800</div>
		<div class="m-1"><div class="w-16 h-16 rounded bg-yellow-900"></div>900</div>
	</div>
</div>

<div class="mt-8">
	<div class="h4 mb-0">Green</div>
	<div class="flex flex-wrap">
		<div class="m-1"><div class="w-16 h-16 rounded bg-green-100"></div>100</div>
		<div class="m-1"><div class="w-16 h-16 rounded bg-green-200"></div>200</div>
		<div class="m-1"><div class="w-16 h-16 rounded bg-green-300"></div>300</div>
		<div class="m-1"><div class="w-16 h-16 rounded bg-green-400"></div>400</div>
		<div class="m-1"><div class="w-16 h-16 rounded bg-green-500"></div>500</div>
		<div class="m-1"><div class="w-16 h-16 rounded bg-green-600"></div>600</div>
		<div class="m-1"><div class="w-16 h-16 rounded bg-green-700"></div>700</div>
		<div class="m-1"><div class="w-16 h-16 rounded bg-green-800"></div>800</div>
		<div class="m-1"><div class="w-16 h-16 rounded bg-green-900"></div>900</div>
	</div>
</div>

<div class="mt-8">
	<div class="h4 mb-0">Teal</div>
	<div class="flex flex-wrap">
		<div class="m-1"><div class="w-16 h-16 rounded bg-teal-100"></div>100</div>
		<div class="m-1"><div class="w-16 h-16 rounded bg-teal-200"></div>200</div>
		<div class="m-1"><div class="w-16 h-16 rounded bg-teal-300"></div>300</div>
		<div class="m-1"><div class="w-16 h-16 rounded bg-teal-400"></div>400</div>
		<div class="m-1"><div class="w-16 h-16 rounded bg-teal-500"></div>500</div>
		<div class="m-1"><div class="w-16 h-16 rounded bg-teal-600"></div>600</div>
		<div class="m-1"><div class="w-16 h-16 rounded bg-teal-700"></div>700</div>
		<div class="m-1"><div class="w-16 h-16 rounded bg-teal-800"></div>800</div>
		<div class="m-1"><div class="w-16 h-16 rounded bg-teal-900"></div>900</div>
	</div>
</div>

<div class="mt-8">
	<div class="h4 mb-0">Blue</div>
	<div class="flex flex-wrap">
		<div class="m-1"><div class="w-16 h-16 rounded bg-blue-100"></div>100</div>
		<div class="m-1"><div class="w-16 h-16 rounded bg-blue-200"></div>200</div>
		<div class="m-1"><div class="w-16 h-16 rounded bg-blue-300"></div>300</div>
		<div class="m-1"><div class="w-16 h-16 rounded bg-blue-400"></div>400</div>
		<div class="m-1"><div class="w-16 h-16 rounded bg-blue-500"></div>500</div>
		<div class="m-1"><div class="w-16 h-16 rounded bg-blue-600"></div>600</div>
		<div class="m-1"><div class="w-16 h-16 rounded bg-blue-700"></div>700</div>
		<div class="m-1"><div class="w-16 h-16 rounded bg-blue-800"></div>800</div>
		<div class="m-1"><div class="w-16 h-16 rounded bg-blue-900"></div>900</div>
	</div>
</div>

<div class="mt-8">
	<div class="h4 mb-0">Indigo</div>
	<div class="flex flex-wrap">
		<div class="m-1"><div class="w-16 h-16 rounded bg-indigo-100"></div>100</div>
		<div class="m-1"><div class="w-16 h-16 rounded bg-indigo-200"></div>200</div>
		<div class="m-1"><div class="w-16 h-16 rounded bg-indigo-300"></div>300</div>
		<div class="m-1"><div class="w-16 h-16 rounded bg-indigo-400"></div>400</div>
		<div class="m-1"><div class="w-16 h-16 rounded bg-indigo-500"></div>500</div>
		<div class="m-1"><div class="w-16 h-16 rounded bg-indigo-600"></div>600</div>
		<div class="m-1"><div class="w-16 h-16 rounded bg-indigo-700"></div>700</div>
		<div class="m-1"><div class="w-16 h-16 rounded bg-indigo-800"></div>800</div>
		<div class="m-1"><div class="w-16 h-16 rounded bg-indigo-900"></div>900</div>
	</div>
</div>

<div class="mt-8">
	<div class="h4 mb-0">Purple</div>
	<div class="flex flex-wrap">
		<div class="m-1"><div class="w-16 h-16 rounded bg-purple-100"></div>100</div>
		<div class="m-1"><div class="w-16 h-16 rounded bg-purple-200"></div>200</div>
		<div class="m-1"><div class="w-16 h-16 rounded bg-purple-300"></div>300</div>
		<div class="m-1"><div class="w-16 h-16 rounded bg-purple-400"></div>400</div>
		<div class="m-1"><div class="w-16 h-16 rounded bg-purple-500"></div>500</div>
		<div class="m-1"><div class="w-16 h-16 rounded bg-purple-600"></div>600</div>
		<div class="m-1"><div class="w-16 h-16 rounded bg-purple-700"></div>700</div>
		<div class="m-1"><div class="w-16 h-16 rounded bg-purple-800"></div>800</div>
		<div class="m-1"><div class="w-16 h-16 rounded bg-purple-900"></div>900</div>
	</div>
</div>

<div class="mt-8">
	<div class="h4 mb-0">Pink</div>
	<div class="flex flex-wrap">
		<div class="m-1"><div class="w-16 h-16 rounded bg-pink-100"></div>100</div>
		<div class="m-1"><div class="w-16 h-16 rounded bg-pink-200"></div>200</div>
		<div class="m-1"><div class="w-16 h-16 rounded bg-pink-300"></div>300</div>
		<div class="m-1"><div class="w-16 h-16 rounded bg-pink-400"></div>400</div>
		<div class="m-1"><div class="w-16 h-16 rounded bg-pink-500"></div>500</div>
		<div class="m-1"><div class="w-16 h-16 rounded bg-pink-600"></div>600</div>
		<div class="m-1"><div class="w-16 h-16 rounded bg-pink-700"></div>700</div>
		<div class="m-1"><div class="w-16 h-16 rounded bg-pink-800"></div>800</div>
		<div class="m-1"><div class="w-16 h-16 rounded bg-pink-900"></div>900</div>
	</div>
</div>
`
)

// Heading
stories.add('Heading', () =>
    componentOutput(
        heading({
            type: select('Type', ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'], 'h1'),
            text: text('Text', 'Heading Text'),
        })
    )
)

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
