const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addUtilities }) {
    const newUtilities = {
        // Buttons ---------------------------------
        ':where(.btn)': {
            'padding': '0.5rem',
            'background-color': '#000000',
            'color': '#ffffff',
            'width': 'fit-content',
        },
    };

    addUtilities(newUtilities);
});