import "./Footer.css";
import socialMedia from "../assets/images/social-media-logos-bw.png";
import logoHouse from "../assets/images/travel-cents-house.png";

const Footer = () => {
	return (
		<footer>
			<div className="footer-about-media-links">
				<ul className="footer-about">
					<li>About</li>
					<li>FAQ</li>
					<li>Help</li>
					<li>Contact</li>
				</ul>
				<img
					src={socialMedia}
					className="footer-logos-social-media"
					alt="Social Media Links"
				/>
			</div>
			<img src={logoHouse} className="footer-logo-house" alt="House Logo" />
		</footer>
	);
};

export default Footer;
