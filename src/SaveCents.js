import React from "react";
import "./SaveCents.css";
import Button from "./Button";
import house from "./travel-cents-house.png";

const SaveCents = () => {
	let wordSay = "Hey";
	let name = "Sarah";
	// let supportMessage =
	const wordsMiddle = `${wordSay} ${name}!`;
	let cents = "0.42";
	let wordsFund = `Do you want to round up on this and put $${cents} towards your travel funds?`;

	return (
		<div className="save-cents-picker">
			<div className="save-cents-picker-top">
				<p className="x-close">X</p>
				<img src={house} alt="Travel Cent House" />
			</div>
			<div className="save-cents-picker-middle">
				<p>{wordsMiddle}</p>
				<hr></hr>
				<h5 className="h5-support">Support Small Businesses!</h5>
				<p className="mission-statement">
					Our mission is to help local lodging get back on their feet while
					helping travelers productively save for their trips
				</p>
				{/* {supportMessage} */}
			</div>
			<div className="save-cents-picker-bottom">
				<p className="words-fund">{wordsFund}</p>
				<div className="button-choices">
					<Button outline label="$0.42" />
					<Button outline label="$1.00" />
					<Button outline label="$3.00" />
					<Button outline label="Other" />
				</div>
			</div>
		</div>
	);
};

export default SaveCents;