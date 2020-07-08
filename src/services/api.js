import axiosInstance from "./axios";

/**
 * 
 * @param {string} query Must be URL encoded search string.
 * @throws {error} Message if the API call failed.
 */
export async function searchGoogle(query = "") {
    const { data } = axiosInstance.get(`https://www.google.com/search?q=${query}`);
    return data;
}