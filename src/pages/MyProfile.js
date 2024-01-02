import Navbar from "../Components/Navbar"
import Profile from "../Components/Profile"

function MyProfile() {
    
    return(
        <div className="h-full w-full" >
            <div className="navbar h-full w-full" >
                <Navbar />
            </div>
            <div className="profile h-full w-full flex justify-center items-center " >
                <Profile/>
            </div>
        </div>
    )
}

export default MyProfile