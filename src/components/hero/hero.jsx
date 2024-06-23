import { AppointmentButton, Title, ImageBanner } from "./components";
const Hero = () => {
  return (
    <>
      <div className="pt-[150px] pb-[100px] w-full flex justify-center">
        <div className="w-full max-w-[1500px] flex flex-col lg:flex-row justify-between items-start lg:items-center px-5 gap-10 ">
          <Title />
          <AppointmentButton />
        </div>
      </div>
      <ImageBanner />
    </>
  );
};

export default Hero;
