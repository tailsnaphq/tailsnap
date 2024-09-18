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
            '@apply p-3 rounded-lg w-fit border-[2.5px] border-[#111005] bg-[#111005] text-[#FFFFFF]': {},
        },

        // btn-basic-outline
        '.btn-basic-outline': {
            '@apply p-3 rounded-lg w-fit border-[2.5px] border-[#111005]': {},
        },

        // btn-arrow
        // '.btn-arrow': {
        //     '@apply p-2 rounded-lg bg-[#111005] text-[#FFFFFF] flex items-center gap-2 w-fit': {}, // Base styles
        //     'position': 'relative', // Necessary for ::before positioning
        //     '&::before': {
        //         'content': '"\\2192"', // Unicode for an arrow (can replace this with a custom SVG or image)
        //         'display': 'inline-block',
        //         'background-color': '#A0E60D', // Icon background
        //         'width': '24px',
        //         'height': '24px',
        //         'border-radius': '4px',
        //         'text-align': 'center',
        //         'line-height': '24px',
        //         'color': '#000',
        //         'font-size': '16px',
        //     },
        // },

        // btn-arrow (SOL - NO DEFAULTS)
        // '.btn-arrow': {
        //     '@apply flex items-center gap-2 p-2 rounded-lg w-fit': {}, // Base styles
        //     'background-color': 'transparent', // Default to transparent so users can set bg color
        //     'color': 'inherit', // Inherit color from user's utility classes
        //     'position': 'relative', // Necessary for ::before positioning
        //     '&::before': {
        //         'content': '""',
        //         'display': 'inline-block',
        //         '@apply rounded bg-current': {}, // Default to use text color
        //         'width': '24px',
        //         'height': '24px',
        //         'mask': 'url("/path-to-your-icon.svg") no-repeat center', // Replace with your SVG
        //         'mask-size': 'contain',
        //         'margin-right': '8px', // To add some space between the icon and the text
        //     },
        // },

        // btn-arrow (SOL - DEFAULT COLORS - BEFORE: NAMING)
        '.btn-arrow': {
            '@apply flex items-center gap-2 relative p-2 rounded-lg w-fit bg-[#111005] text-[#FFFFFF]': {}, // Base styles
            '&::before': {
                '@apply rounded bg-current inline-block w-6 h-6': {}, // Default to use text color or inherited color
                'content': '""',
                'mask': 'url("data:image/svg+xml,<svg viewBox=\'0 0 24 24\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\' id=\'Arrow-Up-Right-Square--Streamline-Iconoir\'><desc>Arrow Up Right Square Streamline Icon: https://streamlinehq.com</desc><path fill-rule=\'evenodd\' clip-rule=\'evenodd\' d=\'M1.8683 0.24C0.969 0.24 0.24 0.969 0.24 1.8683V22.1317C0.24 23.031 0.969 23.76 1.8683 23.76H22.1317C23.031 23.76 23.76 23.031 23.76 22.1317V1.8683C23.76 0.969 23.031 0.24 22.1317 0.24H1.8683ZM9.4416 7.6837H15.4117C15.6433 7.6837 15.8748 7.772 16.0513 7.9486C16.1382 8.0353 16.2036 8.1353 16.2477 8.242C16.292 8.3487 16.3163 8.4656 16.3163 8.5883V14.5585C16.3163 15.0581 15.9113 15.4631 15.4117 15.4631S14.5071 15.0581 14.5071 14.5585V10.7721L9.2283 16.051C8.8751 16.4043 8.3023 16.4043 7.949 16.051C7.5957 15.6977 7.5957 15.1249 7.949 14.7716L13.2279 9.4929H9.4416C8.942 9.4929 8.5369 9.0879 8.5369 8.5883C8.5369 8.0886 8.9419 7.6836 9.4416 7.6836Z\' fill=\'currentColor\' stroke-width=\'1\'></path></svg>") no-repeat center',
                'mask-size': 'contain',
            },
        },

        // INPUTS ---------------------------------------------------------------------------------------------------------

        // input-neo
        '.input-neo': {
            '@apply flex w-fit border-[2.5px] border-[#111005] p-3 outline-none drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]': {}, // Container styles
        },

        // input-neo-submit
        '.input-neo-submit': {
            '@apply flex justify-between w-fit border-[2.5px] border-[#111005] relative drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]': {}, // Container styles
        },
        '.input-neo-submit input': {
            '@apply flex-grow outline-none': {}, // Input styles
        },
        '.input-neo-submit button': {
            '@apply flex items-center justify-center border-l-[2.5px] border-[#111005] cursor-pointer': {}, // Button styles
        },
        '.input-neo-submit button::before': {
            '@apply inline-block bg-current': {}, // Applying utility classes for ::before pseudo-element
            'content': '""',
            'mask': 'url("data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'-1 -1 24 24\' id=\'Left-2-Short-Arrow--Streamline-Guidance---Free\'><desc>Left 2 Short Arrow Streamline Icon: https://streamlinehq.com</desc><path stroke=\'currentColor\' d=\'M11 1.9447999999999999C11 2.902075 11.948658333333332 4.33455 12.907675 5.537583333333333C14.142608333333333 7.086474999999999 15.616425 8.439566666666666 17.307583333333334 9.47265C18.574508333333334 10.246224999999999 20.11295 10.988816666666667 21.3488 10.988816666666667M11 20.0552C11 19.097925 11.948658333333332 17.66545 12.907675 16.462416666666666C14.142608333333333 14.913616666666666 15.616425 13.560433333333334 17.307583333333334 12.52735C18.574508333333334 11.753775 20.11295 11.011183333333333 21.3488 11.011183333333333M21.3488 11H0.6512\' stroke-width=\'2\'></path></svg>") no-repeat center',
            'mask-size': 'contain',
        },
    };

    addComponents(newComponents);
});