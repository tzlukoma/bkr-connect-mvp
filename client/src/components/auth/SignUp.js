import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

import { setAlert } from "../../actions/alert";
import { signUp } from "../../actions/auth";

const SignUp = ({ setAlert, signUp, isAuthenticated }) => {
	const [formData, setFormData] = useState({
		username: "",
		email: "",
		password: "",
		password2: "",
	});

	const { username, email, password, password2 } = formData;
	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = (e) => {
		e.preventDefault();

		if (password !== password2) {
			setAlert("Passwords do not match", "danger");
			return "Passwords do not match";
		}
		signUp(formData);
	};

	if (isAuthenticated) {
		return <Redirect to="/dashboard" />;
	}

	return (
		<Fragment>
			<h1 className="large text-primary">Sign Up</h1>
			<p className="lead">
				<i className="fas fa-user"></i> Create Your Account
			</p>
			<form className="form" onSubmit={(e) => onSubmit(e)}>
				<div className="form-group">
					<input
						type="text"
						placeholder="Username"
						name="username"
						value={username}
						onChange={(e) => onChange(e)}
					/>
				</div>
				<div className="form-group">
					<input
						type="email"
						name="email"
						value={email}
						onChange={(e) => onChange(e)}
						placeholder="Email Address"
					/>
					<small className="form-text">
						This site users Gravatar, so if you want a profile image, use a
						Gravatar email
					</small>
				</div>
				<div className="form-group">
					<input
						type="password"
						name="password"
						value={password}
						onChange={(e) => onChange(e)}
						placeholder="Password"
					/>
				</div>
				<div className="form-group">
					<input
						type="password"
						name="password2"
						value={password2}
						onChange={(e) => onChange(e)}
						placeholder="Confirm Password"
					/>
				</div>
				<input type="submit" value="Sign Up" className="btn btn-primary" />
			</form>
			<p className="my-1">
				Already have an account? <Link to="/login">Log In</Link>
			</p>
		</Fragment>
	);
};

SignUp.propTypes = {
	setAlert: PropTypes.func.isRequired,
	signUp: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, signUp })(SignUp);
