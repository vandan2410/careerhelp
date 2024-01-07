import Navbar from "../Components/Navbar";
import Profile from "../Components/Profile";

function MyProfile() {
  return (
    <div className="h-full w-full  ">
      <Navbar />

      <div className="h-full w-full flex justify-center items-center my-10 ">
        <Profile />
      </div>
    </div>
  );
}

export default MyProfile;
