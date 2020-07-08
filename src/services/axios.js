const axios = require('axios').default;
const instance = axios.create();

// Add a request interceptor
instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Give some slightly more user friendly error messages. 
    let message = "";

    if (error.response) {
        const status = error?.response?.status || 0;
        switch (status) {
            case 400:
                message = "Bad input [400]";
                break;
            case 401:
                message = "Authentication check failed [401]";
                break;
            case 403:
                message = "The user is not in required AD Groups/Roles [403]";
                break;
            case 500:
                message = "Internal server error [500]";
                break;
            default:
                message = `Unexpected server error [${status}]`;
                break;
        };
    } else if (error.request) {
        // The request was made but no response was received
        message = "The request was made but no response was received";
    } else {
        // Something happened in setting up the request that triggered an Error
        message = error.message;
    }

    console.error(`Axios request failed: ${message}. Full error:`, JSON.stringify(error));

    return Promise.reject(message);
});

export default instance;