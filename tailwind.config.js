/** @type {import('tailwindcss').Config} */
export default {
   content: [],
   theme: {
      extend: {
         colors: {
            primary: {
               "Tint-1": "#FDF1F1",
               "Tint-2": "#FCE8E8",
               "Tint-3": "#F9D2D2",
               "Tint-4": "#F6BBBB",
               "Tint-5": "#FCA197",
               "Tint-6": "#F66262",
               "Tint-7": "#E43434",
               default: "#CB1B1B",
               "Shade-1": "#B41818",
               "Shade-2": "#9E1515",
               "Shade-3": "#871212",
               "Shade-4": "#700F0F",
               "Shade-5": "#5A0C0C",
               "Shade-6": "#430909",
            },
            neutral: {
               "Gray-1": "#FAFAFA",
               "Gray-2": "#F9F9F9",
               "Gray-3": "#EDEDED",
               "Gray-4": "#E1E1E1",
               "Gray-5": "#D9D9D9",
               "Gray-6": "#CBCBCB",
               "Gray-7": "#ADADAD",
               "Gray-8": "#909090",
               "Gray-9": "#717171",
               "Gray-10": "#505050",
               "Gray-11": "#353535",
               "Gray-12": "#212121",
               "Gray-13": "#121212",
            },
            error: {
               "Light-2": "#FFF2F2",
               "Light-1": "#ED2E2E",
               default: "#C30000",
            },
            success: {
               "Light-2": "#F3FDFA",
               "Light-1": "#00BA88",
               default: "#00966D",
            },
            warning: {
               "Light-2": "#FFF8E1",
               "Light-1": "#F4B740",
               default: "#A9791C",
            },
            black: "#0C0C0C",
         },
         keyframes: {
            "loading-rotate": {
               '0%': {
                  transform: 'rotate(0)'
               },
               '100%': {
                  transform: 'rotate(-360deg)'
               }
            },
         },
      },
      container: {
         center: true,
         screens: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1224px",
            "2xl": "1536px",
         },
      },
   },
   plugins: [],
};
