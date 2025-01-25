import { extendTheme } from "@chakra-ui/react";
import buttonTheme from "./components/Button";
import { colors } from "./constants";

const theme = extendTheme({
    colors,
    fonts: {
        heading: `"Google Sans"', 'sans - serif'`,
        body: `"Google Sans"', 'sans- serif'`,
    },
    components: {
        Button: buttonTheme,
    },
    config: {
        useSystemColorMode: false,
        initialColorMode: 'light',
        cssVarPrefix: 'fc'
    }
});

export default theme;