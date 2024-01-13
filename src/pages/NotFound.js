import { Link } from 'react-router-dom';
import notfound from '../img/notfound.jpeg';
function NotFound(){
    return(
        <div className="h-screen w-[100%] flex justify-center items-center flex-col">
            <img className ='h-[400px] w-[400px]' src={notfound} alt=""/>
            <p className="pt-[20px] font-serif text-[20px] text-[#c5c2c2] ">"Incorrect Address"</p>
            <button className="bg-[#3e6fb8] h-[40px] w-[100px] rounded text-[#c5c2c2]" type="button"><Link to="/login" >Home Page</Link></button>
        </div>
    );
}
export default NotFound;