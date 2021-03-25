import "./PickerMiddle.css";

const PickerMiddle = ({ wordsSay, firstName }) => {
	const wordsForUser = `${wordsSay} ${firstName}!`;
	const messageCallToAction =
		wordsSay === "Hey"
			? "Please support small businesses."
			: "Thank you for supporting small businesses!";
	const messageMission =
		wordsSay === "Hey"
			? "Our mission is to help local lodging get back on their feet while helping travelers productively save for their trips."
			: "";

	return (
		<div className="save-cents-picker-middle">
			<p className="p-words-for-user">{wordsForUser}</p>
			<hr className="hr-picker"></hr>
			<h5 className="h5-support-mission">{messageCallToAction}</h5>
			<p className="p-support-mission">{messageMission}</p>
		</div>
	);
};

export default PickerMiddle;
