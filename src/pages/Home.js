import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import Navbar from "../Components/Navbar";
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
    <div className="h-screen w-full">
      <div className="h-[10%] w-[full]">
        <Navbar />
      </div>
      {/* <div>
        <form
          className="md:h-full flex justify-center items-center md:mr-[30px] h-[50%]"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Search..."
            value={searchData.search}
            onChange={handleSearchChange}
            className="md:h-[50%] h-[50%] rounded-md pl-[10px] md:w-[0px]"
          />
          
        </form>
      </div> */}
    </div>
  );
}
export default Home;
