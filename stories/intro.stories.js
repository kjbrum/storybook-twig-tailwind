import { storiesOf } from '@storybook/html'

// Styles
import '@scss/style.scss'

// Init stories
const stories = storiesOf('Intro', module)

// -----

// Basic
stories.add('Overview', () => {
    return `
        <h1 class="h1">Storybook + Twig + Tailwind</h1>
        <h2 class="h4">A collection of UI components.</h2>
    `
})
