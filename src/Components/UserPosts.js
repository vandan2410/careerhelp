import UserPost from "./UserPost";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function UserPosts() {
  const [userPost, setUserPosts] = useState([]);
  function getCookieValue(cookieName) {
    const cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      const [name, value] = cookie.split("=");

      if (name === cookieName) {
        return decodeURIComponent(value);
      }
    }

    return null; // Return null if cookie not found
  }
  const allconfig = getCookieValue("bigCookie");
 

  const config = {
    headers: {
      Authorization: allconfig, // Assuming it's a Bearer token
    },
  };
  const userId = localStorage.getItem("userId");
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/post/userPosts/${userId}`,config
        );
        setUserPosts(response.data.payload);
        
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [userId]);
  return (
    <div className="w-3/5 h-full text-[#c5c2c2] flex flex-col justify-center items-center backdrop-blur-sm">
      <div className="bg-[#183053] w-full ">
        <p className="text-[25px] p-4  text-center">My Posts</p>
      </div>
      <div className="h-full w-full m-4">
      {userPost.map((post) => (
          <UserPost key={post.id} item={post} />
        ))}
      </div>
    </div>
  );
}

export default UserPosts;
