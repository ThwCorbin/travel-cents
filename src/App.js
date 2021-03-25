import Account from "./Account";
import "./App.css";
import ExampleEcomm from "./ExampleEcomm";
import Header from "./Header";

function App() {
	return (
		<div className="App">
			<Header exampleECommSite />
			{/* <ExampleEcomm /> */}
			<Account />
		</div>
	);
}

export default App;
