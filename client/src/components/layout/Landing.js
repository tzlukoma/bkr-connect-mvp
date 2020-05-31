import React from "react";
import { Link } from "react-router-dom";

const Landing = (props) => {
	return (
		<section className="landing">
			<div className="dark-overlay">
				<div className="landing-inner">
					<h1 className="x-large">Brown Kids Read Connect</h1>
					<p className="lead">
						Create your volunteer profile and share experiences with other
						members
					</p>
					<div className="buttons">
						<Link to="/sign-up" className="btn btn-primary">
							Sign Up
						</Link>
						<Link to="/login" className="btn">
							Login
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Landing;
