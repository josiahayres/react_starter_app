import { orange } from '@material-ui/core/colors';

export default {
    // Custom status colours. Usage: `theme.status.warning`
    status: {
        warning: "#e5720f",
        error: "#bc0000",
        danger: orange[500],
    },
    colours: {
        CUSTOMS_BLUE: "#003d6e",
        BLUE: "#0062cb",
    },
    palette: {
        type: "light",
        primary: {
            main: '#0062cb',
        },
        secondary: {
            main: '#406e92',
        },
    },
    overrides: {
        // Component name https://material-ui.com/api/[component]/#component-name
        MuiCheckbox: {
            // Rule name
            checked: {
                // Style it just how you like
                // color: "red"
            }
        }
    }
}