import React, { useState } from "react";
import Signin from "./Signin";
import axios from "axios";
import { useNavigate } from "react-router";
import { useEffect } from "react";
function Login() {
  const [isNewUser, setIsNewUser] = useState(true);
  const handleClick = () => {
    setIsNewUser(!isNewUser);
  };
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  useEffect(() => {
    const check = localStorage.getItem("isLoggedIn");
    if (check === "true") {
      navigate("/home");
    }
  });
console.log(process.env.REACT_APP_BASE_URL)
  const handleSubmit = (e) => {
    e.preventDefault();
  
    axios
      .post(`${process.env.REACT_APP_BASE_URL}/user/login`, formData)
      .then((res) => {
        
        if (res.status === 200) {
          localStorage.setItem("isLoggedIn", "true");
          localStorage.setItem("userName",res.data.payload.userName)
          localStorage.setItem("userId",res.data.payload.id)
          console.log(res.data.payload)
          navigate("/home");
        } else {
          alert("No Record");
        }

        setFormData({
          email: "",
          password: "",
        });
      })
      .catch((err) => console.log(err));
  };

  return isNewUser ? (
    <div className="form h-full w-full flex flex-col justify-center items-center md:pb-[100px] pb-[70px] ">
      <p className="mb-[25px] text-[30px] text-[#c5c2c2] ">Login</p>
      <form
        className="w-[40%] flex justify-center  flex-col "
        id="loginForm"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          required
          className="h-[35px] border-b-[1px]  w-full flex justify-center pl-[10px] mb-[20px]  p-3 bg-transparent text-[#c5c2c2] focus:outline-none "
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          required
          className="h-[35px] border-b-[1px]  w-full flex justify-center pl-[10px] mb-[20px]  p-3 bg-transparent text-[#c5c2c2] focus:outline-none "
        />
        <div className="w-full flex justify-center mt-[25px]">
          <button
            className="bg-[#3e6fb8] h-[40px] w-[100px] rounded text-[#fffefe]"
            type="submit"
          >
            Login
          </button>
        </div>
        <div className="w-full flex justify-center items-center mt-[25px]">
          <p className="text-[#f7f5f5]">
            New User?
            <button className="text-[#7aafff] ml-[10px]" onClick={handleClick}>
              Sign up
            </button>
          </p>
        </div>
      </form>
    </div>
  ) : (
    <Signin change={handleClick} />
  );
}
export default Login;
