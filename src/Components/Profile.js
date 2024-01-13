import { useState , useEffect } from "react";
import EditProfile from "./EditProfile";
import axios from "axios";
function Profile() {
  
  const [updateProfile, setUpdateProfile] = useState(true);
  const [user,setUser] = useState([]);
  const editProfile = () => {
    setUpdateProfile(!updateProfile);
  };
  const userId=localStorage.getItem("userId");
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/user/userDetails/${userId}`
        );
        setUser(response.data.payload);
        
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [userId]);
  
  
  
  return updateProfile ? (
    <div className="  rounded-md h-full w-[50%] backdrop-blur-sm mt-[30px] flex justify-center items-center flex-col text-[#fffefe] ">
      <div className="text-[25px]  h-[70px]  text-center flex justify-center items-center p-4 bg-[#183053] w-full">
        User Details
      </div>
      <div className=" w-full p-[20px] rounded-md text-[18px] mb-[40px] h-full ">
        <div className="mb-4 flex overflow-hidden ">
          <p>Username:</p>
          <div className=" w-[70%]   rounded-md ml-2">
            <p className="pl-3">{user.userName}</p>
          </div>
        </div>
        <div className="mb-4 flex overflow-hidden ">
          <p>Email: </p>
          <div className=" w-[70%]   rounded-md  ml-[43px] ">
            <p className="pl-3">{user.email}</p>
          </div>
        </div>

        <div className="mb-4 flex overflow-hidden ">
          <p>LinkedIn:  </p>
          <div className=" w-[70%]   rounded-md  ml-[13px] ">
            <p className="pl-3">{user.linkedinUrl}</p>
          </div>
        </div>

        <div className="mb-4 flex overflow-hidden ">
          <p>Github: </p>
          <div className=" w-[70%]   rounded-md  ml-[28px] ">
            <p className="pl-3">{user.githubUrl}</p>
          </div>
        </div>

        <div className="mb-4 flex h-3/5 overflow-hidden ">
          <p>Bio: </p>
          <div className=" w-[70%]   rounded-md  ml-[55px] h-24 ">
            <p className="pl-3">{user.bio}</p>
          </div>
        </div>

        <div className=" h-full w-full flex justify-center items-center">
          <button
            className=" bg-[#3e6fb8] px-4 py-2 rounded-md shadow-md  focus:outline-none "
            onClick={editProfile}
          >
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  ) : (
    <EditProfile item={user} />
  );
}
export default Profile;
