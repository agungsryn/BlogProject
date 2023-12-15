import http from "../http-common";


const create = (data) => {
  return http.post("/comment", data, {
    // headers: {
    //   "Content-Type": "multipart/form-data",
    // },
  });
};


const remove = (id) => {
  return http.delete(`/comment/${id}`);
};
const CommentServices = {
  create,
  remove,
};

export default CommentServices;
