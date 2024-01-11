function Footer(params) {
  return (
    <div className="h-full w-full bottom-0 text-[#fffefe] text-[18px] backdrop-blur-sm p-2 ">
      <div className="h-full w-full flex items-center justify-center " >
        <p>Developed  By:</p>
      </div>
      <div className="flex justify-around items-center  ">
        <span className="flex  justify-center items-center ">
          <p className="p-3" >Vandan Hood</p>
          <a href="https://www.linkedin.com/in/vandan-hood/" target="_" className="p-1" >
            <img className="h-8 w-8" src="./img/linkedin.png" alt="" />
          </a>
          <a href="https://github.com/vandan2410" target="_" >
            <img className="h-6 w-6  " src="./img/github.gif" alt="" />
          </a>
        </span>
        <span className="flex  justify-center items-center ">
          <p className="p-3" >Avishkar Gunjal</p>
          <a href="https://www.linkedin.com/in/avishkargunjal/" target="_" className="p-1">
            <img className="h-8 w-8" src="./img/linkedin.png" alt="" />
          </a>
          <a href="https://github.com/Avi-88" target="_" >
            <img className="h-6 w-6" src="./img/github.gif" alt="" />
          </a>
        </span>
        
      </div>
    </div>
  );
}
export default Footer;
