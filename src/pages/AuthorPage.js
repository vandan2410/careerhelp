import Author from "../Components/Author";
import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
function AuthorPage(props) {
  //const location = useLocation();
  const { authorId } = useParams();

  return (
    <div>
      <Navbar />
      <div className="h-full w-full flex items-center justify-center my-10">
        <Author item={authorId} />
      </div>
    </div>
  );
}

export default AuthorPage;
