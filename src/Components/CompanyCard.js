import { useEffect, useState } from "react";
import Post from "./Post";
import axios from "axios";

function CompanyCard({ item }) {
  const [postVisible, setPostVisible] = useState(false);
  const [posts, setPosts] = useState([]);

  const togglePostVisibility = () => {
    setPostVisible(!postVisible);
  };
  const comapnyId = item.id;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/post/getPostsbyCompanyId/${comapnyId}`
        );
        setPosts(response.data.payload);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [comapnyId]);

  return (
    <div className="w-3/5 h-1/10 backdrop-blur-md  flex justify-start items-center text-[#c5c2c2] m-1 flex-col">
      <div
        className="text-[20px] p-5 flex  items-center w-full bg-[#152337]"
        onClick={togglePostVisibility}
      >
        <img
          src={
            postVisible ? "./img/triangleDown.png" : "./img/triangleRight.png"
          }
          className="w-4 h-4 mr-3"
          alt=""
        />
        <p>{item.name}</p>
      </div>
      <div className={`w-full  ${postVisible ? "block" : "hidden"}`}>
        {posts.map((post) => (
          <Post key={post.id} item={post} />
        ))}
      </div>
    </div>
  );
}
export default CompanyCard;
