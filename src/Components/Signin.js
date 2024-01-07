import { useState } from "react";
import axios from "axios";

function Signin({ change }) {
  const [formData, setFormData] = useState({
    email: "",
    userName: "",
    password: "",
    confirmpassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmpassword) {
      console.log("Password doesn't match");

      return;
    }
    console.log(formData);
    axios
      .post("http://localhost:5000/api/user/register", formData)
      .then((res) => {
        console.log(res);
        setFormData({
          email: "",
          userName: "",
          password: "",
          confirmpassword: "",
        });
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="form h-full w-full flex flex-col justify-center items-center md:pb-[70px] font-serif pb-[40px]">
      <p className="md:mb-[25px] text-[30px] text-[#c5c2c2] ">Sign up</p>
      <form
        className="w-[40%] flex justify-center  flex-col"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          required
          className="h-[35px] border-b-[1px]  w-full  pl-[10px] mb-[20px] text-[#c5c2c2] focus:outline-none p-3 bg-transparent  "
        />

        <input
          type="text"
          name="userName"
          placeholder="Username"
          value={formData.userName}
          onChange={handleInputChange}
          required
          className="h-[35px] border-b-[1px]  w-full  pl-[10px] mb-[20px] text-[#c5c2c2] p-3 bg-transparent focus:outline-none "
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          required
          className="h-[35px] border-b-[1px]  w-full  pl-[10px] mb-[20px] text-[#c5c2c2] p-3 bg-transparent focus:outline-none "
        />

        <input
          type="password"
          name="confirmpassword"
          placeholder="Confirm Password"
          value={formData.confirmpassword}
          onChange={handleInputChange}
          required
          className="h-[35px] border-b-[1px]  w-full pl-[10px] mb-[20px] text-[#c5c2c2] p-3 bg-transparent focus:outline-none "
        />

        <div className="w-full flex justify-center md:mt-[20px]">
          <button
            className="bg-[#3e6fb8] h-[40px] w-[50%] rounded text-[#fffefe]  "
            type="submit"
          >
            Sign Up
          </button>
        </div>
        <div className="w-full flex justify-center mt-[25px]">
          <p className="text-[#c5c2c2]">
            Already a User?
            <button className="text-[#7aafff] ml-[10px]" onClick={change}>
              Login{" "}
            </button>
          </p>
        </div>
      </form>
    </div>
  );
}
export default Signin;
