import axios from 'axios';

const instance = axios.create();

export const registerResponseInterceptors = (responseInterceptor, errorInterceptor) => {
    instance.interceptors.response.use(responseInterceptor, errorInterceptor);
};

export const registerRequestInterceptors = (requestInterceptor) => {
    instance.interceptors.request.use(requestInterceptor);
};
