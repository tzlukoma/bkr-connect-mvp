import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

import BKRLogoLight from "../../img/bkr-logo-light.svg";

const NavBar = ({ auth: { isAuthenticated, loading }, logout }) => {
	const authLinks = (
		<ul>
			<li>
				<a onClick={logout} href="#!">
					<i className="fa fa-sign-out-alt"></i>{" "}
					<span className="hide-sm">Logout</span>
				</a>
			</li>
		</ul>
	);

	const guestLinks = (
		<ul>
			<li>
				<Link to="/profiles">Members</Link>
			</li>
			<li>
				<Link to="/sign-up">Sign Up</Link>
			</li>
			<li>
				<Link to="/login">Login</Link>
			</li>
		</ul>
	);

	return (
		<nav className="navbar bg-dark">
			<Link to="/">
				<img
					src={BKRLogoLight}
					alt=""
					style={{ width: `10rem`, verticalAlign: `middle` }}
				/>
			</Link>
			{!loading && (
				<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
			)}
		</nav>
	);
};

NavBar.propTypes = {
	logout: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps, { logout })(NavBar);
