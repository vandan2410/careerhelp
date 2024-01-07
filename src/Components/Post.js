import { useState , useEffect} from "react";
import axios from "axios";
function Post({item}) {
  const [isVisible, setIsVisible] = useState(true);
  const [author,setAuthor] = useState([]);
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
    
  const truncatedText = truncateText(originalText, 30); // Truncate to 10 words
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
          <p>
            Contributed by: <a href="/">{author.userName}</a>
          </p>
        </span>
      </div>
    </div>
  );
}
export default Post;
