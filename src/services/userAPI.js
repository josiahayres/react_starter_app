import axiosInstance from "./axios";

/**
 *
 * @param {string} username Username to login with.
 * @param {string} password Password to login with.
 * @throws {error} Message if the API call failed.
 */
export async function login(username = "", password = "") {
	const { data } = axiosInstance.get(`/login`, {
		data: {
			username,
			password,
		},
	});
	return data;
}
