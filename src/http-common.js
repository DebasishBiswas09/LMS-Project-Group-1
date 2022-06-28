import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:7072/cus",
  headers: {
    "Content-Type": "application/json",
  },
});
