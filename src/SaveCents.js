import React, { useState } from "react";
import "./SaveCents.css";
import PickerMiddle from "./PickerMiddle";
import PickerBottom from "./PickerBottom";
import logoHouse from "./travel-cents-house.png";

const SaveCents = ({ user, change }) => {
	let firstName = user ? user.firstName : "Sarah";
	let cents = change ? `0.${change}` : "0.42";
	const [amount, setAmount] = useState(cents);
	const [wordsSay, setWordsSay] = useState("Hey");

	const handleClick = (e) => {
		if (e.target.innerText === "Add Funds") {
			console.log(amount);
			setWordsSay("Awesome");
		} else {
			setAmount(e.target.innerText.slice(1));
		}
	};

	return (
		<div className="save-cents-picker">
			<div className="save-cents-picker-top">
				<p className="p-x-close">X</p>
				<img src={logoHouse} className="house-logo" alt="House Logo" />
			</div>
			<PickerMiddle wordsSay={wordsSay} firstName={firstName} />
			<PickerBottom
				cents={cents}
				amount={amount}
				wordsSay={wordsSay}
				onClick={(e) => handleClick(e)}
			/>
		</div>
	);
};

export default SaveCents;
