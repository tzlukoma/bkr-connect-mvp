import fetchDefaults from "fetch-defaults";

const setAuthToken = (token) => {
	if (token) {
		const apiFetch = fetchDefaults(fetch, {
			headers: { Authorization: `Bearer ${token}` },
		});

		return apiFetch;
	} else {
		const apiFetch = fetchDefaults(fetch, {
			headers: {},
		});

		return apiFetch;
	}
};

export { setAuthToken };
