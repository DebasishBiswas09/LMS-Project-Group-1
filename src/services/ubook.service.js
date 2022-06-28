import httpClient from "../http-common1";

const getAll = () => {
  return httpClient.get("/getuserbook");
};
export default { getAll};