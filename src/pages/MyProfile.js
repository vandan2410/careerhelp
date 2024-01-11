import Navbar from "../Components/Navbar";
import Profile from "../Components/Profile";
import UserPosts from "../Components/UserPosts";

function MyProfile() {
  return (
    <div className="h-full w-full flex flex-col ">
      <Navbar />

      <div className="h-full w-full flex justify-center items-center my-10 ">
        <Profile />
      </div>
      <div className="h-full w-full flex justify-center items-center my-10 " >
        <UserPosts/>
      </div>
    </div>
  );
}

export default MyProfile;
