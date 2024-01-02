import { useState } from "react";
function Form() {
  const [formData, setFormData] = useState({
    title: "",
    batch: "",
    companyName: "",
    companyProcess: "",
    ctc: "",
    
    isAnonymous: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    const { checked } = e.target;
    if (checked) {
      setFormData({
        ...formData,
        isAnonymous: checked,
        
         // Clears LinkedIn when anonymous
      });
    } else {
      setFormData({
        ...formData,
        isAnonymous: checked,
        
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your submission logic here
    console.log(formData); // Example: Log the form data
    setFormData({
      title: "",
      batch: "",
      companyName: "",
      companyProcess: "",
      ctc: "",
      
      isAnonymous: false,
    });
  };
  return (
    <form className="h-full w-full bg-[#adeccd]  " onSubmit={handleSubmit}>
      <div className="h-[15%] w-full flex md:flex-row flex-col justify-around items-center  ">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
          className=" md:w-2/5 md:h-3/5 rounded-[6px] pl-3 w-[90%] h-2/5 m-[5px] mt-[10px] "
        />

        <input
          type="text"
          name="batch"
          placeholder="Batch"
          value={formData.batch}
          onChange={handleChange}
          required
          className=" md:w-2/5 md:h-3/5 rounded-[6px] pl-3 w-[90%] h-2/5 m-[5px] "
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
          className="md:w-2/5 md:h-3/5 rounded-[6px] pl-3 w-[90%] h-2/5 m-[5px]"
        />

        <input
          type="text"
          name="ctc"
          placeholder="CTC per annum"
          value={formData.ctc}
          onChange={handleChange}
          required
          className="md:w-2/5 md:h-3/5 rounded-[6px] pl-3 w-[90%] h-2/5 m-[5px]"
        />
      </div>

      <div className="h-[50%] w-full flex justify-center items-center ">
        <input
          type="text"
          name="companyProcess"
          placeholder="Complete Information about the process in brief"
          value={formData.companyProcess}
          onChange={handleChange}
          required
          className="rounded-[6px] resize-y w-[90%] h-[90%]  relative pl-2 text-gray-500 placeholder-top-left pt-2 "
        />
      </div>

      

      <div className="h-1/10 flex justify-center items-center ">
        <label className="h-full w-full text-[18px] pl-[40px]">
          Make Post Anonymous:
          <input
            type="checkbox"
            name="isAnonymous"
            checked={formData.isAnonymous}
            onChange={handleCheckboxChange}
            className="h-[18px] w-[18px] border-2 border-gray-400 rounded-sm focus:ring-2 focus:ring-gray-400 "
          />
        </label>
      </div>

      <div className="h-1/10 w-full flex justify-center items-center ">
        <button
          className="bg-[#38ca84] h-[40px] w-[100px] rounded-md m-[20px] md:m-0 " 
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
export default Form;
