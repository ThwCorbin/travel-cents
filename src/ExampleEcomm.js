import React, { useState } from "react";
import "./ExampleEcomm.css";

const ExampleEcomm = () => {
	return (
		<div className="exampleSite">
			<h2>e-Commerce Site</h2>
			<h3>Checkout Page</h3>
			<div className="orderSummary">
				<h4>Order Summary</h4>
				<ul>
					<li>Dog Collar $14.99</li>
					<li>Blue Shirt $24.59</li>
				</ul>
				<p>
					Total: <strong>$39.58</strong>
				</p>
			</div>
		</div>
	);
}; //ExampleEcoomm

export default ExampleEcomm;
