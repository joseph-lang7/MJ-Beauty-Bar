import { Title, ImageBanner } from "./components";
import AppointmentButton from "../appointment-btn/appointment-btn";
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
