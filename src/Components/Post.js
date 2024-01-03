import { useState } from "react";
function Post() {
    const [isVisible , setIsVisible] = useState(false);
    const handlePost = async(e)=>{
        e.preventDefault();
        setIsVisible(!isVisible)
    }
        
    
  return (
    <div className="h-full w-full flex justify-center items-center flex-col ">
      <div className="flex items-center justify-between h-full w-[80%] bg-[#38ca84] p-[10px] text-[20px] text-white" onClick={handlePost}>
        <p className="">Company Name</p>
        <span className="flex w-[30%] items-center justify-around ">
          <p>Batch</p>
          <p>CTC</p>
        </span>
      </div>
      <div className={`h-full w-4/5 bg-[#adeccd] `+  (isVisible === true ? " block" : " hidden")}>
        <p className="p-5">
          Round 1: Round1 is an Aptitude round that is on the Amcat platform.
          This round consists of four sections namely. Quant (24 questions 35
          minutes) Logical (25 questions 35 minutes) Code debugging (7 questions
          20 minutes) Essay question for 15 minutes. 
          Round 2: Based on your
          performance you are eligible for GenC Next interview or GenC
          interview, I am selected for GenC. The interview is scheduled after 2
          weeks of the exam, and we get our mails of the interview one day
          before. The interview was scheduled on the Amcat Platform. In an
          interview there are also three sections like first they will ask you
          questions regarding your academics i.e Technical Questions, they are
          given some Aptitude questions for solving, and then HR questions.
          These rounds are combined into one interview for about 40 minutes. The
          interviewer is on time, and he told me his name and told me that he is
          going to take first TR, then Aptitude, and the HR.
        </p>
        <span className="flex justify-around items-center bg-[#4ed895] p-[5px]">
          <p className=" text-[20px] ">Contributed By : Vandan Hood</p>
          <a href="/">
            <img className="h-8 w-8" src="./img/linkedin.png" alt="" />
          </a>
        </span>
      </div>
    </div>
  );
}
export default Post;
