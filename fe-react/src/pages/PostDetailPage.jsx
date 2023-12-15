import { useState, useEffect, useContext } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { UserContext } from "../userContext";
import PostServices from "../services/PostServices";
import { format } from "date-fns";
import Swal from "sweetalert2";
import Comment from "../components/Comment";
import CommentServices from "../services/CommentServices";
const PostDetailPage = () => {
  const [postInfo, setPostInfo] = useState("");
  const { userInfo } = useContext(UserContext);
  const [redirect, setRedirect] = useState(false);
  const [comments_content, setCommentContent] = useState("");
  const { id } = useParams();
  useEffect(() => {
    PostServices.getById(id)
      .then(({ data }) => {
        setPostInfo(data.data);
      })
      .catch(() => {});
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Do you want to delete this post?",
      showCancelButton: true,
      confirmButtonText: "Delete",
      confirmButtonColor: "#eab5b5",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        PostServices.remove(id)
          .then(() => {
            setRedirect(true);
            Swal.fire("Deleted!", "", "success");
          })
          .catch(() => {
            Swal.fire("Something Wrong!", "", "fail");
          });
      }
    });
  };

  const handleCreateComment = (ev) => {
    ev.preventDefault();
    CommentServices.create({ post_id: id, comments_content })
      .then(() => {
        PostServices.getById(id)
          .then(({ data }) => {
            setPostInfo(data.data);
          })
          .catch(() => {});
        setCommentContent("");
      })
      .catch(() => {});
  };


  if ( redirect || !userInfo.username) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="post-page">
      <h1> {postInfo.title} </h1>

      {postInfo.author && (
        <>
          <time>
            {format(new Date(postInfo.created_at), "MMM d, yyyy HH:mm")}
          </time>
          <div className="author">by @{postInfo.author.username}</div>
        </>
      )}
      {postInfo.author && userInfo.id === postInfo.author.id && (
        <div className="action-button">
          <div className="edit-row">
            <Link to={`/edit/${postInfo.id}`} className="edit-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
              Edit this post
            </Link>
          </div>
          <div className="delete-row">
            <a onClick={() => handleDelete(postInfo.id)} className="delete-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
              Delete this post
            </a>
          </div>
        </div>
      )}
      <div className="image">
        <img src={postInfo.cover}></img>
      </div>
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: postInfo.content }}
      ></div>
      <span className="separator"></span>
      <span className="comment">
        {" "}
        {postInfo.comment_total} Comments
      </span>
      {postInfo.comments &&
        postInfo.comments.map((comment) => (
          <Comment key={comment.id} {...comment} />
        ))}
      <form onSubmit={handleCreateComment}>
        <div className="comment-form">
          <input
            type="textarea"
            placeholder={"Comment"}
            value={comments_content}
            required
            onChange={(ev) => setCommentContent(ev.target.value)}
          />
          <button disabled={comments_content === ""}>Comment</button>
        </div>
      </form>
    </div>
  );
};

export default PostDetailPage;
