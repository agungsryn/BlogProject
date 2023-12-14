import { useState } from "react";
import { Navigate } from "react-router-dom";
import Editor from "../components/Editor";
import PostServices from "../services/PostServices";

const CreatePostPage = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState(null);
  const [redirect, setRedirect] = useState(false);
  const handleCreatePost = async (ev) => {
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("file", files);
    ev.preventDefault();

    PostServices.create(data)
      .then(() => {
        setRedirect(true);
      })
      .catch((err) => {
        console.log("err", err);
      });

    // if (response.ok) {
    //   setRedirect(true);
    // }
  };

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <form onSubmit={handleCreatePost}>
      <input
        type="title"
        placeholder={"Title"}
        value={title}
        onChange={(ev) => setTitle(ev.target.value)}
      />
      <input
        type="summary"
        placeholder={"Summary"}
        value={summary}
        onChange={(ev) => setSummary(ev.target.value)}
      />
      <input
        type="file"
        onChange={(ev) => {
          console.log("ev.target.files", ev.target.files[0]);
          setFiles(ev.target.files[0]);
        }}
      />
      <Editor value={content} onChange={setContent} />
      <button style={{ marginTop: "5px" }}>Create Post</button>
    </form>
  );
};

export default CreatePostPage;
