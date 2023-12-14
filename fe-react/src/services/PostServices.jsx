import http from "../http-common";

const getAll = () => {
  return http.get("/posts");
};

const getById = (id) => {
  return http.get(`/post/${id}`);
};

const create = (data) => {
  return http.post("/posts", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

const update = (id, data) => {
  return http.patch(`/post/${id}`, data, {});
};

const remove = (id) => {
  return http.delete(`/post/${id}`);
};
const PostServices = {
  getAll,
  getById,
  create,
  update,
  remove,
};

export default PostServices;
