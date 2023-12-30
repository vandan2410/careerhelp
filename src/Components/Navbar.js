import axios from "axios";

function Navbar() {
    const handleLogout = (e) =>{
        e.preventDefault();
        axios.get('http://localhost:5000/logout')
        .then(res=>{
            if(res.data.logout)
            {
                // eslint-disable-next-line no-restricted-globals
                location.reload(true);
            }
            else{
                alert('Error')
            }
        }).catch(err=>{
            console.log(err);
        })
    }
    return(
        <div className="h-[10%] w-full flex items-center justify-end pr-[30px]">
            <button className="h-[60%] w-[100px] bg-[#38ca84] text-white rounded-md " onClick={handleLogout}>Logout</button>
        </div>
    )
}
export default Navbar;