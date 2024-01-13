import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

function Navbar({ item }) {
  const navigate = useNavigate();

  const [userIsOpen, setUserIsOpen] = useState(false);

  // const handleInputChange = (event) => {
  //   setSearchValue(event.target.value);
  // };
  const handleIsOpen = async (e) => {
    e.preventDefault();
    setUserIsOpen(!userIsOpen);
  };
  const userName = localStorage.getItem("userName");
  const handleLogout = async (e) => {
    e.preventDefault();

    try {
      await axios.get("http://localhost:5000/api/user/logout");
      localStorage.setItem("isLoggedIn", false);
      localStorage.clear();
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="relative z-50">
      <nav className=" flex  backdrop-blur-md md:shadow-lg items-center relative  font-serif  ">
        <div className="text-[30px]  md:py-0 py-4 text-white ml-[20px]">
          <a href="/home">CareerHelp</a>
        </div>

        <ul
          className={`md:px-2 ml-auto md:flex md:space-x-2  md:relative top-full left-0 right-0`}
        >
          {/* <div
            className="flex justify-center items-center  rounded-full "
            onClick={toggleSearch}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className={
                `w-7 h-7  rounded-full flex items-center justify-center` +
                (isExpanded === true ? "bg-white" : " bg-[#38ca84]")
              }
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>

            <form
              className={
                `md:h-full flex justify-center items-center md:mr-[30px] h-[50%]` +
                (isExpanded === true ? " absolute" : " hidden")
              }
              //onSubmit={handleSubmit}
            >
              <input
                type="text"
                placeholder="Search..."
                // value={}
                // onChange={}
                className="md:h-[50%] h-[50%] rounded-md pl-[10px] md:w-[0px]"
              />
            </form>
          </div> */}
          <li className="relative parent z-50 ">
            <a
              href="/home"
              className="flex justify-between md:inline-flex p-4 items-center  space-x-2"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#c5c2c2"
                  className="w-9 h-9"
                  onClick={handleIsOpen}
                >
                  <path
                    fillRule="evenodd"
                    d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </a>
            <ul
              className={
                `child transition duration-300 md:absolute top-full right-0 md:w-48 bg-transparent md:shadow-lg md:rounded-b p-4 text-[17px] text-[#c5c2c2] z-50 ` +
                (userIsOpen === true ? " absolute  " : " hidden")
              }
            >
              <div className="bg-[#15243a] p-5 rounded-md h-full w-full " >
                <li>
                  <span>Hello, {userName} </span>
                </li>
                <li>
                  <a
                    href="/addpost"
                    className="flex px-4 py-3 hover:text-[#3e6fb8]"
                  >
                    Add Experience
                  </a>
                </li>
                <li>
                  <a
                    href="/profile"
                    className="flex px-4 pb-3 hover:text-[#3e6fb8]"
                  >
                    My Profile
                  </a>
                </li>
                <li>
                  <button
                    className=" w-full bg-[#3e6fb8] text-white rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] md:m-0 mb-[20px]"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              </div>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Navbar;
