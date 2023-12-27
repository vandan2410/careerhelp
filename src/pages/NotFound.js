import { Link } from 'react-router-dom';
function NotFound(){
    return(
        <div className="h-screen w-[100%] flex justify-center items-center flex-col">
            <img className ='h-[400px] w-[400px]' src="./img/notfound.jpeg" alt=""/>
            <p className="pt-[20px] font-serif text-[20px]">"Incorrect Address"</p>
            <button className="bg-green-500 h-[40px] w-[100px] rounded" type="button"><Link to="/home" >Home Page</Link></button>
        </div>
    );
}
export default NotFound;