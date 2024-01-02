import { useState } from "react";

function EditProfile({ change }) {
  const [editUser, setEditUser] = useState({
    username: "",
    email: "",
    linkedin: "",
    github: "",
    bbio: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditUser({
      ...editUser,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.reload();
    console.log("The form was submitted: ", editUser);
  };
  return (
    <div className="  rounded-md h-full w-[60%] bg-[#38ca84] my-[30px] flex justify-center items-center flex-col   ">
      <p className="text-[25px] text-white text-center h-[50px] flex justify-center items=center ">Edit Details</p>
      <div className="bg-[#adeccd] w-full p-[20px] flex justify-center items-center rounded-md ">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full h-full   "
        >
          <div className="flex flex-col w-full justify-around items-center h-full ">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={editUser.username}
              onChange={handleInputChange}
              required
              className="h-[35px] border-[1px] border-solid  w-4/5 flex justify-center pl-[10px]  rounded-md p-3 mb-[25px] "
            />

            <input
              type="text"
              name="email"
              placeholder="Email"
              value={editUser.email}
              onChange={handleInputChange}
              required
              className="h-[35px] border-[1px] border-solid  w-4/5 flex justify-center pl-[10px]  rounded-md p-3 mb-[25px] "
            />

            <input
              type="text"
              name="linkedin"
              placeholder="Linkedin URL"
              value={editUser.linkedin}
              onChange={handleInputChange}
              className="h-[35px] border-[1px] border-solid  w-4/5 flex justify-center pl-[10px]  rounded-md p-3 mb-[25px] "
            />

            <input
              type="text"
              name="github"
              placeholder="Github URL"
              value={editUser.github}
              onChange={handleInputChange}
              className="h-[35px] border-[1px] border-solid  w-4/5 flex justify-center pl-[10px]  rounded-md p-3 mb-[25px]"
            />

            <input
              type="text"
              name="Bio"
              placeholder="Bio"
              value={editUser.bio}
              onChange={handleInputChange}
              className="h-[90px] border-[1px] border-solid  w-4/5 flex justify-center rounded-md pl-[10px] mb-[25px] "
            />
          </div>

          <div className="flex h-full w-full justify-center items-center ">
            <button
              className="h-[40px] w-[175px] bg-[#38ca84] rounded-md "
              type="submit"
            >
              Confirm Changes
            </button>
          </div>
          <div />
        </form>
      </div>
    </div>
  );
}
export default EditProfile;
