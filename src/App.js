import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
// import ExampleEcomm from "./components/ExampleEcomm";
// import Account from "./components/Account";
// import Header from "./components/Header";

function App() {
	return (
		<Router>
			<div>
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
	return <h2>Home</h2>;
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
