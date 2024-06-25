const OurServices = () => {
  return (
    <div className="w-full flex flex-col gap-10 lg:flex-row lg:justify-between pb-20">
      <div className="w-full lg:w-1/3 flex justify-center">
        <img
          className="object-cover w-full max-w-[400px] h-[400px] rounded-md"
          src="/makeup3.jpeg"
          alt="woman using jade roller"
        />
      </div>
      <div className="w-full lg:w-2/3 flex flex-col items-center justify-center gap-7">
        <h3 className="capitalize text-4xl sm:text-6xl max-w-[650px] px-5 text-center leading-[50px] sm:leading-[100px]">
          Our services will enhance{" "}
          <span className="text-[#A27474]">your glow</span>
        </h3>
        <div className="w-full flex justify-center">
          <div className="flex flex-wrap gap-5 w-full justify-center max-w-[550px] text-center text-xl font-[poppins] px-5">
            <p>Lash Lifts</p>
            <p>Waxings</p>
            <p>Facials</p>
            <p>Makeup</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
