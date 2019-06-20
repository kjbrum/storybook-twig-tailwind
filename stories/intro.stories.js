import { storiesOf } from '@storybook/html'

// Styles
import "@scss/style.scss"

// Init stories
const stories = storiesOf('Intro', module);


// -----


// Basic
stories.add('Overview', () => {
    return `
        <h1 class="h1">Storybook + Twig + Tailwind</h1>
        <p class="h4">A collection of UI components.</p>

        <p>
            There should be a message below here...
        </p>

        <p class="no-js">
            <span class="hidden no-js:block">Looks like JavaScript isn't enabled...</span>
        </p>
    `
})
