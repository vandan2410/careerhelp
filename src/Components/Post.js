import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
function Post({ item }) {
  const [isVisible, setIsVisible] = useState(true);
  const [author, setAuthor] = useState([]);
  const handlePost = async (e) => {
    e.preventDefault();
    setIsVisible(!isVisible);
  };

  const userId = item.authorId;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/user/userDetails/${userId}`
        );
        setAuthor(response.data.payload);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [userId]);

  

  function truncateText(text, maxLength) {
    const words = text.split(" ");
    const truncated = words.slice(0, maxLength).join(" ");

    return truncated + (words.length > maxLength ? "..." : ""); // Append ellipsis if truncated
  }

  const originalText = item.content;

  const authorId = item.authorId;
 

  const truncatedText = truncateText(originalText, 30); // Truncate to 10 words
  return (
    <div className="min-h-full w-full flex-col backdrop-blur-md px-5 py-2 mb-4">
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

      <div className="flex p-3 w-full justify-around items-center  flex-col sm:flex-row ">
        <p className="my-2 md:my-0" >Batch: {item.batch}</p>
        <p className="my-2 md:my-0" >CTC: {item.ctc}</p>
        <span className="flex justify-center items-center">
          <p>
            Contributed by :
            <Link to={{ pathname: `/authorpage/${authorId}`,   }}>
              {author.userName}
            </Link>
          </p>
        </span>
      </div>
    </div>
  );
}
export default Post;
