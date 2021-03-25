import "./PickerMiddle.css";

const PickerMiddle = () => {
	let wordSay = "Hey";
	let name = "Sarah";
	const wordsForUser = `${wordSay} ${name}!`;

	return (
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
		</div>
	);
};

export default PickerMiddle;
