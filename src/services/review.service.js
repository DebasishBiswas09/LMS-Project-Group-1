import httpClient from "../http-common1";

const getAll = () => {
  return httpClient.get("/viewallreview");
};

const create = (data) => {
  return httpClient.post("/savereview", data);
};

const remove = (id) => {
  return httpClient.delete(`/deletereview/${id}`);
};

export default { getAll, create, remove };
