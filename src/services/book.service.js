import httpClient from "../http-common1";

const getAll = () => {
  return httpClient.get("/allbooks");
};

const get = (id) => {
  return httpClient.get(`/getbooks/${id}`);
};

const create = (data) => {
  return httpClient.post("/savebook", data);
};

const update = (data) => {
  return httpClient.put("/updatebooks", data);
};

const remove = (id) => {
  return httpClient.delete(`/deleteBooks/${id}`);
};

export default { getAll, create, get, update, remove };
