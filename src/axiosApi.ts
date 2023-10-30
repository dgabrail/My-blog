import axios from "axios";

const axiosApi = axios.create({
  baseURL: 'https://djabrail-5c49a-default-rtdb.europe-west1.firebasedatabase.app'
})

export default axiosApi