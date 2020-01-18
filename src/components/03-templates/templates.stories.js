import { storiesOf } from '@storybook/html'

// Init stories
const stories = storiesOf('Templates/Example', module)

// -----

// Home
stories.add(
    'Home',
    () => `
		<div>Build a home template with components</div>
	`
)
