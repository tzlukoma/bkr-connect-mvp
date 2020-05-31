import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { login } from "../../actions/auth";

const Login = ({ login, isAuthenticated }) => {
	const [formData, setFormData] = useState({
		identifier: "",
		password: "",
	});

	const { identifier, password } = formData;
	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = (e) => {
		e.preventDefault();

		login(formData);
	};

	if (isAuthenticated) {
		return <Redirect to="/dashboard" />;
	}

	return (
		<>
			<h1 className="large text-primary">Log In</h1>
			<p className="lead">
				<i className="fas fa-user"></i> Log In to Your Account
			</p>
			<form className="form" onSubmit={(e) => onSubmit(e)}>
				<div className="form-group">
					<input
						type="text"
						placeholder="Email or Username"
						name="identifier"
						value={identifier}
						onChange={(e) => onChange(e)}
						required
					/>
				</div>
				<div className="form-group">
					<input
						type="password"
						name="password"
						value={password}
						onChange={(e) => onChange(e)}
						placeholder="Password"
						minLength="6"
					/>
				</div>
				<input type="submit" value="Log In" className="btn btn-primary" />
			</form>
			<p className="my-1">
				Don't have an account? <Link to="/sign-up">Sign Up</Link>
			</p>
		</>
	);
};

Login.propTypes = {
	login: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
