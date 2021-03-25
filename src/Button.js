import "./Button.css";

const Button = ({ large, small, outline, label, onClick }) => {
	// Only using types "primary"
	let classList = "button";

	// Check if large, small, and/or outline props are true
	// Update classList variable
	// must keep " " at String start to build "button button-primary" + " button-large"
	if (large) {
		classList += ` button-large`;
	}

	if (small) {
		classList += ` button-small`;
	}

	if (outline) {
		classList += ` button-outline`;
	}

	return (
		<button className={classList} onClick={onClick}>
			{label}
		</button>
	);
};

export default Button;
