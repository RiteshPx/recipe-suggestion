import axios from "axios";
const Backend_Url = 'http://localhost:4000'              //process.env.REACT_APP_API_BASE_URL

// Create Axios instance
const axiosInstance = axios.create({
  baseURL: `${Backend_Url}/api/`,
});


//
export const aApi = async () => {
    return axiosInstance.get('/aa');
}

//
export const aaApi = async (payload) => {
    return axiosInstance.post('/aaa', payload);
}

