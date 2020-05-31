import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	USER_LOADED,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT,
} from "./types";
import { setAlert } from "./alert";
import { setAuthToken } from "../utils/setAuthToken";

// Load User
export const loadUser = () => async (dispatch) => {
	const apiFetch = setAuthToken(localStorage.token);

	try {
		const res = await apiFetch(`http://localhost:1337/users/me`);
		const result = await res.json();
		console.log("actions/auth/loadUser", result);

		if (result.error) {
			dispatch({ type: AUTH_ERROR });
		} else {
			dispatch({
				type: USER_LOADED,
				payload: result,
			});
		}
	} catch (error) {
		console.log("error", error.message);
	}
};

// Register User
export const signUp = (body) => async (dispatch) => {
	const myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");

	const raw = JSON.stringify(body);

	const requestOptions = {
		method: "POST",
		headers: myHeaders,
		body: raw,
		redirect: "follow",
	};

	try {
		const response = await fetch(
			"http://localhost:1337/auth/local/register",
			requestOptions
		);
		const result = await response.json();

		if (result.error) {
			console.log(result);
			dispatch(setAlert(result.message[0].messages[0].message, "danger"));
			dispatch({
				type: REGISTER_FAIL,
			});
			// TODO: Need to loop if multiple errors
		} else {
			dispatch({
				type: REGISTER_SUCCESS,
				payload: {
					user: result.user,
					token: result.jwt,
				},
			});
			dispatch(loadUser());
		}
	} catch (error) {
		console.log("error", error.message);
	}
};

// Login User
export const login = (body) => async (dispatch) => {
	const myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");

	const raw = JSON.stringify(body);

	const requestOptions = {
		method: "POST",
		headers: myHeaders,
		body: raw,
		redirect: "follow",
	};

	try {
		const response = await fetch(
			"http://localhost:1337/auth/local/",
			requestOptions
		);
		const result = await response.json();

		if (result.error) {
			console.log(result);
			dispatch(setAlert(result.message[0].messages[0].message, "danger"));
			dispatch({
				type: LOGIN_FAIL,
			});
			// TODO: Need to loop if multiple errors
		} else {
			dispatch({
				type: LOGIN_SUCCESS,
				payload: {
					user: result.user,
					token: result.jwt,
				},
			});
			dispatch(loadUser());
		}
	} catch (error) {
		console.log("error", error.message);
	}
};

// Logout / Clear Profile
export const logout = () => (dispatch) => {
	dispatch({ type: LOGOUT });
};
