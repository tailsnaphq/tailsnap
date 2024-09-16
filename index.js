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
    };

    addComponents(newComponents);
});