import { AxiosInstance, AxiosResponse } from 'axios';

type SignupPayload = {
    email: string;
    password: string;
    first_name: string;
    last_name: string;
    user_role_id: number;
};

type LoginPayload = {
    email: string;
    password: string;
};

type GetUser = {
    token: string;
};

type UserEndpoints = {
    get: () => Promise<AxiosResponse>;
    login: (payload: LoginPayload) => Promise<AxiosResponse>;
    signup: (payload: SignupPayload) => Promise<AxiosResponse>;
};

export default (api: AxiosInstance): UserEndpoints => {
    const get = async (): Promise<AxiosResponse> => api.get(`/posts`);

    const login = async (payload: LoginPayload): Promise<AxiosResponse> => api.post('/user/login', payload);

    const signup = async (payload: SignupPayload): Promise<AxiosResponse> => api.post('/user/signup', payload);

    return {
        get,
        login,
        signup,
    };
};
