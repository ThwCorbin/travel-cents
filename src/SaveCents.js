import React from "react";
import "./SaveCents.css";

const SaveCents = () => {
	let wordGreet = "Hey";
	let name = "Sarah";
	// let supportMessage =
	const words = `${wordGreet} ${name}!`;

	return (
		<div className="save-cents-picker">
			<div className="save-cents-picker-top">
				<p className="x-close">X</p>
			</div>
			<div className="save-cents-picker-middle">
				<p>{words}</p>
				<hr></hr>
				<h5>Support Small Businesses!</h5>
				<p>
					Our mission is to help local lodging get back on their feet while
					helping travelers productively save for their trips
				</p>
				{/* {supportMessage} */}
			</div>
			<div className="save-cents-picker-bottom"></div>
		</div>
	);
};

export default SaveCents;
