import { useEffect, useState } from "react";
import axios from "axios";
function Author({item}) {

  const [author,setAuthor] =useState([])
  const authorId=item;
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/user/userDetails/${authorId}`
        );
        setAuthor(response.data.payload);
      } catch (error) {
        alert("Error Fetching error")
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [authorId]);
    
    return  (
        <div className="  rounded-md h-full w-[50%] backdrop-blur-sm mt-[30px] flex justify-center items-center flex-col text-[#fffefe] ">
          <div className="text-[25px]  h-[70px]  text-center flex justify-center items-center p-4 bg-[#183053] w-full">
            User Details
          </div>
          <div className=" w-full p-[20px] rounded-md text-[18px] mb-[40px] h-full ">
            <div className="mb-4 flex ">
              <p>Username:</p>
              <div className=" w-[70%]   rounded-md ml-2">
                <p className="pl-3">{author.userName}</p>
              </div>
            </div>
            <div className="mb-4 flex  ">
              <p>Email: </p>
              <div className=" w-[70%]   rounded-md  ml-[43px] ">
                <p className="pl-3">{author.email}</p>
              </div>
            </div>
    
            <div className="mb-4 flex  ">
              <p>LinkedIn : </p>
              <div className=" w-[70%]   rounded-md  ml-[13px] ">
                <p className="pl-3">{author.linkedinUrl}</p>
              </div>
            </div>
    
            <div className="mb-4 flex  ">
              <p>Github : </p>
              <div className=" w-[70%]   rounded-md  ml-[28px] ">
                <p className="pl-3">{author.githubUrl}</p>
              </div>
            </div>
    
            <div className="mb-4 flex h-3/5 ">
              <p>Bio : </p>
              <div className=" w-[70%]   rounded-md  ml-[55px] h-24 ">
                <p className="pl-3">{author.bio}</p>
              </div>
            </div>
            <div className="w-full flex justify-center items-center" >
              <button className="bg-[#3e6fb8] py-2 px-4 rounded-md "  type=""><a href="/home">Go Back</a></button>
            </div>
    
           
          </div>
        </div>
      ) 
}
export default Author;