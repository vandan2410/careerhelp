import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
function Navbar(props) {
  const navigate = useNavigate();
  const userName = localStorage.getItem("userName");
  const [isOpen, setIsOpen] = useState(false);
  const handleIsOpen = async (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };
  const handleLogout = async (e) => {
    e.preventDefault();

    try {
      await axios.get("http://localhost:5000/api/user/logout");
      localStorage.setItem("isLoggedIn", false);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <nav class=" flex px-4 border-b md:shadow-lg items-center relative bg-[#38ca84] font-serif ">
      <div class="text-[30px]  md:py-0 py-4 text-white ">CareerHelp</div>

      <ul
        class={
          "md:px-2 ml-auto md:flex md:space-x-2 absolute md:relative top-full left-0 right-0"
        }
      >
        <li class="relative parent">
          <a
            href="/home"
            class="flex justify-between md:inline-flex p-4 items-center  space-x-2"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-9 h-9"
                onClick={handleIsOpen}
              >
                <path
                  fill-rule="evenodd"
                  d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            
          </a>
          <ul
            class={
              `child transition duration-300 md:absolute top-full right-0 md:w-48 bg-white md:shadow-lg md:rounded-b p-4 text-[17px] ` +
              (isOpen === true ? " absolute" : " hidden")
            }
          >
            <li>
              <span>Hello , {userName}</span>
            </li>
            <li>
              <a href="/home" class="flex px-4 py-3 hover:bg-gray-50">
                Add Experience
              </a>
            </li>
            <li>
              <button
                className=" w-full bg-[#38ca84] text-white rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] md:m-0 mb-[20px]"
                onClick={handleLogout}
              >
                Logout
              </button>
            </li>
          </ul>
        </li>
      </ul>
      {/* <div class="ml-auto md:hidden text-gray-500 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5 fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
        </svg>
      </div> */}
    </nav>
  );
}
export default Navbar;
