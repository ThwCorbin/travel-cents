import Header from "./Header";
import Button from "./Button";
import "./Account.css";
import houseOne from "../assets/images/house-rect-1.png";
import houseTwo from "../assets/images/house-rect-1.png";
// import logoHouse from "./travel-cents-house.png";

const Account = () => {
	return (
		<div className="div-account-main">
			<div className="div-user-name-account-activity">
				<div className="div-user-name-funds">
					<h2 className="h2-user-name">Sarah's Account</h2>
					<hr className="hr-top" />
					<hr className="hr-bottom" />
					<section className="section-total-funds">
						<h4 className="h4-total-funds">My Total Funds:</h4>
						<p className="total-funds-amount">$242.42</p>
					</section>
				</div>
				<div className="div-user-transactions">
					<h4 className="h4-transaction-history">Transaction History:</h4>
					<section className="section-transactions">
						<ul className="ul-data-field-names">
							<li>Date</li>
							<li>Company</li>
							<li>Funds Applied</li>
						</ul>
						<hr className="hr-top" />
						<hr className="hr-bottom" />
						<ul className="ul-data-field-values">
							<ul className="ul-data-line ul-data-line-1">
								<li>3/25/2021</li>
								<li>Amazon</li>
								<li>$0.42</li>
							</ul>
							<ul className="ul-data-line ul-data-line-2">
								<li>3/25/2021</li>
								<li>Amazon</li>
								<li>$0.42</li>
							</ul>
							<ul className="ul-data-line ul-data-line-3">
								<li>3/25/2021</li>
								<li>Zara</li>
								<li>$3.00</li>
							</ul>
							<ul className="ul-data-line ul-data-line-4">
								<li>3/23/2021</li>
								<li>Nordstrom Rack</li>
								<li>$0.36</li>
							</ul>
							<ul className="ul-data-line ul-data-line-5">
								<li>3/20/2021</li>
								<li>Amazon</li>
								<li>$1.00</li>
							</ul>
							<ul className="ul-data-line ul-data-line-6">
								<li>3/19/2021</li>
								<li>Apple</li>
								<li>$0.22</li>
							</ul>
						</ul>
					</section>
				</div>
				<Button label="Load More" large />
			</div>
			<div className="div-hot-deals">
				<h4 className="h4-hot-deals">This Week's Hot Deals</h4>
				<div className="div-houses-deals">
					<div className="div-house-description">
						<img src={houseOne} className="img-hot-deals-house" alt="House" />
						<div className="div-house div-house-city">
							<p>Cayucos, CA</p>
							<p>$$</p>
						</div>
					</div>
					<div className="deals">
						<p>Save 15%</p>
						<Button label="View" small />
					</div>
				</div>
				<div className="div-houses-deals">
					<div className="div-house-description">
						<img src={houseTwo} className="img-hot-deals-house" alt="House" />
						<div className="div-house div-house-city">
							<p>Santa Cruz, CA</p>
							<p>$$$</p>
						</div>
					</div>
					<div className="deals">
						<p>Save 10%</p>
						<Button label="View" small />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Account;
