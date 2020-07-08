import React from "react";

import Button from "@material-ui/core/Button";
import { useSnackbar } from "notistack";

function App() {
	const { enqueueSnackbar } = useSnackbar();
	return (
		<div className="App">
			<main>
				<Button
					variant="contained"
					onClick={(e) => {
						enqueueSnackbar("tester" + e.timeStamp);
					}}
				>
					Default
				</Button>
				<Button variant="contained" color="primary">
					Primary
				</Button>
				<Button variant="contained" color="secondary">
					Secondary
				</Button>
				<Button variant="contained" disabled>
					Disabled
				</Button>
				<Button
					variant="contained"
					color="primary"
					href="#contained-buttons"
				>
					Link
				</Button>
			</main>
		</div>
	);
}

export default App;
