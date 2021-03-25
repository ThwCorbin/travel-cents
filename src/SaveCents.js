import "./SaveCents.css";
import PickerMiddle from "./PickerMiddle";
import PickerBottom from "./PickerBottom";
import logoHouse from "./travel-cents-house.png";

const SaveCents = () => {
	return (
		<div className="save-cents-picker">
			<div className="save-cents-picker-top">
				<p className="p-x-close">X</p>
				<img src={logoHouse} className="house-logo" alt="House Logo" />
			</div>
			<PickerMiddle />
			<PickerBottom />
		</div>
	);
};

export default SaveCents;
