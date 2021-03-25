import Header from "./Header";
import Button from "./Button";
import "./Account.css";
// import logoHouse from "./travel-cents-house.png";

const Account = () => {
	return (
		<div className="div-account-main">
			<div className="div-user-name-account-activity">
				<div className="div-user-name-funds">
					<h2>Sarah's Account</h2>
					<hr className="hr-top" />
					<hr className="hr-bottom" />
					<section className="section-total-funds">
						<h4>My Total Funds:</h4>
						<p className="total-funds-amount">$24.52</p>
					</section>
				</div>
				<div className="div-user-transactions">
					<h4>Transaction History:</h4>
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
				<div className="div-house-description"></div>
				<div className="div-house-description"></div>
			</div>
		</div>
	);
};

export default Account;
