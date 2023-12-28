function Login({className}){
    return(
        <div className="form h-full w-full flex flex-col justify-center items-center pb-[100px] font-serif">
          <p className="mb-[25px] text-[30px]" >Login</p>
        <form>
          <div className="input-container mb-[10px] text-[18px]">
            <label>Email </label>
            </div>

            <div className="mb-[10px]" >
            <input type="text" name="uname" placeholder="Email" required className="h-[35px] border-[1px] border-solid w-[275px] flex justify-center pl-[10px]"/>
          </div>
          <div className="input-container mb-[10px] text-[18px]">
            <label>Password </label>
            </div>
              
            <div>
            <input type="password" name="pass" placeholder="Password" required className="h-[35px] border-[1px] border-solid w-[275px] pl-[10px]"/>
            
          </div>
          <div className="w-full flex justify-center mt-[25px]">
            <button className="bg-[#38ca84] h-[40px] w-[100px] rounded text-white" type="button">Submit</button>
          </div>
          
        </form>
      </div>
    );
}
export default Login;