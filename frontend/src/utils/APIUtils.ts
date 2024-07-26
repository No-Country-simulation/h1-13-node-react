import axios from "axios";
import { LoginRequestI, SignupRequestI } from "../interfaces/requestInterface";
import { API_BASE_URL } from "../constants";

type Options = {
    url: string;
    method: string;
    data?: any;
    headers?: { [key: string]: string };
}

const request = (options: Options, token?: string | null) => {
    const headers: { [key: string]: string } = {
        'Content-Type': 'application/json',
    };
    if (token) {
        headers['token'] = token;
    }

    const axiosOptions = {
        url: options.url,
        method: options.method,
        headers: headers,
        data: options.data
    };

    return axios(axiosOptions)
        .then(response => response.data)
        .catch(error => { throw error });
};

export function login(loginRequest: LoginRequestI) {
    return request({
        url: API_BASE_URL + "/auth/login",
        method: 'POST',
        data: loginRequest
    });
}

export function signup(signupRequest: SignupRequestI) {
    return request({
        url: API_BASE_URL + "/auth/register",
        method: 'POST',
        data: signupRequest
    });
}
