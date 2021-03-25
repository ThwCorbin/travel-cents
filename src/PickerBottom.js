import Button from "./Button";
import "./PickerBottom.css";

const PickerBottom = () => {
	let cents = "0.42";
	let wordsFund = `Do you want to round up on this and put $${cents} towards your travel funds?`;

	return (
		<div className="save-cents-picker-bottom">
			<p className="p-words-fund">{wordsFund}</p>
			<div className="button-choices">
				<Button label="$0.42" />
				<Button outline label="$1.00" />
				<Button outline label="$3.00" />
				<Button outline label="Other" />
			</div>
			<div className="button-funds-continue">
				<Button large label="Add Funds" />
				<p className="p-continue-close">Continue Shopping</p>
			</div>
		</div>
	);
};

export default PickerBottom;
