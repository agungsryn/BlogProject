/* eslint-disable react/prop-types */
import { format } from "date-fns";
import { useContext } from "react";
import { UserContext } from "../userContext";
import Swal from "sweetalert2";
import CommentServices from "../services/CommentServices";

const handleDelete = (id) => {
  Swal.fire({
    title: "Do you want to delete this post?",
    showCancelButton: true,
    confirmButtonText: "Delete",
    confirmButtonColor: "#eab5b5",
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      CommentServices.remove(id)
        .then(() => {
          window.location.reload();
          Swal.fire("Deleted!", "", "success");
        })
        .catch(() => {
          Swal.fire("Something Wrong!", "", "fail");
        });
    }
  });
};

const Comment = ({ id, commentator, comments_content, created_at }) => {
  const { userInfo } = useContext(UserContext);
  return (
    <div className="comment">
      <div className="commentator">
        <p className="info">
          <a className="author">{commentator.username}</a>
          <time>{format(new Date(created_at), "MMM d, yyyy HH:mm")}</time>
          {userInfo.id === commentator.id && (
            <>
              <a className="action" onClick={() => handleDelete(id)}>
                Delete
              </a>
            </>
          )}
        </p>
        <p className="summary">{comments_content}</p>
      </div>
    </div>
  );
};

export default Comment;
