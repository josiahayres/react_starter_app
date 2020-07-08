import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	margin: {
		margin: theme.spacing(1),
		color: theme.status.warning,
	},
}));

export default function Example() {
	const classes = useStyles();
	return <div className={classes.margin}>Warning text</div>;
}
