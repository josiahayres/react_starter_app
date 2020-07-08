import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	margin: {
		margin: theme.spacing(1),
		color: (props) => theme?.status?.[props?.status] || "black",
	},
}));

/**
 * Makes the text inside the Example component the colour of the provided status.
 * default text colour to black if no status provided.
 * Status must be in `config/appTheme.js` status object.
 *
 * @param {string} status - ["warning", "danger", "error"]
 */
export default function Example({ children, ...props }) {
	const { margin } = useStyles(props);
	return <div className={margin}>{children}</div>;
}
