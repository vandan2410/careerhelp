import Login from '../Components/Login'

function Landing()
{
    return (
        <div className="main flex font-serif">
            {/* <div className="left-color h-[100vh] w-[40%] bg-[#37d689] flex items-center justify-end">
                <div className="bg-[#37d689]   h-[600px] w-[400px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex flex-col justify-center items-center">
                    <div className='w-[300px] flex flex-col justify-center items-center text-center mb-[30px]'>
                        <p className="text-[35px] mb-[30px]">CareerHelp</p>
                        <p className="text-[25px]">All you need to know about the company</p>
                    </div>  
                </div>
            </div>
            <div className="h-[100vh] w-[60%] relative flex items-center bg-white">
                <div className="h-[600px] w-[800px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] left-0 absolute bg-white flex justify-center items-center" >
                    <Login/>
                </div>
            </div> */}
            <div className=" wraps h-[100vh] w-full flex justify-center items-center " >
                <div className=' popup bg-tranparent shadow-[0_3px_10px_rgb(0,0,0,0.2)] h-3/4 w-4/5  grid grid-cols-2 '>
                    <div className='w-[300px] flex flex-col justify-center items-center text-center mb-[30px] col-span-4'>
                        <p className="text-[35px] mb-[30px]">CareerHelp</p>
                        <p className="text-[25px]">All you need to know about the company</p>
                    </div> 
                    <div className='col-span-8 flex justify-center items-center w-full h-full' >
                    < Login />
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}
export default Landing;