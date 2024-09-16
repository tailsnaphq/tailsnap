const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addComponents }) {
    const newComponents = {

        // LAYOUTS ---------------------------------------------------------------------------------------------------------

        // flex-center-all
        '.flex-center-all': {
            '@apply flex items-center justify-center': {},
        },

        // BUTTONS ---------------------------------------------------------------------------------------------------------

        // btn-basic
        '.btn-basic': {
            '@apply px-2.5 py-1.5 rounded-lg w-fit border-2 border-[#111005] bg-[#111005] text-[#FFFFFF]': {},
        },

        // btn-basic-outline
        '.btn-basic-outline': {
            '@apply px-2.5 py-1.5 rounded-lg w-fit border-2 border-[#111005]': {},
        },

        // btn-arrow
        '.btn-arrow': {
            '@apply p-2 rounded-lg bg-[#111005] text-[#FFFFFF] flex items-center gap-2 w-fit': {}, // Base styles
            'position': 'relative', // Necessary for ::before positioning
            '&::before': {
                'content': '"\\2192"', // Unicode for an arrow (can replace this with a custom SVG or image)
                'display': 'inline-block',
                'background-color': '#A0E60D', // Icon background
                'width': '24px',
                'height': '24px',
                'border-radius': '4px',
                'text-align': 'center',
                'line-height': '24px',
                'color': '#000',
                'font-size': '16px',
            },
        },
    };

    addComponents(newComponents);
});