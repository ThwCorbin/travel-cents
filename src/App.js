import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import logoHouse from "./assets/images/travel-cents-house.png";
import womanLaptop from "./assets/images/woman-laptop.png";
import pigStars from "./assets/images/pig-stars.png";

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
				support small buinesses.{" "}
			</p>

			<h3>Why supporting Small Business Matters</h3>
			<p>
				Small businesses are the backbone of our economy. Not sure what to say
				here yet. How COVID has impacted small business and why stimulating the
				ecconomy matters. You can help by staying small.
			</p>

			<h3>How it Works</h3>
			<h4>Join TravelCents for Free</h4>
			<img
				src={womanLaptop}
				className="woman-laptop"
				alt="Woman with a laptop"
			/>
			<p>Sign up and add extension to browser</p>
			<p>Works with Chrome browser</p>
			<img
				src={pigStars}
				className="pig-stars"
				alt="Piggy bank and saving stars"
			/>
			<h4>Add to Your Funds</h4>
			<p>
				Add to your Travel Funds as you shop. On each purcahse you make we’ll
				ask if you want to round up your purchase and add to your funds.
			</p>
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
