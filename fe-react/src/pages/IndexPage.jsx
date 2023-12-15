import { useContext, useEffect, useState } from "react";
import Post from "../components/Post";
import PostServices from "../services/PostServices";
import EmptyState from "../components/EmptyState";
import { UserContext } from "../userContext";
import { Navigate } from "react-router-dom";

const IndexPage = () => {
  const [posts, setPosts] = useState([]);
  const { userInfo } = useContext(UserContext);
  useEffect(() => {
    PostServices.getAll()
      .then(({data}) => {
        setPosts(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  
  if(!userInfo) {
    return <Navigate to={'/'} />
   }
  return (
    <>
      {posts.length > 0 ?
        posts.map((post) => <Post key={post.id} {...post} />) : <EmptyState />}
    </>
  );
};

export default IndexPage;
