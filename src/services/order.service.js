import httpClient from "../http-common1";

const getAll = () => {
  return httpClient.get("/allOrd");
};

const get = (id) => {
  return httpClient.get(`/getOrd/${id}`);
};

const create = (data) => {
  return httpClient.post("/saveOrd", data);
};

const update = (data) => {
  return httpClient.put("/updateOrd", data);
};

const remove = (id) => {
  return httpClient.delete(`/deleteOrd/${id}`);
};

export default { getAll, create, get, update, remove };
