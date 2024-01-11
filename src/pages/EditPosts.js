import Navbar from "../Components/Navbar";
import EditPost from "../Components/EditPost";
function EditPosts(params) {

    

  return (

    <div className="h-screen w-full ">
      <div>
        <Navbar />
      </div>
      <div className="h-full w-full flex flex-col items-center justify-center">
        <div className="bg-[#183053] text-[25px] text-[#fffefe] w-3/5 p-4 text-center " >
          <p>Edit Post</p>
        </div>
        <div className="h-4/5 w-3/5" >
          <EditPost />
        </div>
      </div>
    </div>
  );
}
export default EditPosts;
