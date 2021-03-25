import Button from "./Button";
import "./PickerBottom.css";

const PickerBottom = ({ cents, amount, wordsSay, onClick }) => {
	const dollarAndCents = `$${cents}`;
	const messageFunds =
		wordsSay === "Hey"
			? `Do you want to round up on this and put ${dollarAndCents} towards your travel funds?`
			: `You added $${amount} to your account!`;
	const buttonChoices =
		wordsSay === "Hey" ? (
			<div className="button-choices">
				<Button label={dollarAndCents} onClick={onClick} />
				<Button outline label="$1.00" onClick={onClick} />
				<Button outline label="$3.00" onClick={onClick} />
				<Button outline label="Other" />
			</div>
		) : (
			<div></div>
		);
	const labelFunds = wordsSay === "Hey" ? "Add Funds" : "View Account";
	const messageShopping =
		wordsSay === "Hey" ? "Continue Shopping" : "Finish Shopping";

	return (
		<div className="save-cents-picker-bottom">
			<p className="p-words-fund">{messageFunds}</p>
			{buttonChoices}
			<div className="button-funds-continue">
				<Button large label={labelFunds} onClick={onClick} />
				<p className="p-continue-close">{messageShopping}</p>
			</div>
		</div>
	);
};

export default PickerBottom;
