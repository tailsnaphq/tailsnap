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
            '@apply p-2.5 rounded-lg w-fit border-[2.5px] border-[#111005] bg-[#111005] text-[#FFFFFF]': {},
        },

        // btn-basic-outline
        '.btn-basic-outline': {
            '@apply p-2.5 rounded-lg w-fit border-[2.5px] border-[#111005]': {},
        },

        // btn-neo
        '.btn-neo': {
            '@apply p-2.5 w-fit border-[2.5px] border-[#111005] shadow-[4px_4px_0_0_rgba(17,16,5,1)]': {},
        },

        // btn-glow
        '.btn-glow': {
            '@apply text-white bg-[#111005] border-[2.5px] border-[#111005] p-2.5 rounded-lg transition-transform ease-in-out hover:scale-105 w-fit shadow-[0_2px_15px_rgba(255,255,0,0.5),_0_4px_30px_rgba(255,0,255,0.5)]': {},
        },

        // btn-arrow
        // '.btn-arrow': {
        //     '@apply flex items-center gap-2 relative p-2.5 border-[2.5px] border-[#111005] rounded-lg w-fit bg-[#111005] text-[#FFFFFF]': {},
        //     '&::before': {
        //         '@apply rounded bg-current inline-block w-6 h-6': {},
        //         'content': '""',
        //         'mask': 'url("data:image/svg+xml,<svg viewBox=\'0 0 24 24\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\' id=\'Arrow-Up-Right-Square--Streamline-Iconoir\'><desc>Arrow Up Right Square Streamline Icon: https://streamlinehq.com</desc><path fill-rule=\'evenodd\' clip-rule=\'evenodd\' d=\'M1.8683 0.24C0.969 0.24 0.24 0.969 0.24 1.8683V22.1317C0.24 23.031 0.969 23.76 1.8683 23.76H22.1317C23.031 23.76 23.76 23.031 23.76 22.1317V1.8683C23.76 0.969 23.031 0.24 22.1317 0.24H1.8683ZM9.4416 7.6837H15.4117C15.6433 7.6837 15.8748 7.772 16.0513 7.9486C16.1382 8.0353 16.2036 8.1353 16.2477 8.242C16.292 8.3487 16.3163 8.4656 16.3163 8.5883V14.5585C16.3163 15.0581 15.9113 15.4631 15.4117 15.4631S14.5071 15.0581 14.5071 14.5585V10.7721L9.2283 16.051C8.8751 16.4043 8.3023 16.4043 7.949 16.051C7.5957 15.6977 7.5957 15.1249 7.949 14.7716L13.2279 9.4929H9.4416C8.942 9.4929 8.5369 9.0879 8.5369 8.5883C8.5369 8.0886 8.9419 7.6836 9.4416 7.6836Z\' fill=\'currentColor\' stroke-width=\'1\'></path></svg>") no-repeat center',
        //         'mask-size': 'contain',
        //     },
        // },

        // INPUTS ---------------------------------------------------------------------------------------------------------

        // input-neo
        '.input-neo': {
            '@apply flex w-fit border-[2.5px] border-[#111005] p-2.5 outline-none shadow-[4px_4px_0_0_rgba(17,16,5,1)]': {},
        },

        // input-neo-submit
        '.input-neo-submit': {
            '@apply flex justify-between w-fit border-[2.5px] border-[#111005] relative shadow-[4px_4px_0_0_rgba(17,16,5,1)]': {},
        },
        '.input-neo-submit input': {
            '@apply flex-grow outline-none': {},
        },
        '.input-neo-submit button': {
            '@apply flex items-center justify-center border-l-[2.5px] border-[#111005] cursor-pointer': {},
        },
        '.input-neo-submit button::before': {
            '@apply inline-block bg-current': {},
            'content': '""',
            'mask': 'url("data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'-1 -1 24 24\' id=\'Left-2-Short-Arrow--Streamline-Guidance---Free\'><desc>Left 2 Short Arrow Streamline Icon: https://streamlinehq.com</desc><path stroke=\'currentColor\' d=\'M11 1.9447999999999999C11 2.902075 11.948658333333332 4.33455 12.907675 5.537583333333333C14.142608333333333 7.086474999999999 15.616425 8.439566666666666 17.307583333333334 9.47265C18.574508333333334 10.246224999999999 20.11295 10.988816666666667 21.3488 10.988816666666667M11 20.0552C11 19.097925 11.948658333333332 17.66545 12.907675 16.462416666666666C14.142608333333333 14.913616666666666 15.616425 13.560433333333334 17.307583333333334 12.52735C18.574508333333334 11.753775 20.11295 11.011183333333333 21.3488 11.011183333333333M21.3488 11H0.6512\' stroke-width=\'2\'></path></svg>") no-repeat center',
            'mask-size': 'contain',
        },
    };

    addComponents(newComponents);
});