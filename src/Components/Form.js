import { useState } from "react";
function Form() {
    const [formData, setFormData] = useState({
        name: "",
        batch: "",
        companyName: "",
        companyProcess: "",
        ctc: "",
        linkedIn: "",
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
            name: "Anonymous",
            linkedIn: "", // Clears LinkedIn when anonymous
          });
        } else {
          setFormData({
            ...formData,
            isAnonymous: checked,
            name:''
          });
        }
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Add your submission logic here
        console.log(formData); // Example: Log the form data
        setFormData({
          name: "",
        batch: "",
        companyName: "",
        companyProcess: "",
        ctc: "",
        linkedIn: "",
        isAnonymous: false,
        })
      };
    return(
        <form
            className="h-full w-full bg-[#adeccd] pt-[10px] "
            onSubmit={handleSubmit}
          >
            <div className="h-[15%] w-full flex justify-around items-center">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                disabled={formData.isAnonymous}
                className=" w-2/5 h-3/5 rounded-[6px] pl-3"
              />

              <input
                type="text"
                name="batch"
                placeholder="Batch"
                value={formData.batch}
                onChange={handleChange}
                className=" w-2/5 h-3/5 rounded-[6px] pl-3"
              />
            </div>

            <div className="h-[15%] w-full flex justify-around items-center">
              <input
                type="text"
                name="companyName"
                placeholder="Company Name"
                value={formData.companyName}
                onChange={handleChange}
                className="w-2/5 h-3/5 rounded-[6px] pl-3"
              />

              <input
                type="text"
                name="ctc"
                placeholder="CTC per annum"
                value={formData.ctc}
                onChange={handleChange}
                className="w-2/5 h-3/5 rounded-[6px] pl-3"
              />
            </div>

            <div className="h-[35%] w-full flex justify-center items-center ">
              <input
                type="text"
                name="companyProcess"
                placeholder="Complete Information about the process in brief"
                value={formData.companyProcess}
                onChange={handleChange}
                className=" rounded-[6px] resize-y w-[90%] h-[90%] text-top pl-2 "
              />
            </div>

            <div className="h-[15%] w-full flex items-center justify-center ">
              <input
                type="text"
                name="linkedIn"
                placeholder="Linked Url"
                value={formData.linkedIn}
                onChange={handleChange}
                disabled={formData.isAnonymous}
                className=" rounded-[6px] resize-y w-[90%] h-3/5 text-left pl-2 pt-2 "
              />
            </div>

            <div className="h-1/10 flex justify-center items-center ">
              <label className="h-full w-full text-[18px] pl-[40px]">
                Make Name Anonymous:
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
                className="bg-[#38ca84] h-[40px] w-[100px] rounded-md "
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
    )
}
export default Form