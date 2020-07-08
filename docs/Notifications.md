By default we're adding a clear Button to all notifications.

### Notification Variants

```jsx padded
import { useSnackbar } from "notistack";
import Button from "../src/components/Button/Button";

const { enqueueSnackbar } = useSnackbar();

const showNotification = (e, variant = "default") => {
	const message = `${variant} notification triggered @${Number(e.timeStamp)}`;
	enqueueSnackbar(message, { variant: variant });
};

<>
	<Button onClick={(e) => showNotification(e)}>Click me (default)</Button>
	<Button onClick={(e) => showNotification(e, "success")}>
		Click me (success)
	</Button>
	<Button onClick={(e) => showNotification(e, "error")}>
		Click me (error)
	</Button>
	<Button onClick={(e) => showNotification(e, "warning")}>
		Click me (error)
	</Button>
	<Button onClick={(e) => showNotification(e, "info")}>
		Click me (error)
	</Button>
</>;
```

[See original documentation](https://iamhosseindhv.com/notistack/demos#variants)

### Persistent / Programmatically clear notification

```jsx padded
import { useSnackbar } from "notistack";
import Button from "../src/components/Button/Button";

const { enqueueSnackbar, closeSnackbar } = useSnackbar();

// on connection loss
const [key, setKey] = React.useState(null);
<>
	<Button
		onClick={() => {
			// on connection loss
			const key = enqueueSnackbar("No connection!", {
				variant: "error",
				persist: true,
			});
			setKey(key);
		}}
	>
		simulate connection loss
	</Button>
	<Button
		onClick={() => {
			// when we're back online
			closeSnackbar(key);
		}}
	>
		back online
	</Button>
</>;
```
