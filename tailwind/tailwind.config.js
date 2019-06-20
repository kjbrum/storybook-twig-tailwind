const _ = require('lodash')

const breakpoints = {
    'xs': 320,
    'sm': 480,
    'md': 768,
    'lg': 1024,
    'xl': 1200,
}

module.exports = {
    prefix: '',
    important: false,
    separator: ':',
    theme: {
        colors: {
            transparent: 'transparent',

            black: '#222222',
            white: '#ffffff',

            gray: {
                100: '#f7fafc',
                200: '#edf2f7',
                300: '#e2e8f0',
                400: '#cbd5e0',
                500: '#a0aec0',
                600: '#718096',
                700: '#4a5568',
                800: '#2d3748',
                900: '#1a202c',
            },
            red: {
                100: '#fff5f5',
                200: '#fed7d7',
                300: '#feb2b2',
                400: '#fc8181',
                500: '#f56565',
                600: '#e53e3e',
                700: '#c53030',
                800: '#9b2c2c',
                900: '#742a2a',
            },
        },
        spacing: {
            px: '1px',
            '0': '0',
            '1': '0.25rem',
            '2': '0.5rem',
            '3': '0.75rem',
            '4': '1rem',
            '5': '1.25rem',
            '6': '1.5rem',
            '8': '2rem',
            '10': '2.5rem',
            '12': '3rem',
            '16': '4rem',
            '20': '5rem',
            '24': '6rem',
            '32': '8rem',
            '40': '10rem',
            '48': '12rem',
            '56': '14rem',
            '64': '16rem',
        },
        screens: {
            'xs': `${breakpoints.xs}px`,
            'xs-only': {
                'min': `${breakpoints.xs}px`,
                'max': `${breakpoints.sm - 1}px`
            },
            'xs-max': {
                'max': `${breakpoints.sm - 1}px`
            },
            'sm': `${breakpoints.sm}px`,
            'sm-only': {
                'min': `${breakpoints.sm}px`,
                'max': `${breakpoints.md - 1}px`
            },
            'sm-max': {
                'max': `${breakpoints.md - 1}px`
            },
            'md': `${breakpoints.md}px`,
            'md-only': {
                'min': `${breakpoints.md}px`,
                'max': `${breakpoints.lg - 1}px`
            },
            'md-max': {
                'max': `${breakpoints.lg - 1}px`
            },
            'lg': `${breakpoints.lg}px`,
            'lg-only': {
                'min': `${breakpoints.lg}px`,
                'max': `${breakpoints.xl - 1}px`
            },
            'lg-max': {
                'max': `${breakpoints.xl - 1}px`
            },
            'xl': `${breakpoints.xl}px`,
        },
        fontFamily: {
            sans: [
                '"Helvetica Neue"',
                'Helvetica',
                'Arial',
                'sans-serif',
            ],
            serif: [
                'Georgia',
                'Cambria',
                '"Times New Roman"',
                'Times',
                'serif'
            ],
            mono: [
                'Menlo',
                'Monaco',
                'Consolas',
                '"Liberation Mono"',
                '"Courier New"',
                'monospace',
            ],
        },
        fontSize: {
            xxs: '0.6875rem',
            xs: '0.75rem',
            sm: '0.875rem',
            base: '1rem',
            lg: '1.125rem',
            xl: '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3rem',
            '6xl': '4rem',
        },
        fontWeight: {
            hairline: 100,
            thin: 200,
            light: 300,
            normal: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
            extrabold: 800,
            black: 900,
        },
        lineHeight: theme => ({
            ...theme('spacing'),
            none: 1,
            tight: 1.25,
            snug: 1.375,
            normal: 1.5,
            relaxed: 1.625,
            loose: 2,
        }),
        letterSpacing: {
            tightest: '-2px',
            tighter: '-1px',
            tight: '-0.5px',
            normal: '0',
            wide: '0.5px',
            wider: '1.5px',
            widest: '2px',
        },
        textColor: theme => theme('colors'),
        backgroundColor: theme => theme('colors'),
        backgroundPosition: {
            bottom: 'bottom',
            center: 'center',
            left: 'left',
            'left-bottom': 'left bottom',
            'left-top': 'left top',
            right: 'right',
            'right-bottom': 'right bottom',
            'right-top': 'right top',
            top: 'top',
        },
        backgroundSize: {
            auto: 'auto',
            cover: 'cover',
            contain: 'contain',
        },
        borderWidth: {
            default: '1px',
            '0': '0',
            '2': '2px',
            '4': '4px',
            '8': '8px',
        },
        borderColor: theme => ({
            ...theme('colors'),
            default: theme('colors.gray.300', 'currentColor'),
        }),
        borderRadius: {
            none: '0',
            default: '3px',
            full: '9999px',
            100: '100%',
        },
        cursor: {
            auto: 'auto',
            default: 'default',
            pointer: 'pointer',
            wait: 'wait',
            move: 'move',
            'not-allowed': 'not-allowed',
        },
        width: theme => ({
            auto: 'auto',
            ...theme('spacing'),
            '1/2': '50%',
            '1/3': '33.33333%',
            '2/3': '66.66667%',
            '1/4': '25%',
            '3/4': '75%',
            '1/5': '20%',
            '2/5': '40%',
            '3/5': '60%',
            '4/5': '80%',
            '1/6': '16.66667%',
            '5/6': '83.33333%',
            full: '100%',
            screen: '100vw',
        }),
        height: theme => ({
            auto: 'auto',
            ...theme('spacing'),
            full: '100%',
            screen: '100vh',
        }),
        minWidth: theme => ({
            ...theme('spacing'),
            '1/2': `${breakpoints.xl * (1/2)}px`,
            '1/3': `${breakpoints.xl * (1/3)}px`,
            '2/3': `${breakpoints.xl * (2/3)}px`,
            '1/4': `${breakpoints.xl * (1/4)}px`,
            '3/4': `${breakpoints.xl * (3/4)}px`,
            '1/5': `${breakpoints.xl * (1/5)}px`,
            '2/5': `${breakpoints.xl * (2/5)}px`,
            '3/5': `${breakpoints.xl * (3/5)}px`,
            '4/5': `${breakpoints.xl * (4/5)}px`,
            '1/6': `${breakpoints.xl * (1/6)}px`,
            '5/6': `${breakpoints.xl * (5/6)}px`,
            full: '100%',
            screen: '100vw',
        }),
        minHeight: {
            '0': '0',
            full: '100%',
            screen: '100vh',
        },
        maxWidth: theme => ({
            ...theme('spacing'),
            '1/2': `${breakpoints.xl * (1/2)}px`,
            '1/3': `${breakpoints.xl * (1/3)}px`,
            '2/3': `${breakpoints.xl * (2/3)}px`,
            '1/4': `${breakpoints.xl * (1/4)}px`,
            '3/4': `${breakpoints.xl * (3/4)}px`,
            '1/5': `${breakpoints.xl * (1/5)}px`,
            '2/5': `${breakpoints.xl * (2/5)}px`,
            '3/5': `${breakpoints.xl * (3/5)}px`,
            '4/5': `${breakpoints.xl * (4/5)}px`,
            '1/6': `${breakpoints.xl * (1/6)}px`,
            '5/6': `${breakpoints.xl * (5/6)}px`,
            full: '100%',
            screen: '100vw',
        }),
        maxHeight: {
            full: '100%',
            screen: '100vh',
        },
        padding: theme => theme('spacing'),
        margin: theme => theme('spacing'),
        negativeMargin: theme => theme('spacing'),
        objectPosition: {
            bottom: 'bottom',
            center: 'center',
            left: 'left',
            'left-bottom': 'left bottom',
            'left-top': 'left top',
            right: 'right',
            'right-bottom': 'right bottom',
            'right-top': 'right top',
            top: 'top',
        },
        boxShadow: {
            default: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
            md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
            outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
            none: 'none',
        },
        zIndex: {
            auto: 'auto',
            '0': 0,
            '10': 10,
            '20': 20,
            '30': 30,
            '40': 40,
            '50': 50,
        },
        opacity: {
            '0': '0',
            '25': '0.25',
            '50': '0.5',
            '75': '0.75',
            '100': '1',
        },
        fill: {
            current: 'currentColor',
        },
        stroke: {
            current: 'currentColor',
        },
        flex: {
            '1': '1 1 0%',
            auto: '1 1 auto',
            initial: '0 1 auto',
            none: 'none',
        },
        flexGrow: {
            '0': 0,
            default: 1,
        },
        flexShrink: {
            '0': 0,
            default: 1,
        },
        listStyleType: {
            none: 'none',
            disc: 'disc',
            decimal: 'decimal',
        },
        inset: {
            '0': 0,
            auto: 'auto',
        },
        container: {},
        flexOrder: {
            range: _.range(-6, 6),
        },
        rotate: [0, 90, 180, 270],
        extend: {
            screens: {
                'print': {
                    'raw': 'print'
                },
                'short': {
                    'raw': '(max-height: 650px)'
                }
            }
        }
    },
    variants: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus', 'active'],
    corePlugins: {
        container: false,
    },
    plugins: [
        require('./plugins/a11y'),
        // require('./plugins/blend-mode'),
        require('./plugins/container'),
        function({ addVariant, e }) {
            addVariant('no-js', ({ modifySelectors, separator }) => {
                modifySelectors(({ className }) => {
                    return `.no-js .${e(`no-js${separator}${className}`)}`
                })
            })
        },
        // require('./plugins/order'),
        // require('./plugins/rotate'),
    ],
}
