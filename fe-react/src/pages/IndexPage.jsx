import { useEffect, useState } from "react";
import Post from "../components/Post";
import PostServices from "../services/PostServices";
import EmptyState from "../components/EmptyState";

const IndexPage = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    PostServices.getAll()
      .then(({data}) => {
        setPosts(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {posts.length > 0 ?
        posts.map((post) => <Post key={post.id} {...post} />) : <EmptyState />}
    </>
  );
};

export default IndexPage;
