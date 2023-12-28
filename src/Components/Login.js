import React, { useState } from 'react';
import Signin from './Signin';
function Login(){

  
    
    const [isNewUser, setIsNewUser] = useState(true);
    const handleClick = () => {
      setIsNewUser(!isNewUser); 
    
}
    return (isNewUser ? <div className="form h-full w-full flex flex-col justify-center items-center pb-[100px] font-serif">
    <p className="mb-[25px] text-[30px]" >Login</p>
  <form className="w-[40%] flex justify-center  flex-col" >
    

  <input type="email" name="uname" placeholder="Email" required className="h-[35px] border-[1px] border-solid w-full flex justify-center pl-[10px] mb-[20px] rounded-md p-3"/>
          
          
            
          <input type="password" name="uname" placeholder="Password" required className="h-[35px] border-[1px] border-solid w-full flex justify-center pl-[10px] mb-[20px] rounded-md p-3"/>
    <div className="w-full flex justify-center mt-[25px]">
      <button className="bg-[#38ca84] h-[40px] w-[100px] rounded text-white" type="button">Login</button>
    </div>
    <div className="w-full flex justify-center mt-[25px]" >
    <p>New User?<button className='text-[#38ca84] ml-[10px]' onClick={handleClick}>Sign up</button></p>
    </div>
    
  </form>
</div>:
<Signin change={handleClick} />)
      
        
    
}
export default Login;