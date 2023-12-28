function Signin({change}){
    return(
        <div className="form h-full w-full flex flex-col justify-center items-center pb-[70px] font-serif">
          <p className="md:mb-[25px] text-[30px]" >Sign up</p>
        <form className="w-[40%] flex justify-center  flex-col" >
          

            
            <input type="email" name="uname" placeholder="Email" required className="h-[35px] border-[1px] border-solid w-full flex justify-center pl-[10px] mb-[20px] rounded-md p-3"/>
          
          
            
            <input type="password" name="uname" placeholder="Password" required className="h-[35px] border-[1px] border-solid w-full flex justify-center pl-[10px] mb-[20px] rounded-md p-3"/>
          
          
            
            <input type="password" name="pass" placeholder="Confirm Password" required className="h-[35px] border-[1px] border-solid w-full pl-[10px] mb-[20px] rounded-md p-3"/>
            
         
          <div className="w-full flex justify-center mt-[20px]">
            <button className="bg-[#38ca84] h-[40px] w-[50%] rounded text-white" type="button">Sign Up</button>
          </div>
          <div className="w-full flex justify-center mt-[25px]">
            <p>Already a User?<button className='text-[#38ca84] ml-[10px]' onClick={change}>Login </button></p>
          </div>
          
        </form>
      </div>
    );
}
export default Signin;