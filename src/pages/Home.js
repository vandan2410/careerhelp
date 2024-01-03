import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import Navbar from "../Components/Navbar";
import Post from "../Components/Post";
function Home() {
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  useEffect(() => {
    const check = localStorage.getItem("isLoggedIn");

    if (check === "false") {
      navigate("/login");
    }
  });
  return (
    <div className="h-full w-full">
      <Navbar/>
      <Post/>
    </div>
  );
}
export default Home;
