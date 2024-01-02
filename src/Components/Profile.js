import { useState } from "react";
import EditProfile from "./EditProfile";
function Profile() {
  
  const [updateProfile, setUpdateProfile] = useState(true);
  const editProfile = () => {
    setUpdateProfile(!updateProfile);
  };
  return updateProfile ? (
    <div className="  rounded-md h-full w-[50%] bg-[#38ca84] mt-[30px] flex justify-center items-center flex-col ">
      <div className="text-[25px]  h-[50px] text-white text-center flex justify-center items-center  ">
        User Details
      </div>
      <div className="bg-[#adeccd] w-full p-[20px] rounded-md text-[18px] mb-[40px] h-full ">
        <div className="mb-4 flex ">
          <p>Username:</p>
          <div className=" w-[70%]  bg-[#ccf5e0] rounded-md ml-2">
            <p className="pl-3">Vandan</p>
          </div>
        </div>
        <div className="mb-4 flex  ">
          <p>Email: </p>
          <div className=" w-[70%]  bg-[#ccf5e0] rounded-md  ml-[43px] ">
            <p className="pl-3">Vandanc71@gmail.com</p>
          </div>
        </div>

        <div className="mb-4 flex  ">
          <p>LinkedIn : </p>
          <div className=" w-[70%]  bg-[#ccf5e0] rounded-md  ml-[13px] ">
            <p className="pl-3"></p>
          </div>
        </div>

        <div className="mb-4 flex  ">
          <p>Github : </p>
          <div className=" w-[70%]  bg-[#ccf5e0] rounded-md  ml-[28px] ">
            <p className="pl-3"></p>
          </div>
        </div>

        <div className="mb-4 flex h-3/5 ">
          <p>Bio : </p>
          <div className=" w-[70%]  bg-[#ccf5e0] rounded-md  ml-[55px] h-24 ">
            <p className="pl-3"></p>
          </div>
        </div>

        <div className=" h-full w-full flex justify-center items-center">
          <button
            className="bg-[#38ca84] text-white px-4 py-2 rounded-md shadow-md  focus:outline-none"
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
