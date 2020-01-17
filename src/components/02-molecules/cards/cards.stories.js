import { storiesOf } from '@storybook/html'
import { text } from '@storybook/addon-knobs'

// Twig components
import basic from '@molecules/cards/basic.twig'
import employee from '@molecules/cards/employee.twig'

// Utilities
import { componentOutput } from '@utils'

// Create random data
// https://github.com/marak/Faker.js/#api-methods
import Faker from 'faker'

// Init stories
const stories = storiesOf('Molecules/Cards', module)

// -----

// Basic
stories.add('Basic', () =>
    componentOutput(
        basic({
            link: text('Link', Faker.internet.url()),
            image: {
                url: text(
                    'Image URL',
                    'https://source.unsplash.com/1Q9whdktZNU/500x500'
                ),
                alt: 'Alt Text',
            },
            title: text('Title', 'My Basic Card'),
            description: text('Description', Faker.lorem.paragraph()),
        }),
        'max-w-1/3'
    )
)

// Employee
stories.add('Employee', () =>
    componentOutput(
        employee({
            position: text('Position', Faker.name.jobTitle()),
            name: text('Name', Faker.name.findName()),
            description: text('Description', Faker.lorem.paragraph()),
            email: text('Email', Faker.internet.email()),
        }),
        'max-w-1/3'
    )
)
