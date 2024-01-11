import axios from "axios";
import { useState } from "react";
//import Cookies from 'js-cookie'
function Form() {
  const [formData, setFormData] = useState({
    title: "",
    batch: "",
    companyName: "",
    content: "",
    ctc: "",
    isAnonymous: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const fieldValue = name === 'batch' || name === 'ctc' ? (parseInt(value) || 0) : value;

    setFormData({
      ...formData,
      [name]: fieldValue,
    });
  };

  const handleCheckboxChange = (e) => {
    const { checked } = e.target;
    setFormData({
      ...formData,
      isAnonymous: checked,
      // Other form data updates if needed
    });
  };
  function getCookieValue(cookieName) {
    const cookies = document.cookie.split(';');
    
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      const [name, value] = cookie.split('=');
      
      if (name === cookieName) {
        return decodeURIComponent(value);
      }
    }
    
    return null; // Return null if cookie not found
  }
  
  // Usage:
  const allconfig = getCookieValue("bigCookie");
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        Authorization:
          allconfig, // Assuming it's a Bearer token
      },
    };
   



    
    try {
      const { ctc, batch, ...rest } = formData;

      const body = {
        ctc: Number(ctc),
        batch: Number(batch),
        ...rest,
      };

      await axios.post("http://localhost:5000/api/post/newPost", body, config);

      console.log(formData); // Log the form data
      setFormData({
        title: "",
        batch: "",
        companyName: "",
        content: "",
        ctc: "",
        isAnonymous: false,
      });
      alert("Post Added");
    } catch (err) {
      console.log(err);
      alert("Error occurred while adding the post");
    }
  };
  return (
    <form className="h-full w-full backdrop-blur-sm  " onSubmit={handleSubmit}>
      <div className="h-[15%] w-full flex md:flex-row flex-col justify-around items-center  ">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
          className=" md:w-2/5 md:h-3/5  pl-3 w-[90%] h-2/5 m-[5px] mt-[10px] bg-transparent border-b-[1px] focus:outline-none text-[#fffefe] "
        />

        <input
          type="number"
          name="batch"
          placeholder="Batch"
          value={formData.batch}
          onChange={handleChange}
          required
          className=" md:w-2/5 md:h-3/5 bg-transparent border-b-[1px] pl-3 w-[90%] h-2/5 m-[5px] focus:outline-none text-[#fffefe] "
        />
      </div>

      <div className="h-[15%] w-full flex md:flex-row flex-col justify-around items-center">
        <input
          type="text"
          name="companyName"
          placeholder="Company Name"
          value={formData.companyName}
          onChange={handleChange}
          required
          className="md:w-2/5 md:h-3/5 bg-transparent border-b-[1px] pl-3 w-[90%] h-2/5 m-[5px] focus:outline-none text-[#fffefe] "
        />

        <input
          type="number"
          name="ctc"
          placeholder="CTC per annum"
          value={formData.ctc}
          onChange={handleChange}
          required
          className="md:w-2/5 md:h-3/5 bg-transparent border-b-[1px] pl-3 w-[90%] h-2/5 m-[5px] text-[#fffefe] focus:outline-none "
          style={{ "::placeholder": { color: "#fffefe" } }}
        />
      </div>

      <div className="h-[50%] w-full flex justify-center items-center ">
        <textarea
          type="textarea"
          name="content"
          placeholder="Complete Information about the process in brief"
          value={formData.content}
          onChange={handleChange}
          required
          className="bg-transparent border-[1px] resize-y w-[90%] h-[90%] focus:outline-none relative pl-2 text-[#fffefe] placeholder-top-left pt-2 "
          style={{ "::placeholder": { color: "#fffefe" } }}
        />
      </div>

      <div className="h-1/10 flex justify-start gap-4 items-center ">
        <label className="h-full  text-[18px] pl-[40px] text-[#fffefe] ">
          Make Post Anonymous:
        </label>
        <input
          type="checkbox"
          name="isAnonymous"
          checked={formData.isAnonymous}
          onChange={handleCheckboxChange}
          className="h-[18px] w-[18px] border-2 border-gray-400 rounded-sm focus:ring-2 focus:ring-gray-400 "
        />
      </div>

      <div className="h-1/10 w-full flex justify-center items-center ">
        <button
          className="bg-[#3e6fb8] h-[40px] w-[100px] rounded-md m-[20px] md:m-0 text-[#fffefe] "
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
export default Form;
