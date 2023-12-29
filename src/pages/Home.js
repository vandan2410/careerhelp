import axios from "axios";
import { useEffect,useState } from "react";
import { useNavigate } from "react-router";

function Home() {
    const [name,setName]=useState('');
    const navigate=useNavigate();
    axios.defaults.withCredentials=true;
    useEffect(()=>{
        axios.get('http://localhost:5000/home')
        .then(res=>{
            if(res.data.valid)
            {
                setName(res.data.uname);
            }
            else{
                navigate('/login');
            }
        })
        .catch(err => console.log(err))
    },[])
    return (
        <div>
            Welcome {name}
        </div>
    )
}
export default Home;