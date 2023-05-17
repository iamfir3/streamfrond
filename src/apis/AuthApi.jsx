import axiosClient from "../AxiosClient";
const AuthApi = {
    create: (data) => {
        const url = '/auth';
        return axiosClient.post(url, { ...data });
    }
};
export default AuthApi;