import axios from "axios";

const storageData = localStorage.getItem("user-storage");
let token;
if (storageData) {
  const object = JSON.parse(storageData);
  token = object.state.token;
} else {
  token = "";
}

export const axiosClient = axios.create({
  baseURL: "http://localhost:4000/", // Replace with your API's base URL
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`, // Set the Authorization header
  },
});
