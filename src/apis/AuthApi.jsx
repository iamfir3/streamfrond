import axiosClient from "../AxiosClient";
const AuthApi = {
    create: (data) => {
        const url = '/auth';
        return axiosClient.post(url, { ...data });
    },
    login: (data) => {
        const url = '/auth/login';
        return axiosClient.post(url, { ...data });
    }
};
export default AuthApi;