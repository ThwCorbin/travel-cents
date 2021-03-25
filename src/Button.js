import "./Button.css";

const Button = (props) => {
	// Only using types "primary"
	let classList = "button";

	// Check if large, small, and/or outline props are true
	// Update classList variable
	// must keep " " at String start to build "button button-primary" + " button-large"
	if (props.large) {
		classList += ` button-large`;
	}

	if (props.small) {
		classList += ` button-small`;
	}

	if (props.outline) {
		classList += ` button-outline`;
	}

	return <button className={classList}>{props.label}</button>;
};

export default Button;
