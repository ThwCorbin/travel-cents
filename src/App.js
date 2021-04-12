import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Button from "./components/Button";
import logoHouse from "./assets/images/travel-cents-house.png";
import adventures from "./assets/images/adventures.png";
import number01 from "./assets/images/number-01.png";
import womanLaptop from "./assets/images/woman-laptop.png";
import number02 from "./assets/images/number-02.png";
import pigStars from "./assets/images/pig-stars.png";
import number03 from "./assets/images/number-03.png";
import palmsPointer from "./assets/images/palms-pointer.png";

function App() {
	return (
		<Router>
			<div>
				<img src={logoHouse} className="header-logo-house" alt="House Logo" />
				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/demo">Demo</Link>
						</li>
						<li>
							<Link to="/signup">Sign Up</Link>
						</li>
						<li>
							<Link to="/lodging">Find Lodging</Link>
						</li>
						<li>
							<Link to="/partner">Become a Partner</Link>
						</li>
						<li>
							<Link to="/account">My Account</Link>
						</li>
					</ul>
				</nav>
			</div>

			<Switch>
				<Route path="/demo">
					<Demo />
				</Route>
				<Route path="/signup">
					<Signup />
				</Route>
				<Route path="/lodging">
					<Lodging />
				</Route>
				<Route path="/partner">
					<Partner />
				</Route>
				<Route path="/account">
					<Account />
				</Route>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</Router>
	);
}

function Home() {
	return (
		<div>
			<h2>It Just Makes Cents!</h2>
			<p>
				We make saving for a vacation easy. We round up on the purchases that
				you’re already making so you can save for an awesome getaway.
			</p>
			<p>
				We partner with small, locally owned hotels and bed and breakfasts to
				support small buinesses.
			</p>
			<Button large home label={"Download Plug-in"} />
			<img
				src={adventures}
				className="user-flow-img user-flow-img-adventures"
				alt="Seek Your Own Adventures"
			/>

			<h2>Why supporting Small Business Matters</h2>
			<p>
				Small businesses are the backbone of our economy. They accounted for 65%
				of all new jobs over the last 17 years. Supporting local businesses is
				not only good for the ecconomy, but also the environment because they
				often have a smaller carbon footprint than larger companies.
			</p>

			<h2>How it Works</h2>
			<img src={number01} className="number number01" alt="1st" />
			<h4>Join TravelCents for Free</h4>
			<img
				src={womanLaptop}
				className="user-flow-img user-flow-img-woman-laptop"
				alt="Woman with a laptop"
			/>
			<p>Sign up and add the extension to your favorite browser.</p>
			<img
				src={pigStars}
				className="user-flow-img user-flow-img-pig-stars"
				alt="Piggy bank and saving stars"
			/>
			<img src={number02} className="number number02" alt="2nd" />
			<h2>Add to Your Funds</h2>
			<p>
				Add to your Travel Funds as you shop. On each e-commerce purchase you
				make, we’ll ask if you want to round up your total and add to your
				funds.
			</p>
			<img src={number03} className="number number03" alt="3rd" />
			<h2>Find Your Next Destination</h2>
			<p>
				Use your saved travel funds to find an awesome place to stay. We’ve
				partnered with locally owned lodging around the country to bring you
				dicounts on your next stay.{" "}
			</p>
			<Button large home label={"Start for Free!"} />
			<img
				src={palmsPointer}
				className="user-flow-img user-flow-img-palm-pointers"
				alt="Travel pointer"
			/>
		</div>
	);
}

function Demo() {
	return <h2>Demo</h2>;
}

function Signup() {
	return <h2>Sign Up</h2>;
}

function Lodging() {
	return <h2>Find Lodging</h2>;
}

function Partner() {
	return <h2>Become a Partner</h2>;
}

function Account() {
	return <h2>My Account</h2>;
}

export default App;
