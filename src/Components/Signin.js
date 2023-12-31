import { useState } from "react";
import axios from "axios";

function Signin({ change }) {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
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
          username: "",
          password: "",
          confirmpassword: "",
        });
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="form h-full w-full flex flex-col justify-center items-center pb-[70px] font-serif">
      <p className="md:mb-[25px] text-[30px]">Sign up</p>
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
          className="h-[35px] border-[1px] border-solid w-full flex justify-center pl-[10px] mb-[20px] rounded-md p-3"
        />

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleInputChange}
          required
          className="h-[35px] border-[1px] border-solid w-full flex justify-center pl-[10px] mb-[20px] rounded-md p-3"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          required
          className="h-[35px] border-[1px] border-solid w-full flex justify-center pl-[10px] mb-[20px] rounded-md p-3"
        />

        <input
          type="password"
          name="confirmpassword"
          placeholder="Confirm Password"
          value={formData.confirmpassword}
          onChange={handleInputChange}
          required
          className="h-[35px] border-[1px] border-solid w-full pl-[10px] mb-[20px] rounded-md p-3"
        />

        <div className="w-full flex justify-center mt-[20px]">
          <button
            className="bg-[#38ca84] h-[40px] w-[50%] rounded text-white"
            type="submit"
          >
            Sign Up
          </button>
        </div>
        <div className="w-full flex justify-center mt-[25px]">
          <p>
            Already a User?
            <button className="text-[#38ca84] ml-[10px]" onClick={change}>
              Login{" "}
            </button>
          </p>
        </div>
      </form>
    </div>
  );
}
export default Signin;
