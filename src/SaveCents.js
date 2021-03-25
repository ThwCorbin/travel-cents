import "./SaveCents.css";
import Button from "./Button";
import logoHouse from "./travel-cents-house.png";

const SaveCents = () => {
	let wordSay = "Hey";
	let name = "Sarah";
	// let supportMessage =
	const wordsForUser = `${wordSay} ${name}!`;
	let cents = "0.42";
	let wordsFund = `Do you want to round up on this and put $${cents} towards your travel funds?`;

	return (
		<div className="save-cents-picker">
			<div className="save-cents-picker-top">
				<p className="p-x-close">X</p>
				<img src={logoHouse} className="house-logo" alt="House Logo" />
			</div>
			<div className="save-cents-picker-middle">
				<p className="p-words-for-user">{wordsForUser}</p>
				<hr></hr>
				<h5 className="h5-support-mission">
					Thank you for supporting small businesses!
				</h5>
				<p className="p-support-mission">
					Our mission is to help local lodging get back on their feet while
					helping travelers productively save for their trips.
				</p>
				{/* {supportMessage} */}
			</div>
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
