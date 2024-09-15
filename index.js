const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addUtilities }) {
    const newUtilities = {
        '.text-shadow': {
            'text-shadow': '2px 2px 2px rgba(0, 0, 0, 0.4)',
        },
        '.text-shadow-md': {
            'text-shadow': '4px 4px 6px rgba(0, 0, 0, 0.6)',
        },
        '.text-shadow-lg': {
            'text-shadow': '6px 6px 8px rgba(0, 0, 0, 0.8)',
        },
    };

    addUtilities(newUtilities);
});