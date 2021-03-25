import "./Header.css";
import logoHouse from "./travel-cents-house.png";

const Header = ({ exampleECommSite }) => {
	if (exampleECommSite) {
		return (
			<header className="header-e-comm-site">
				<h1 className="header-h1">Travel Cents</h1>
				<h2 className="header-h2">Chrome Extension on e-Commerce Site</h2>
				<h3 className="header-h3">User Takes the Happy Path</h3>
				{/* <img src={logo} className="travel-cents-logo" alt="logo" /> */}
			</header>
		);
	} else {
		return (
			<header className="header-travel-cents">
				<img src={logoHouse} className="header-logo-house" alt="House Logo" />
				<nav>
					<ul className="ul-nav">
						<li key="find-lodging">Find Lodging</li>
						<li key="become-partner">Become a Partner</li>
						<li key="account">Account</li>
					</ul>
				</nav>
			</header>
		);
	}
};

export default Header;
