import Login from "../Components/Login";

function Landing() {
  return (
    <div className="main flex ">
      <div className=" wraps h-[100vh] w-full flex justify-center items-center ">
        <div className=" popup bg-tranparent backdrop-blur-sm h-3/4 w-3/5 md:grid md:grid-cols-12 rounded-md ">
          <div className=" flex flex-col justify-center items-center text-center md:pb-[50px] col-span-4 pl-[20px] h-[20%] md:h-full text-[#c5c2c2]">
            <p className="md:text-[35px] md:mb-[30px] pt-[20px] text-[25px]">
              CareerHelp
            </p>
            <p className="text-[25px] md:block hidden">
              All you need to know about the company
            </p>
          </div>
          <div className="col-span-8 flex justify-center items-center w-full md:h-full h-[80%] pt-[50px]">
            <Login />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Landing;
