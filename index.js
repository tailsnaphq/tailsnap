const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addComponents }) {
    const newComponents = {
        // Buttons
        '.btn': {
            '@apply p-2 bg-black text-white rounded-md': {},
        },
    };

    addComponents(newComponents);
});