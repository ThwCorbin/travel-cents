import "./SaveCents.css";
import PickerMiddle from "./PickerMiddle";
import Button from "./Button";
import logoHouse from "./travel-cents-house.png";

const SaveCents = () => {
	let cents = "0.42";
	let wordsFund = `Do you want to round up on this and put $${cents} towards your travel funds?`;

	return (
		<div className="save-cents-picker">
			<div className="save-cents-picker-top">
				<p className="p-x-close">X</p>
				<img src={logoHouse} className="house-logo" alt="House Logo" />
			</div>
			<PickerMiddle />
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
		</div>
	);
};

export default SaveCents;
