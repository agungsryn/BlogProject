import { Navigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Editor from "../components/Editor";
import PostServices from "../services/PostServices";

const EditPostPage = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");
  //   const [cover, serCover] = useState("");
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    PostServices.getById(id)
      .then(({ data }) => {
        setTitle(data.data.title);
        setContent(data.data.content);
        setSummary(data.data.summary);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);

  const handleUpdatePost = async (ev) => {
    ev.preventDefault();
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("id", id);
    if (files?.[0]) {
      data.set("file", files?.[0]);
    }
    PostServices.update(id, data)
      .then(() => {
        setRedirect(true);
      })
      .catch((err) => {
        console.log(err);
      });
    // const response = await fetch("http://localhost:8000/post", {
    //   method: "PUT",
    //   body: data,
    //   credentials:'include'
    // });
  };

  if (redirect) return <Navigate to={"/post/" + id} />;

  return (
    <form onSubmit={handleUpdatePost}>
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
      <input type="file" onChange={(ev) => setFiles(ev.target.files)} />
      <Editor onChange={setContent} value={content} />
      <button style={{ marginTop: "5px" }}>Update Post</button>
    </form>
  );
};

export default EditPostPage;
