import { useState } from "react";


import axios from "axios";
import { useNavigate } from "react-router-dom";
function UserPost({ item }) {
  const [isVisible, setIsVisible] = useState(true);
  
  
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
 
  axios.defaults.withCredentials = true;
  const config = {
    headers: {
      Authorization: allconfig, // Assuming it's a Bearer token
    },
  };
  const handlePost = async (e) => {
    e.preventDefault();
    setIsVisible(!isVisible);
  };

  function truncateText(text, maxLength) {
    const words = text.split(" ");
    const truncated = words.slice(0, maxLength).join(" ");

    return truncated + (words.length > maxLength ? "..." : ""); // Append ellipsis if truncated
  }

  const originalText = item.content;

  const truncatedText = truncateText(originalText, 30); // Truncate to 10 words
  const postId=item.id;
  const navigate = useNavigate();
  const handleEdit = async (e) =>{
    e.preventDefault();
    navigate(`/editpost/${postId}`)
  }

  const handleDelete = async (e) => {
    e.preventDefault();
    
      try {
        const response = await axios.delete(
          `${process.env.REACT_APP_BASE_URL}/post/removePost/${postId}`,{withCredentials:true}
        );
        if(response.status===200)
        {
          alert("Post Deleted Successfully")
          window.location.reload();
        }
        else{
          alert("Error");
        }
        
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    
  }

  return (
    <div className="h-full w-full flex-col backdrop-blur-md px-5 py-2 mb-4">
      <div className="content-preview flex w-full" onClick={handlePost}>
        {isVisible ? (
          <p>
            {truncatedText}
            <button
              onClick={handlePost}
              className={`${isVisible ? "block" : "hidden"}`}
            >
              Show More
            </button>
          </p>
        ) : (
          <p>
            {originalText}
            <button
              onClick={handlePost}
              className={`${isVisible ? "block" : "hidden"}`}
            >
              Show More
            </button>
          </p>
        )}
      </div>

      <div className="flex p-3 w-full justify-around items-center">
        <p>Batch: {item.batch}</p>
        <p>CTC: {item.ctc}</p>
        <span className="flex justify-center items-center">
          <div className="bg-[#183053] p-2 rounded-md mx-2 " onClick={handleEdit} >
            <img className="h-6 w-6  " src="./img/edit.png" alt="" />
          </div>
          <div className="bg-[#183053] p-2 rounded-md"  onClick={handleDelete}>
            <img className="h-6 w-7  " src="./img/trash.png" alt="" />
          </div>
        </span>
      </div>
    </div>
  );
}
export default UserPost;
