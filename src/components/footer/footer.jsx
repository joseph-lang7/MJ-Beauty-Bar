const Footer = () => {
  return (
    <div className="pb-8 pt-20 flex flex-col gap-20 ">
      <div className="w-full font-[poppins] flex justify-center">
        <div className="max-w-[1000px] w-full flex flex-col md:flex-row md:justify-between items-center gap-7 px-10">
          <div className="text-center flex flex-col gap-3">
            <h3 className="text-xl">Open Hours</h3>
            <p>Monday to Friday 9:00am-5:00pm</p>
            <p>Saturday 11:00am-3:00pm</p>
            <p>Sunday Closed</p>
          </div>
          <div className="text-center flex flex-col gap-3">
            <h3 className="text-xl">Contact</h3>
            <p>847 Random St, Eureka, CA</p>
            <p className="hover:translate-x-3 cursor-pointer transition-all duration-500 ">
              mjbeautybar@gmail.com
            </p>
            <p className="hover:translate-x-3 cursor-pointer transition-all duration-500">
              123-456-2899
            </p>
          </div>
        </div>
      </div>
      <div className="text-center font-[poppins]">
        <span className="text-xs">
          &#169; {new Date().getFullYear()}, MJ Beauty Bar. All Rights Reserved
        </span>
      </div>
    </div>
  );
};

export default Footer;
