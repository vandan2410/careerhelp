import React, { useState } from 'react';
import Signin from './Signin';
function Login(){
    const [isNewUser, setIsNewUser] = useState(true);
    const handleClick = () => {
      setIsNewUser(!isNewUser); 
    
}
const [formData, setFormData] = useState({
  username: '',
  password: ''
});

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormData({
    ...formData,
    [name]: value
  });
};

const handleSubmit = (e) => {
  e.preventDefault();
  // Use formData in further processing (e.g., send it to an API)
  console.log('Form data:', formData);
  setFormData({
    username: '',
    password: ''
  });
};

    return (isNewUser ? <div className="form h-full w-full flex flex-col justify-center items-center md:pb-[100px] pb-[70px] font-serif">
          <p className="mb-[25px] text-[30px]" >Login</p>
        <form className="w-[40%] flex justify-center  flex-col " id='loginForm' onSubmit={handleSubmit}>
    

          <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleInputChange} required className="h-[35px] border-[1px] border-solid w-full flex justify-center pl-[10px] mb-[20px] rounded-md p-3"/>
          
          
            
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleInputChange} required className="h-[35px] border-[1px] border-solid w-full flex justify-center pl-[10px] mb-[20px] rounded-md p-3"/>
    <div className="w-full flex justify-center mt-[25px]">
      <button className="bg-[#38ca84] h-[40px] w-[100px] rounded text-white" type="submit">Login</button>
    </div>
    <div className="w-full flex justify-center items-center mt-[25px]" >
    <p>New User?<button className='text-[#38ca84] ml-[10px]' onClick={handleClick}>Sign up</button></p>
    </div>
    
  </form>
</div>:
<Signin change={handleClick} />)
      
        
    
}
export default Login;