import React from "react";

// Setup react router
import { BrowserRouter as Router } from "react-router-dom";

// Setup Redux
import { Provider } from "react-redux";
import store from "../redux/store";

// Setup Notifications
import { SnackbarProvider } from "notistack";

// Setup material UI theme
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import appTheme from "../config/appTheme";

const theme = createMuiTheme(appTheme);

function Wrapper(props) {
	const { children } = props;
	const notistackRef = React.createRef();
	const onClickDismiss = (key) => () => {
		notistackRef.current.closeSnackbar(key);
	};

	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<SnackbarProvider
					maxSnack={3}
					anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
					preventDuplicate={true}
					ref={notistackRef}
					action={(key) => (
						<button onClick={onClickDismiss(key)}>dismiss</button>
					)}
				>
					<Router>{children}</Router>
				</SnackbarProvider>
			</ThemeProvider>
		</Provider>
	);
}

export default Wrapper;
