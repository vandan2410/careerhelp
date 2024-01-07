import { useState } from "react";
import EditProfile from "./EditProfile";
function Profile() {
  
  const [updateProfile, setUpdateProfile] = useState(true);
  const editProfile = () => {
    setUpdateProfile(!updateProfile);
  };
  return updateProfile ? (
    <div className="  rounded-md h-full w-[50%] backdrop-blur-sm mt-[30px] flex justify-center items-center flex-col text-[#fffefe] ">
      <div className="text-[25px]  h-[70px]  text-center flex justify-center items-center p-4 bg-[#183053] w-full">
        User Details
      </div>
      <div className=" w-full p-[20px] rounded-md text-[18px] mb-[40px] h-full ">
        <div className="mb-4 flex ">
          <p>Username:</p>
          <div className=" w-[70%]   rounded-md ml-2">
            <p className="pl-3">Vandan</p>
          </div>
        </div>
        <div className="mb-4 flex  ">
          <p>Email: </p>
          <div className=" w-[70%]   rounded-md  ml-[43px] ">
            <p className="pl-3">Vandanc71@gmail.com</p>
          </div>
        </div>

        <div className="mb-4 flex  ">
          <p>LinkedIn : </p>
          <div className=" w-[70%]   rounded-md  ml-[13px] ">
            <p className="pl-3"></p>
          </div>
        </div>

        <div className="mb-4 flex  ">
          <p>Github : </p>
          <div className=" w-[70%]   rounded-md  ml-[28px] ">
            <p className="pl-3"></p>
          </div>
        </div>

        <div className="mb-4 flex h-3/5 ">
          <p>Bio : </p>
          <div className=" w-[70%]   rounded-md  ml-[55px] h-24 ">
            <p className="pl-3"></p>
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
    <EditProfile change={editProfile} />
  );
}
export default Profile;
