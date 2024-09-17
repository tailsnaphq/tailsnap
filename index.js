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

        // Text Input with Button on the Right
        '.input-with-button': {
            '@apply flex items-center justify-between w-fit border-[2.5px] border-[#111005]': {}, // Container styles
            'position': 'relative',
            'height': '3rem',
        },
        '.input-with-button input': {
            '@apply flex-grow h-full px-4': {}, // Input styles
            'border': 'none',
            'outline': 'none',
            // 'background': 'transparent',
        },
        '.input-with-button button': {
            '@apply flex items-center justify-center h-full px-4': {}, // Button styles
            'border-left': '2.5px solid black', // Adding border to the left side of the button
            'min-width': '3rem',
            'cursor': 'pointer',
            'padding': '0', // Remove padding to make the icon fill the button
        },
        '.input-with-button button::before': {
            'content': '""',
            'display': 'inline-block',
            'background-color': 'currentColor', // Use current color for the icon
            'width': '1.5rem',
            'height': '1.5rem',
            'mask': 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\' class=\'feather feather-arrow-right\'%3E%3Cline x1=\'5\' y1=\'12\' x2=\'19\' y2=\'12\'%3E%3C/line%3E%3Cpolyline points=\'12 5 19 12 12 19\'%3E%3C/polyline%3E%3C/svg%3E") no-repeat center', // SVG Arrow Icon
            'mask-size': 'contain',
        },
    };

    addComponents(newComponents);
});