import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Demo from "./components/Demo";
import SignUp from "./components/SignUp";
import Lodging from "./components/Lodging";
import Partner from "./components/Partner";
import Account from "./components/Account";
import logoHouse from "./assets/images/travel-cents-house.png";

function App() {
	return (
		<Router>
			<header>
				<img src={logoHouse} className="header-logo-house" alt="House Logo" />
				<nav>
					<ul className="ul-nav">
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
							<Link to="/partner">Partner</Link>
						</li>
						<li>
							<Link to="/account">My Account</Link>
						</li>
					</ul>
				</nav>
			</header>

			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/demo">
					<Demo />
				</Route>
				<Route path="/signup">
					<SignUp />
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
			</Switch>
		</Router>
	);
}

export default App;
