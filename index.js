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
            '@apply flex items-center gap-2 p-2 rounded-lg w-fit': {}, // Base styles
            'background-color': '#111005', // Default button background color
            'color': '#FFFFFF', // Default text color
            'position': 'relative', // Necessary for ::before positioning
            '&::before': {
                'content': '""',
                'display': 'inline-block',
                '@apply rounded bg-current': {}, // Default to use text color or inherited color
                'width': '24px',
                'height': '24px',
                'mask': 'url("data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'24\' height=\'24\' viewBox=\'0 0 24 24\' fill=\'currentColor\' class=\'icon icon-tabler icons-tabler-filled icon-tabler-square-arrow-right\'><path stroke=\'none\' d=\'M0 0h24v24H0z\' fill=\'none\'/><path d=\'M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm-6.387 5.21a1 1 0 0 0 -1.32 .083l-.083 .094a1 1 0 0 0 .083 1.32l2.292 2.293h-5.585l-.117 .007a1 1 0 0 0 .117 1.993h5.585l-2.292 2.293l-.083 .094a1 1 0 0 0 1.497 1.32l4 -4l.073 -.082l.074 -.104l.052 -.098l.044 -.11l.03 -.112l.017 -.126l.003 -.075l-.007 -.118l-.029 -.148l-.035 -.105l-.054 -.113l-.071 -.111a1.008 1.008 0 0 0 -.097 -.112l-4 -4z\' /></svg>") no-repeat center',
                'mask-size': 'contain',
                'background-color': '#FFFFFF', // Default icon color
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
            'mask': 'url("data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\' stroke-width=\'2\'><path d=\'M12 2.1216C12 3.1659 13.0349 4.7286 14.0811 6.041C15.4283 7.7307 17.0361 9.2068 18.881 10.3338C20.2631 11.1777 21.9414 11.9878 23.2896 11.9878M12 21.8784C12 20.8341 13.0349 19.2714 14.0811 17.959C15.4283 16.2694 17.0361 14.7932 18.881 13.6662C20.2631 12.8223 21.9414 12.0122 23.2896 12.0122M23.2896 12H0.7104\'/></svg>") no-repeat center',
            'mask-size': 'contain',
        },
    };

    addComponents(newComponents);
});