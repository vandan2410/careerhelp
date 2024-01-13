import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import AddPost from "./pages/AddPost";
import MyProfile from "./pages/MyProfile";
import AuthorPage from "./pages/AuthorPage";

import EditPosts from "./pages/EditPosts";


function App() {
  return (
    <div className="App font-serif ">
      <BrowserRouter>
        <Routes>
          <Route index element={<Landing />} />
          <Route path="/login" element={<Landing />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/profile" element={<MyProfile/>}></Route>
          <Route path="/addpost" element={<AddPost/>}></Route>
          <Route path="/authorpage/:authorId" element={<AuthorPage/>}></Route>
          <Route path="/editpost/:postId" element={<EditPosts/>}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
