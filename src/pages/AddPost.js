import Navbar from "../Components/Navbar";
import Form from "../Components/Form";
function AddPost() {
  return (
    <div className="h-screen w-full font-serif ">
      <Navbar />
      <div className="h-[90%] w-full flex flex-col justify-center items-center ">
        <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] md:h-4/5 md:w-3/5 w-4/5 h-[90%] flex flex-col justify-center items-center">
          <p className="w-full text-[25px] flex justify-center items-center  md:h-[15%] h-[10%] bg-[#38ca84] text-white ">
            Add your experience
          </p>
          <div className="md:h-[85%] w-full h-[90%]" >
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}
export default AddPost;
