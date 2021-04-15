import Button from "./Button";
import Footer from "./Footer";
import adventures from "../assets/images/adventures.png";
import number01 from "../assets/images/number-01.png";
import womanLaptop from "../assets/images/woman-laptop.png";
import number02 from "../assets/images/number-02.png";
import pigStars from "../assets/images/pig-stars.png";
import number03 from "../assets/images/number-03.png";
import palmsPointer from "../assets/images/palms-pointer.png";
import "./Home.css";

const Home = () => {
	return (
		<div>
			<h1 className="h1-home">
				It just makes <span className="h1-span-cent">¢</span>ents!
			</h1>
			<div className="div-sections-about-cents">
				<section className="section-home section-seek-adventures">
					<div className="div-about-travel-cents">
						<h2>Who We Are</h2>
						<p>
							We make saving for a vacation easy. We round up on the purchases
							that you’re already making so you can save for an awesome getaway.
						</p>
						<p>
							We partner with small, locally owned hotels and bed and breakfasts
							to support small buinesses.
						</p>
						<Button large home label={"Download Plug-in"} />
					</div>
					<img
						src={adventures}
						className="img-adventures"
						alt="Seek Your Own Adventures"
					/>
				</section>

				<section className="section-home section-why-support">
					<h2>Why Supporting Small Business Matters</h2>
					<p>
						Small businesses are the backbone of our economy. They accounted for
						65% of all new jobs over the last 17 years. Supporting local
						businesses is not only good for the ecconomy, but also the
						environment because they often have a smaller carbon footprint than
						larger companies.
					</p>
				</section>

				<section className="section-home section-how-works">
					<h2>How It Works</h2>
					<div className="div-user-flow div-user-flow-join">
						<div className="div-user-flow-info">
							<img
								src={number01}
								className="img-number img-number01"
								alt="1st"
							/>
							<h3>Join TravelCents for Free</h3>
							<p>Sign up and add the extension to your favorite browser.</p>
						</div>
						<img
							src={womanLaptop}
							className="img-user-flow img-woman-laptop"
							alt="Woman with a laptop"
						/>
					</div>

					<div className="div-user-flow div-user-flow-fund">
						<img
							src={pigStars}
							className="img-user-flow img-pig-stars"
							alt="Piggy bank and saving stars"
						/>
						<div className="div-user-flow-info">
							<img
								src={number02}
								className="img-number img-number02"
								alt="2nd"
							/>
							<h3>Add to Your Funds</h3>
							<p>
								Add to your Travel Funds as you shop. On each e-commerce
								purchase you make, we’ll ask if you want to round up your total
								and add to your funds.
							</p>
						</div>
					</div>

					<div className="div-user-flow div-user-flow-find">
						<div className="div-user-flow-info">
							<img
								src={number03}
								className="img-number img-number03"
								alt="3rd"
							/>
							<h3>Find Your Next Destination</h3>
							<p>
								Use your saved travel funds to find an awesome place to stay.
								We’ve partnered with locally owned lodging around the country to
								bring you dicounts on your next stay.{" "}
							</p>
							<Button large home label={"Start for Free!"} />
						</div>
						<img
							src={palmsPointer}
							className="img-user-flow img-palm-pointers"
							alt="Travel pointer"
						/>
					</div>
				</section>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
