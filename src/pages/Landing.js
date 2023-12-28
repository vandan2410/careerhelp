import Login from '../Components/Login'


function Landing()
{

    return (
        <div className="main flex font-serif">
            
            <div className=" wraps h-[100vh] w-full flex justify-center items-center " >
                <div className=' popup bg-tranparent shadow-[0_3px_10px_rgb(0,0,0,0.2)] h-3/4 w-4/5  md:grid md:grid-cols-12 '>
                    <div className=' flex flex-col justify-center items-center text-center md:pb-[50px] col-span-4 pl-[20px] h-[20%] md:h-full'>
                        <p className="text-[35px] md:mb-[30px]">CareerHelp</p>
                        <p className="text-[25px] md:block hidden">All you need to know about the company</p>
                    </div> 
                    <div className='col-span-8 flex justify-center items-center w-full md:h-full h-[80%] pt-[50px]' >
                    < Login />
                    
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}
export default Landing;