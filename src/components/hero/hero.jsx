import { Button, Title, ImageBanner } from "./components";

const Hero = () => {
  return (
    <>
      <div className="pt-[300px] w-full h-auto  flex justify-center">
        <div className="w-full max-w-[1500px] flex flex-col lg:flex-row justify-between items-start lg:items-center px-5 gap-10 mb-20">
          <Title />
          <Button />
        </div>
      </div>
      <ImageBanner />
    </>
  );
};

export default Hero;
