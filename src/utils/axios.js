import axios from "axios";

axios.defaults.baseURL =
  import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";
axios.defaults.withCredentials = true;

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401 && window.location.pathname !== "/") {
      window.location.href = "/"
      window.localStorage.removeItem("auth");
    }
    return Promise.reject(error);
  }
);

export default axios;
