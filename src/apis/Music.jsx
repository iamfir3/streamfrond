import axiosClient from "../AxiosClient";
const Music = {
    getAll: () => {
        const url = '/music';
        return axiosClient.get(url);
    },
    search: (keyword) => {
        const url = `/music/search/${keyword}`
        return axiosClient.get(url);
    }
};
export default Music;