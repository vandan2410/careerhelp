import axios from "axios";
import { useEffect,useState } from "react";
import { useNavigate } from "react-router";
import Navbar from "../Components/Navbar";
function Home() {
    
    const navigate=useNavigate();
    axios.defaults.withCredentials=true;
    useEffect(()=>{
        axios.get('http://localhost:5000/home')
        .then(res=>{
            if(res.data.valid)
            {
                
            }
            else{
                navigate('/login');
            }
        })
        .catch(err => console.log(err))
    },[])
    return (
        <div className="h-screen w-full">
            <Navbar/>
        </div>
    )
}
export default Home;