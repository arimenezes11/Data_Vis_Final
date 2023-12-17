import {createTheme, responsiveFontSizes, ThemeOptions} from "@mui/material/styles";


const themeOpts: ThemeOptions = {
    palette: {
        primary: {
            main: '#007155',
            light: '#66AC47',
            dark: '#01533F',
        },
        secondary: {
            main: '#FFD416',
            dark: '#D99B13',
            light: '#FFDC44'
        },
        error: {
            main: '#8A0C1A',
            light: '#F47D20',
        },
        background: {
            default: '#01533F',
            paper: '#fff'
        },
        text: {
        }
    },
    typography: {
        fontFamily: 'Raleway',
        fontSize: 15,
        allVariants: {
            fontWeight: 400,
        },
    },
    components: {
        MuiFormLabel: {
            defaultProps: {
                sx: {
                    fontSize: '15px',
                    top: 2,
                },
            },
        },
    },
};

let theme = createTheme(themeOpts)
theme = responsiveFontSizes(theme)
export default theme
