// import logo from './logo.svg';
import "./App.css";
import ExampleEcomm from "./ExampleEcomm";
import logo from "./travel-cents.png";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1 className="header-h1">Travel Cents</h1>
				{/* <img src={logo} className="travel-cents-logo" alt="logo" /> */}
			</header>
			<ExampleEcomm />
		</div>
	);
}

export default App;
