import React from "react";

// Setup Redux
import { Provider } from "react-redux";
import store from "./redux/store";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import appTheme from "./config/appTheme";

// Setup Notifications
import { SnackbarProvider } from "notistack";

// This file connects the /pages folder with an app URL route
import Routes from "./Routes";

// Setup
const theme = createMuiTheme(appTheme);

function App() {
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
					<Routes />
				</SnackbarProvider>
			</ThemeProvider>
		</Provider>
	);
}

export default App;
