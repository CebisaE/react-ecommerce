import { createTheme } from '@mui/material/styles'

export const shades= {
    primary: {
        100: "#000000",
        200: "#000000",
        300: "#000000",
        400: "#000000",
        500: "#cccccc",
        600: "#999999",
        700: "#666666",
        800: "#333333",
        900: "#000000"
    },
    
    secondary: {
        100: "#d6001c",
        200: "#ab0016",
        300: "#800011",
        400: "#56000b",
        500: "#2b0006",
        600: "#f7ccd2",
        700: "#ef99a4",
        800: "#e66677",
        900: "#de3349"
    },
    
    neutral: {
        100: "#cfcdcd",
        200: "#a6a4a4",
        300: "#7c7b7b",
        400: "#535252",
        500: "#292929",
        600: "#f5f5f5",
        700: "#ecebeb",
        800: "#e2e1e1",
        500: "#d9d7d7"
    },
};

export const theme = createTheme({
    palette: {
        primary: {
            main:shades.primary[500]
        },
        secondary: {
            main:shades.secondary[500]
        },
        neutral: {
            dark:shades.neutral[700],
            main:shades.neutral[500],
            light:shades.neutral[100]
        }
    },
    typography:{
        fontFamily:["Fauna One","sans-serif"].join(","),
        fontSize:11,
        h1: {
            fontFamily:["Cinzel","sans-serif"].join(","),
            fontSize:48,
        },
        h2: {
            fontFamily:["Cinzel","sans-serif"].join(","),
            fontSize:36,
        },
        h3: {
            fontFamily:["Cinzel","sans-serif"].join(","),
            fontSize:20,
        },
        h4: {
            fontFamily:["Cinzel","sans-serif"].join(","),
            fontSize:14,
        },
    }
})
