import axios from "axios";
const instance = axios.create({
  baseURL: "https://us-central1-clone-3af92.cloudfunctions.net/api", // API fetch function (coud function)
});
export default instance;
// "http://127.0.0.1:5001/clone-3af92/us-central1/api" local server