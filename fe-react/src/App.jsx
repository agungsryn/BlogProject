// import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import IndexPage from "./pages/IndexPage";
import CreatePostPage from "./pages/CreatePostPage";
import PostDetailPage from "./pages/PostDetailPage";
import EditPostPage from "./pages/EditPostPage";
import LoginPage from "./pages/LoginPage";
import { UserContextProvider } from "./userContext";

function App() {
  return (
    <>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<IndexPage />} />
            <Route path={"/login"} element={<LoginPage />} />
            {/* <Route path={"/register"} element={<RegisterPage />} /> */}
            <Route path={"/create"} element={<CreatePostPage />} />
            <Route path={"/post/:id"} element={<PostDetailPage />} />
            <Route path={"/edit/:id"} element={<EditPostPage />} />
          </Route>
        </Routes>
      </UserContextProvider>
    </>
  );
}

export default App;
